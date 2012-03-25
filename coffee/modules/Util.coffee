UserHome = require('ui/window/UserHome').UserHome



exports.Util = 
	alert : (args) ->
	  alert args
	
	setRightButton : (win,callback,style) ->
			if !callback
				alert 'You have to set callback func '
			#default setting
			# no test for android
			if !style 
				style =
					title:'再読込'
					systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
					backgroundColor:'black'
			
			if Titanium.Platform.osname == 'android' 
				activity = Titanium.Android.currentActivity
				if activity 
					acitivity.onCreateOptionsMenu = (e) ->
						menu = e.menu
						menuItem = menu.add {title: "再読込"}
						menuItem.setIcon "dark_refresh.png"
						menuItem.addEventListener "click", (e) ->
							callback
							return
						return
			else
			
				info "### style ### "
				rightButton = Titanium.UI.createButton style
				win.rightNavButton = rightButton
				rightButton.addEventListener 'click', () ->
					Ti.API.info 'click right button:'+callback
					callback()
					return
				return rightButton
	
	setLeftButton : (win,callback, style) ->
			
			if !callback
				alert 'You have to set callback func '
			#default setting
			# no test for android
			if !style 
				style =
					# backgroundImage:'../images/titlebar_red.png'
					title:'update'
					systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
			
			
			if Titanium.Platform.osname == 'android' 
				activity = Titanium.Android.currentActivity
				if activity 
					acitivity.onCreateOptionsMenu = (e) ->
						menu = e.menu
						menuItem = menu.add {title: "再読込"}
						menuItem.setIcon "dark_refresh.png"
						menuItem.addEventListener "click", (e) ->
							callback

			else

				leftButton = Titanium.UI.createButton style
				win.leftNavButton = leftButton
				leftButton.addEventListener 'click', () ->
					Ti.API.info 'click right button:'+callback
					callback()
					return
				return
	
	
	
	
	create2DMatrixDialog : (win) ->
		
		t = Titanium.UI.create2DMatrix()
		t = t.scale 0
		win.transform = t

		# create first transform to go beyond normal size
		t1 = Titanium.UI.create2DMatrix()
		t1 = t1.scale(1.1)
		a = Titanium.UI.createAnimation()
		a.transform = t1
		a.duration = 200

		# when this animation completes, scale to normal size
		a.addEventListener 'complete', () ->
			Titanium.API.info 'here in complete'
			t2 = Titanium.UI.create2DMatrix()
			t2 = t2.scale(1.0)
			win.animate {transform:t2, duration:200}

		win.open a
		return
	
	
	validateText : (text,min,max,not_null) ->
		info 'target text:'+text
		#use validate func I used when training
		textLength = text.length
		info 'text length:'+textLength
		if  not_null and !text
			info 'null is not accepted. write something'
			return 0
		else if min > textLength or textLength > max
			info 'invalid text length'
			return 0
		else 
			info 'OK. valid text'
			return 1
		
	#go to collection view
	createCollectionView : () ->
		Ti.API.info "createCollectionWindow"
		newWindow = Ti.UI.createWindow 
			title:setTT "APPTITLE" 
			backgroundColor:'#fff'
			url:'../controller/Collection.js'
			navBarHidden:true
			modal:true
			barColor: Const.BARCOLOR
		return newWindow
	
	createUserHomeView : (user_id) ->
		newWindow = new UserHome(user_id)
		return newWindow	
	
	move : (target,startWidth,endWidth)->
		info '--------move---------'
		
		#なぜか初期化されない時があるのでそれまで待つ
		target.width = startWidth while target.width > startWidth
		
		info target.width
		info startWidth
		info endWidth
		
		move = ()->
			if target.width >= endWidth
				info '----------move complete----------'
				return
			
			speed = 50
			limit = Number endWidth
			rest = endWidth - startWidth
			target.width += rest / speed
			setTimeout move, 10
			
			return
		move()
		return

	updateUserData : (json) ->
		info 'updateUserData'
		#---------------------
		# status & profile
		#---------------------
		profile = json.profile
		icon.image = if profile.picture_url then profile.picture_url else '../images/' + Const.DEFALT.USER
		name.text = profile.nickname
		
		# dayOnRibbon.text =  profile.day_total + ' days '
		#---------------------
		# point bar
		#---------------------
		weeklyPoint = 50
		recordPoint = 100
		endWidth = (pointbar_max.width * (weeklyPoint / recordPoint))
		tt.module.move pointbar_now, 0, endWidth
		#---------------------
		# weekly record
		#---------------------
		info json.weekly_record
		weeklyRecord = json.weekly_record
		for i in  weeklyRecord
			info i
			if i.wday != null
				info i
				stars[i.wday].backgroundImage = '../images/star/' + i.color_id + '.png'
		return
