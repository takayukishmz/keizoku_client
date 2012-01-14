tt = {}
tt.UI = {}
tt.module = {}
Titanium.include('Common_module.js');

Ti.App.main_pointbar_flg = true

do ->
	tt.UI.updateView = () ->
		API.callAPI 'GET','getUserData',{user_id:Ti.App.user_id}, (json) ->
			profile = json.profile
			name.text = profile.nickname
			dayOnRibbon.text = profile.count_total + 'days / 21'
			weeklyPoint = 50
			recordPoint = 100
			if Ti.App.main_pointbar_flg
				tt.module.move pointbar_max, pointbar_now, (pointbar_max.width * (weeklyPoint / recordPoint))
			# point_count.text = profile.point_total
			# challenge_count.text = profile.challenge_total
			return
	
		return
	tt.UI.createCheckInView = () ->
		Ti.API.info "createCheckInWindow"
		newWindow = Ti.UI.createWindow 
			# title:'~ CheckIn' 
			backgroundColor:'#fff'
			url:'../controller/checkin/CheckIn.js'
			navBarHidden:true
			modal:true
			# modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL
			# modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
		newWindow.open()
		return
		
	tt.module.move = (baseBar,statusBar,number)->
		move = ()->
			if !Ti.App.main_pointbar_flg
				info 'move complete'
				return
			
			speed = 50
			limit = Number baseBar.width
			rest = baseBar.width - statusBar.width
			statusBar.width += rest / speed
			
			if statusBar.width > number
				Ti.App.main_pointbar_flg = false
			setTimeout move, 10
			return
		move()
		return
	
	return
