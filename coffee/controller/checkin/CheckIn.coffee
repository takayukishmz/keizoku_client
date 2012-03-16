@rootWindow = Titanium.UI.currentWindow
Ti.App.rootWindow = rootWindow


Titanium.include '../../lib/ServerAPI.js'
Titanium.include '../../styles/checkin/CheckIn_style.js'
Titanium.include '../../modules/checkin/CheckIn_module.js'

### variables ################################################################
share_facebook = false;
share_twitter = false;
### UI #######################################################################
win = Ti.UI.createWindow 
	title:'share'
	backgroundImage:'../../images/UI/base_pink.png'
	barColor: Const.BARCOLOR



inputData = []

comment = Ti.UI.createTableViewRow {height:40}
text = Titanium.UI.createTextField styles.text
comment.header = 'comment'

comment.add text

term = Ti.UI.createTableViewRow {
	height:37
	backgroundImage:'../../images/UI/base_pink.png'
}
header_name = 'time(minute)'
term.header = header_name

term_content = Titanium.UI.createTabbedBar
	labels:TEXT.TERM_ARRAY
	backgroundColor:'#336699'
	left:0
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR
	height:40
	width:300
	index:0

term.add term_content

chenge = (name) ->
	info name
	header_name = name
	return


term_content.addEventListener 'click', (e)->
	info_obj e
	info e.source.labels[e.index]
	info_obj tableView.data[1].headerTitle = e.source.labels[e.index]
	return


tw = Ti.UI.createTableViewRow {height:40}
switch_tw = Titanium.UI.createSwitch styles.switch_tw
tw.title = 'twitter'
tw.header = 'social'

tw.add switch_tw

fb = Ti.UI.createTableViewRow {height:40}
switch_fb = Titanium.UI.createSwitch styles.switch_fb
fb.title = 'facebook'

fb.add switch_fb


inputData[0] = comment
inputData[1] = term
inputData[2] = tw
inputData[3] = fb

tableView = Titanium.UI.createTableView 
	data:inputData
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
	backgroundImage:'../../images/UI/base_pink.png'

win.add tableView


Ti.App.nav = Ti.UI.iPhone.createNavigationGroup 
	window:win
	
rootWindow.add Ti.App.nav


### modules ##################################################################
# right button
tt.UI.setRightButton tt.execCountUp,{title:'記録する'} 

tt.UI.setLeftButton () ->
	rootWindow.close()
	return
, {title:setTT("CANCEL")}

### listener #################################################################
win.addEventListener 'focus',(e)->
	Ti.API.info 'CheckIn focus'
	indicator.setStatus(false)
	return


win.addEventListener 'blur',(e)->
	Ti.API.info 'CheckIn blur'
	indicator.setStatus(true)
	return

#facebook
switch_fb.addEventListener 'change',(e) ->
	info 'change switch_fb'
	if Ti.Facebook.loggedIn
		info 'fb already login'
		# tt.FB.getFriends()
		tt.FB.getProfile()
	else
		info 'fb login'
		Ti.Facebook.authorize();


#twitter
switch_tw.addEventListener 'change',(e) ->
	info 'change switch_tw'
	if Ti.App.twitterLogin
		info 'twitter already login'
	else
		info 'twitter login'
		Ti.App.twitterLogin = true
		Ti.App.twitterApi.init()
    

