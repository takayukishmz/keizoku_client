BaseWindow 		= require('ui/common/BaseWindow').BaseWindow
RecordList	 	= require('ui/window/RecordList').RecordList
SupportList	 	= require('ui/window/SupportList').SupportList
UserInfo 		= require('ui/home/UserInfo').UserInfo
PointBar 		= require('ui/home/PointBar').PointBar
WeeklyResult 	= require('ui/home/WeeklyResult').WeeklyResult

class UserHome extends BaseWindow
	constructor : (user_id) ->
		@user = 
			user_id : user_id
			isSupport : ""
		
		super {title:'userHome'}
		
		@userInfo = new UserInfo()
		@pointBar = new PointBar()
		@weeklyResult = new WeeklyResult()
		
		@view.add @userInfo.getNodeView()
		@view.add @pointBar.getNodeView()
		@view.add @weeklyResult.getNodeView()
		
		@updateView(Ti.App.user_id, @user.user_id)
		
		return @win
		
	setView : () =>
		@view = Titanium.UI.createView styles.base
		scrollView = Titanium.UI.createScrollView styles.scrollview
		
		@supporter = Titanium.UI.createButton styles.supporter
		@supporting = Titanium.UI.createButton styles.supporting
		@like = Titanium.UI.createButton styles.like
		@history = Titanium.UI.createButton styles.history
		@history_title = Titanium.UI.createLabel styles.history_title
		
		history_text = Titanium.UI.createLabel styles.history_text
		supporter_text = Titanium.UI.createLabel styles.supporter_text
		supporting_text = Titanium.UI.createLabel styles.supporting_text		
		like_text = Titanium.UI.createLabel styles.like_text
		
		@history.add history_text 
		@supporter.add supporter_text 
		@supporting.add supporting_text 
		@like.add like_text 		
		
		@view.add @supporter		
		@view.add @supporting 
		@view.add @history 
		@view.add @history_title
		@view.add @like
		
		scrollView.add @view
		@win.add scrollView
					
		
	

	setEvent : () =>
		info 'setEvent'
		@history.addEventListener 'click', (e)=>
			$.tabs.currentTab.open new RecordList(@user.user_id) ,{animated:true}
			return
		@supporter.addEventListener 'click', (e)=>
			$.tabs.currentTab.open new SupportList(@user.user_id, 'getSupporters'),{animated:true}
			return
		
		@supporting.addEventListener 'click', (e)=>
			$.tabs.currentTab.open new SupportList(@user.user_id, 'getSupportings'),{animated:true}
			return
			
		@win.addEventListener 'focus', (e)  ->
	

	setButton: () =>
		if Number Ti.App.user_id != Number @user.user_id
			@rightButton = $.Util.setRightButton @win, @SupportButton, {title:setTT("SUPPORT")}
			return
	

	updateView : (user_id,selected_user_id) =>
		$.API.callAPI 'GET','getUserData',{user_id:user_id, selected_user_id:selected_user_id}, (json) =>
			if json.isSupport and Number user_id != Number selected_user_id
				info_obj @rightButton
				@rightButton.title = setTT("SUPPORTING")
				@user.isSupport = true
			
			@userInfo.setUserData json.profile
			@weeklyResult.update json.weekly_record 
			
			return
	
	
	#サポートボタンを押したときの処理
	SupportButton : () =>
		
		params = 
			user_id:Ti.App.user_id
			support_user_id:@user.user_id
		
		#---------
		#Remove
		#---------
		if @user.isSupport
			$.API.callAPI 'GET','remove', params, (json) =>
				if json.remove_success
					@rightButton.title = setTT("SUPPORT")
					@user.isSupport = false #サポートしていない	

				if json.message
					alert json.message
					return
				return
		#---------
		# Support
		#---------
		else
			$.API.callAPI 'GET','execSupport',params, (json) =>
				if json.support_success
					@rightButton.title = setTT("SUPPORTING")
					@user.isSupport = true #サポートしている	
					
				if json.message
					alert json.message
					return
				return
		return
		
	
	
	createRecordListView : (user_id) -> 
		newWindow = new RecordList(user_id) 
		return newWindow
	
		
	createSuppotListView : (listType,user_id) -> 
		Ti.API.info "createSupportListWindow"
		newWindow = Ti.UI.createWindow  
			title:listType
			backgroundColor:'#fff'
			url:'../controller/SupportList.js'
			barColor: Const.BARCOLOR
			data:
				listType:listTypes
				user_id:user_id
		
		return newWindow
	
	

exports.UserHome = UserHome	


styles = 
	icon:
		left: 5,
		top: 5,
		width: 44,
		height: 44,
		image:'../images/user.png'
		borderRadius:3
	name:
		left: 57,
		top: 16,
		width: 200,
		height: 21,
		text: 'person1',
		color: '#000000'
	base:
		backgroundImage:'images/UI/base_pink.png'
	supporter:
		left: 5,
		top: 310,
		width: 100,
		height: 44,
		color: '#324f85'
		backgroundImage:'images/UI/bar_white_short_155x44.png'
	supporting:
		left: 110,
		top: 310,
		width: 100,
		height: 44,
		color: '#324f85'
		backgroundImage:'images/UI/bar_white_short_155x44.png'
	like:
		left: 214,
		top: 310,
		width: 100,
		height: 44,
		color: '#324f85'
		backgroundImage:'images/UI/bar_white_short_155x44.png'
	history:
		left: 5,
		top: 250,
		width: 310,
		height: 44,
		color: '#324f85'
		backgroundImage:'images/UI/bar_white_310x44.png'
	history_title:
		left:5,
		top: 230,
		width: 155,
		height: 16,
		text: 'Learning History'
		textAlign:'left'
		color: '#777'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	history_text:
		left: 20,
		top: 0,
		width: 127,
		height: 44,
		text: '-- Records'
	supporter_text:
		left: 0,
		top: 11,
		width: 100,
		height: 22,
		textAlign:'center'
		text: 'Supporter'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	supporting_text:
		left: 0,
		top: 11,
		width: 100,
		height: 22,
		textAlign:'center'
		text: 'Support'
		font: {fontFamily: 'Helvetica', fontSize: 14}	
	like_text:
		left: 0,
		top: 11,
		width: 100,
		height: 22,
		textAlign:'center'
		text: 'My Like'
		font: {fontFamily: 'Helvetica', fontSize: 14}