win = Titanium.UI.currentWindow
win.backgroundImage = '../images/UI/base_pink.png'

tt = {}
Titanium.include '../Util.js'
Titanium.include '../lib/Facebook.js'
Titanium.include '../lib/Twitter.js'
Titanium.include '../lib/ServerAPI.js'

view = Titanium.UI.createView
	width: 320,
	height: 460,

fb_button = Titanium.UI.createButton
	left: 7,
	top: 290,
	width: 306,
	height: 49,
	backgroundImage: '../images/button/fb_login.png'


view.add fb_button 

tw_button = Titanium.UI.createButton
	left: 7,
	top: 352,
	width: 306,
	height: 49,
	backgroundImage: '../images/button/tw_login.png'

view.add tw_button

l0 = Titanium.UI.createLabel
	left: 60,
	top: 112,
	width: 208,
	height: 32,
	text: 'ケイゾク。',
	font: {fontFamily: 'HiraMaruPro-W4', fontSize: 24},
	color: '#000000'


view.add l0 

l1 = Titanium.UI.createLabel
	left: 60,
	top: 152,
	width: 208,
	height: 32,
	text: 'Social Recording Learning',
	font: {fontFamily: 'Helvetica', fontSize: 12}

view.add l1 

win.add view

fb_button.addEventListener 'click', (e)->
	info 'click fb Login button'
	if Ti.Facebook.loggedIn
		info 'fb already login'
		# return
	else
		info 'fb login'
		Ti.Facebook.authorize();
		
	createNewUser()
	return

#twitter
tw_button.addEventListener 'click', (e)->
	info 'click twitter login button'
	if Ti.App.twitterLogin
		info 'twitter already login'
		
	else
		info 'twitter login'
		Ti.App.twitterApi.init()
	return


createNewUser = () ->
	tt.FB.getProfile (json) ->
		info json.method
		result = JSON.parse json.result
		user = result[0]
		params = 
			uid:user.uid
			name:user.name
			picture_url:user.pic_square
			email:user.email
		
		info_obj params
		API.callAPI 'GET','createUserData',params, (json) ->
			alert JSON.stringify json
			
	
  # body...

