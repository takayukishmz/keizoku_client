info 'common_module'
tt.module = {}
do ->
	tt.UI.tableView = Titanium.UI.createTableView() 
		#view rowを引数の数だけつくる関数
		#更新ボタンの処理
	tt.UI.setRightButton = (callback) ->
			# if Titanium.Platform.osname === 'android'
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
				rightBotton = Titanium.UI.createButton
					# backgroundImage:'../images/titlebar_red.png'
					title:'再読込'
					systemButton: Titanium.UI.iPhone.SystemButton.REFRESH

				win.rightNavButton = rightBotton
				rightBotton.addEventListener 'click', () ->
					Ti.API.info 'click right button:'+callback
					callback()
					return
				return
	
	tt.UI.setLeftButton = (callback) ->
			# if Titanium.Platform.osname === 'android'
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
				leftBotton = Titanium.UI.createButton
					# backgroundImage:'../images/titlebar_red.png'
					title:'cancel'
					# systemButton: Titanium.UI.iPhone.SystemButton.REFRESH

				win.leftNavButton = leftBotton
				leftBotton.addEventListener 'click', () ->
					Ti.API.info 'click right button:'+callback
					callback()
					return
				return
	
	
	
	
	tt.UI.create2DMatrixDialog = (win) ->
		
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
	
	tt.UI.gotoUserDetail = (report) ->
		Ti.API.info "open UserDetailWindow"
		newWindow = Ti.UI.createWindow  
			backgroundColor:'#fff'
			url:'../controller/UserDetail.js'
	
			# Ti.App.ProjectHomeWindow = newWindow
		return newWindow
	
	
	tt.validateText = (text,min,max,not_null) ->
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
	tt.UI.createCollectionView = () ->
		Ti.API.info "createCollectionWindow"
		newWindow = Ti.UI.createWindow 
			# title:'~ Collection' 
			backgroundColor:'#fff'
			url:'../controller/Collection.js'
			navBarHidden:true
			modal:true
		return newWindow
	
	tt.UI.createUserHomeView = (user) ->
		Ti.API.info "createUserHomeView"
		newWindow = Ti.UI.createWindow  
			backgroundColor:'#fff'
			url:'../controller/UserHome.js'
			# navBarHidden:true
			# modal:true
			data:user
		
		return newWindow	
	
	return

