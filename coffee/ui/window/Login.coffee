BaseWindow 	= require('ui/common/BaseWindow').BaseWindow
FB = require('lib/Facebook').Facebook
Ti.App.checkInUpdate = true # flag to update HomeWindow
Ti.Facebook.appid = '203800316311425'
Ti.Facebook.permissions = ['publish_stream','manage_friendlists']


class Login extends BaseWindow
	@isSignUp:false
	
	constructor:(@callback)->
		@params = 
			title:'LoginWindow'
			navBarHidden:true
			modal:true			
		super @params
		
		@FB = new FB
		
		Ti.Facebook.addEventListener 'login', @updateLoginStatus
		# Ti.Facebook.addEventListener 'logout', @updateLoginStatus
		
	
	checkLogin:() =>
		info '#---------------checkLogin---------------#'
		if Ti.Facebook.loggedIn
			@login()
			return
		else
			@open()
			# Ti.Facebook.authorize()
			return
		
		
	login : () ->
		if Ti.Facebook.loggedIn && Ti.Facebook.uid
			params =
				uid:Ti.Facebook.uid
			
			$.API.callAPI 'GET','login',params, (res) =>
				if res.success
					alert res
					return
				@win.close()
			return
	

	signUp :() =>
		@FB.getProfile (json) =>
			info '#---------------getProfile---------------#'
			info json.method
			result = JSON.parse json.result
			user = result[0]
			params = 
				uid:user.uid
				name:user.name
				picture_url:user.pic_square
				email:user.email
			info_obj params
			
			$.API.callAPI 'GET','signUp',params, (res) =>
				if res.is_success
					@isSignUp = true
					@close()
					return
				else
					alert('invalid user data')
					return
			return
		return
	
	updateLoginStatus : () =>
		if Ti.Facebook.loggedIn
			# @signUp()
			@login()
		else 
			Ti.Facebook.authorize()
			
			
	setView :() =>
		@fb_button = Titanium.UI.createButton
			left: 7,
			top: 290,
			width: 306,
			height: 49,
			backgroundImage: 'images/button/fb_login.png'
			
			
		@win.add @fb_button 
		
		@tw_button = Titanium.UI.createButton
			left: 7,
			top: 352,
			width: 306,
			height: 49,
			backgroundImage: 'images/button/tw_login.png'

		@win.add @tw_button

		l0 = Titanium.UI.createLabel
			left: 60,
			top: 112,
			width: 208,
			height: 32,
			text: 'ケイゾク。',
			font: {fontFamily: 'HiraMaruPro-W4', fontSize: 24},
			color: '#000000'
			
			
		@win.add l0 

		l1 = Titanium.UI.createLabel
			left: 60,
			top: 152,
			width: 208,
			height: 32,
			text: 'Social Recording Learning',
			font: {fontFamily: 'Helvetica', fontSize: 12}
			
		@win.add l1 
	

	setEvent: () =>
		
		@fb_button.addEventListener 'click', (e)=>
			info 'click fb Login button'
			if Ti.Facebook.loggedIn and @isSignUp
				info 'fb already login'
				@win.close()
			else if Ti.Facebook.loggedIn
				@signUp()
			else 
				info 'fb login'
				Ti.Facebook.authorize();
				
			return
			
		# #twitter
		# @tw_button.addEventListener 'click', (e)->
		# 	info 'click twitter login button'
		# 	if Ti.App.twitterLogin
		# 		info 'twitter already login'
		# 		
		# 	else
		# 		info 'twitter login'
		# 		Ti.App.twitterApi.init()
		# 	return
		# 	
		# 

	
		
exports.Login = Login


styles = 
	a:1