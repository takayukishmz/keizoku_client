
Ti.App.main_pointbar_flg = true
	

do ->
	updateView : () ->
		API.callAPI 'GET','getUserData',{user_id:Ti.App.user_id}, (json) ->
			
			dayOnRibbon.text =  json.profile.day_total + ' days '

			$.Util.updateUserData json
			return
	
		return
	createCheckInView : () ->
		Ti.API.info "createCheckInWindow"
		newWindow = Ti.UI.createWindow 
			# title:'~ CheckIn' 
			backgroundColor:'#fff'
			url:'../controller/checkin/CheckIn.js'
			navBarHidden:true
			modal:true
			barColor: Const.BARCOLOR
			# modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL
			# modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
		newWindow.open()
		return
		
	
	return
