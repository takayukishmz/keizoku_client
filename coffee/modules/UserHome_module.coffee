tt = {}
tt.UI = {}	

collection_all = 21
Titanium.include('Common_module.js');
do ->
	tt.UI.updateView = (user_id,selected_user_id) ->
		API.callAPI 'GET','getUserData',{user_id:user_id, selected_user_id:selected_user_id}, (json) ->
			
			if json.isSupport and Number user_id != Number selected_user_id
				rightButton.title = setTT("SUPPORTING")
				user.isSupport = true
			
			tt.module.updateUserData json
			return
	
	
	#サポートボタンを押したときの処理
	tt.module.SupportButton = () ->
		
		params = 
			user_id:Ti.App.user_id
			support_user_id:user.user_id
		
		#---------
		#Remove
		#---------
		if user.isSupport
			API.callAPI 'GET','remove', params, (json) ->
				if json.remove_success
					rightButton.title = setTT("SUPPORT")
					user.isSupport = false #サポートしていない	

				if json.message
					alert json.message
					return
				return
		#---------
		# Support
		#---------
		else
			API.callAPI 'GET','execSupport',params, (json) ->
				if json.support_success
					rightButton.title = setTT("SUPPORTING")
					user.isSupport = true #サポートしている	

				if json.message
					alert json.message
					return
				return
		return

	
	
	tt.UI.createRecordListView = (user_id) -> 
		Ti.API.info "createRecordListView"
		newWindow = Ti.UI.createWindow  
			title:'~ project' 
			backgroundColor:'#fff'
			url:'../controller/UserRecordList.js'
			user_id:user_id
			barColor: Const.BARCOLOR
		Ti.App.CheckInWindow = newWindow
		return newWindow
	

	tt.UI.createSuppotListView = (listType,user_id) -> 
		Ti.API.info "createSupportListWindow"
		newWindow = Ti.UI.createWindow  
			title:listType
			backgroundColor:'#fff'
			url:'../controller/SupportList.js'
			barColor: Const.BARCOLOR
			data:
				listType:listType
				user_id:user_id
		
		return newWindow
	

	# tt.module.move = (targetBar,maxWidth,targetWidth)->
	# 	pointbar_flg = true
	# 	
	# 	move = ()->
	# 		if !pointbar_flg
	# 			info 'move complete'
	# 			return
	# 		
	# 		speed = 50
	# 		limit = Number maxWidth
	# 		rest = maxWidth - targetWidth
	# 		targetBar.width += rest / speed
	# 		setTimeout move, 10
	# 		
	# 		if targetBar.width >= targetWidth
	# 			pointbar_flg = false
	# 			
	# 		return
	# 
	# 	move()
	# 	return
	
	return
