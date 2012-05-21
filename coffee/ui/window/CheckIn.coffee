BaseWindow 	= require('ui/common/BaseWindow').BaseWindow
GetPointWindow = require('ui/window/GetPoint').GetPoint
Facebook = require('lib/Facebook').Facebook


class CheckIn extends BaseWindow
	constructor : () ->
		share_facebook = false
		share_twitter = false
		
		@fb = new Facebook()
		
		@params = 
			title:'rootWindow'
			navBarHidden:true
			modal:true
			
		super @params
		
		Ti.App.rootWindow = @win		
		return @win
		
		
	setView:() ->
		
		@text 			= Titanium.UI.createTextField styles.text
		@comment 		= Ti.UI.createTableViewRow {height:40}
		@term 			= Ti.UI.createTableViewRow styles.termRow
		@term_content 	= Titanium.UI.createTabbedBar styles.tabbedBar	
		@tw				= Ti.UI.createTableViewRow {height:40}
		@fb				= Ti.UI.createTableViewRow {height:40}
		@switch_tw 		= Titanium.UI.createSwitch styles.switch_tw
		@switch_fb 		= Titanium.UI.createSwitch styles.switch_fb
		
		@tw.title = 'twitter'
		@tw.header = 'social'
		@fb.title = 'facebook'
		@term.header = 'time(minute)'
		@comment.header = 'comment
		'
		@term.add @term_content
		@comment.add @text		
		@tw.add @switch_tw		
		@fb.add @switch_fb
		
		inputData = []
		inputData[0] = @comment
		inputData[1] = @term
		inputData[2] = @tw
		inputData[3] = @fb
		
		tableView = Titanium.UI.createTableView 
			data:inputData
			style:Titanium.UI.iPhone.TableViewStyle.GROUPED
			backgroundImage:'../../images/UI/base_pink.png'
		
		
		@subWin = Ti.UI.createWindow 
			title:'share'
			backgroundImage:'../../images/UI/base_pink.png'
			barColor: Const.BARCOLOR
		
		
		@subWin.add tableView		
		
		Ti.App.nav = Ti.UI.iPhone.createNavigationGroup 
			window:@subWin
		
		@win.add Ti.App.nav
		
		
		
	execCountUp : () =>
		info  'tt/execCountUp'
		if $.Util.validateText(@text.value,0,141)
			info  'valid textx value'
		else 
			info 'invalid input'
			@text.backgroundColor = '#ffcccc'
			return
		# set param
		params  =
			user_id:Ti.App.user_id
			comment:@text.value
			type:Const.REPORT_TYPE_SHARE
			time:10
			challenge_flg:0
			
		#call API
		@subWin.setRightNavButton actInd
		actInd.show()
		
		# Ti.App.nav.open messageWin,{animated:true}
		$.API.callAPI 'GET','countUpResult',params, (json) =>
			actInd.hide()
			$.Util.setRightButton @subWin, @execCountUp
			if json.success
				info 'success'
				newWindow = new GetPointWindow json.point
				Ti.App.nav.open newWindow,{animated:true}
				return
				
			else
				info 'false'
				return
		return
		
	setButton : () ->
		$.Util.setRightButton @subWin, @execCountUp,{title:'記録する'} 
		
		$.Util.setLeftButton @subWin, () =>
			@win.close()
			return
		, {title:setTT("CANCEL")}
		
		
	
	setEvent: () =>
		@subWin.addEventListener 'focus',(e)->
			Ti.API.info 'CheckIn focus'
			indicator.setStatus(false)
			return
			
		@subWin.addEventListener 'blur',(e)->
			Ti.API.info 'CheckIn blur'
			indicator.setStatus(true)
			return# body...
		
		#facebook
		@switch_fb.addEventListener 'change',(e) =>
			info 'change switch_fb'
			if Ti.Facebook.loggedIn
				info 'fb already login'
				@fb.getProfile()
				return
			else
				info 'fb login'
				Ti.Facebook.authorize()
				return
						
		#twitter
		@switch_tw.addEventListener 'change',(e) ->
			info 'change switch_tw'
			if Ti.App.twitterLogin
				info 'twitter already login'
			else
				info 'twitter login'
				Ti.App.twitterLogin = true
				Ti.App.twitterApi.init()
				return
						
		@term_content.addEventListener 'click', (e)->
			info_obj e
			info e.source.labels[e.index]
			tableView.data[1].headerTitle = e.source.labels[e.index]
			return
		
		
exports.CheckIn = CheckIn


styles = 
	text:
		color:'#336699',
		height:30,
		top:5,
		left:5,
		width:250,
		hintText:'hint',
		value:'hoge',
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
	time_content:
		color:'#336699',
		height:30,
		top:5,
		left:5,
		width:250,
		hintText:'hint',
		value:'15min',
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
		labels:TEXT.TERM_ARRAY
	
	term_bar:
		backgroundColor:'#336699'
		left:0
		style:Titanium.UI.iPhone.SystemButtonStyle.BAR
		height:40
		width:300
		index:0
	
	switch_tw:
		value:false
		top:5
		right:5
	switch_fb:
		value:false
		top:5
		right:5
	tabbedBar:
		labels:TEXT.TERM_ARRAY
		backgroundColor:'#336699'
		left:0
		style:Titanium.UI.iPhone.SystemButtonStyle.BAR
		height:40
		width:300
		index:0
	termRow:
		height:37
		backgroundImage:'../../images/UI/base_pink.png'