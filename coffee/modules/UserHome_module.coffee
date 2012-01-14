tt = {}
tt.UI = {}	

collection_all = 21
# Ti.App.Selected_pjt = {}
Titanium.include('Common_module.js');
do ->
	tt.UI.updateView = (user_id) ->
		user_id = Ti.App.user_id
		API.callAPI 'GET','getUserData',{user_id:user_id}, (json) ->
			profile = json.profile
			name.text = profile.nickname
			# dayOnRibbon.text = profile.count_total + 'days / 21'
			weeklyPoint = 50
			recordPoint = 100
			tt.module.move collectionbar_max, collectionbar_now, (collectionbar_max.width * (profile.count_total / collection_all))
			tt.module.move pointbar_max, pointbar_now, (pointbar_max.width * (weeklyPoint / recordPoint))

			# point_count.text = profile.point_total
			# challenge_count.text = profile.challenge_total
			return
	
	tt.UI.createRecordListView = (user) -> 
		Ti.API.info "createRecordListView"
		newWindow = Ti.UI.createWindow  
			title:'~ project' 
			backgroundColor:'#fff'
			url:'../controller/UserRecordList.js'
			data:user
			
		Ti.App.CheckInWindow = newWindow
		return newWindow
	
	
	tt.UI.createCheckinView = (project) -> 
		Ti.API.info "createCompleteWindow"
		newWindow = Ti.UI.createWindow  
			title:'~ project' 
			backgroundColor:'#fff'
			url:'../controller/CheckIn.js'
			
		# Ti.App.Selected_pjt = project
		Ti.App.CheckInWindow = newWindow
		return newWindow
	
	tt.UI.createSuppotListView = (listType,user_id) -> 
		Ti.API.info "createSupportListWindow"
		newWindow = Ti.UI.createWindow  
			title:listType
			backgroundColor:'#fff'
			url:'../controller/SupportList.js'
			data:
				listType:listType
				user_id:user_id
		
		return newWindow
	
	tt.UI.getUserData = (user_id) ->
		API.callAPI 'GET','getUserData',{user_id:user_id}, (json) ->
			info 'callback getUserData'
			info JSON.stringify json
			info JSON.stringify point_cnt
			profile = json.profile
			user.text = profile.nickname
			point_cnt.text = profile.point_total
			day_cnt_total.text = profile.count_total
			support_cnt.text = profile.bonus_total
			return
		return	
	tt.module.move = (baseBar,statusBar,number)->
		pointbar_flg = true
		
		move = ()->
			if !pointbar_flg
				info 'move complete'
				return
			
			speed = 50
			limit = Number baseBar.width
			rest = baseBar.width - statusBar.width
			statusBar.width += rest / speed
			setTimeout move, 10
			
			if statusBar.width > number
				pointbar_flg = false
				
			return

		move()
		return
	
	return
