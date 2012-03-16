BaseWindow 		= require('ui/common/BaseWindow').BaseWindow
PointBar 		= require('ui/home/PointBar').PointBar
UserInfo 		= require('ui/home/UserInfo').UserInfo
WeeklyResult 	= require('ui/home/WeeklyResult').WeeklyResult
CheckIn 		= require('ui/window/CheckIn').CheckIn
styles 			= require('styles/Home_style').styles


class Home extends BaseWindow
	constructor : () ->
		
		@params = title:'1 Week English'
		super @params
		
		@userInfo = new UserInfo()		
		@pointBar = new PointBar()
		@weeklyResult = new WeeklyResult()		
		
		@win.add @userInfo.getNodeView()
		@win.add @pointBar.getNodeView()
		@win.add @weeklyResult.getNodeView()
		
		return @win
		
	setView: () -> 
		ribbon = Titanium.UI.createView styles.ribbon
		@win.add ribbon
		@dayOnRibbon = Titanium.UI.createLabel styles.dayOnRibbon
		@win.add @dayOnRibbon
		checkin_question = Titanium.UI.createLabel styles.checkin_question 
		@win.add checkin_question
		@button_checkin = Titanium.UI.createButton styles.button_checkin
		checkin_text = Titanium.UI.createLabel styles.checkin_text
		@button_checkin.add checkin_text
		@win.add @button_checkin 
		
		
	updateView : () =>
		$.API.callAPI 'GET','getUserData',{user_id:Ti.App.user_id}, (json) =>
			@dayOnRibbon.text =  json.profile.day_total + ' days '
			@userInfo.setUserData json.profile
			@weeklyResult.update json.weekly_record
			return
		
		return
	
	setEvent : () ->
		@button_checkin.addEventListener 'click', (e)=>
			Ti.API.info 'click checkin'
			newWindow = new CheckIn()
			newWindow.open()
			return
		
		@win.addEventListener 'focus', (e)  =>
			Ti.API.info 'userHome focus'  
			indicator.setStatus(false)
			info Ti.App.checkInUpdate
			if Ti.App.checkInUpdate
				Ti.App.checkInUpdate = false
				@updateView()
		
	
		
		
exports.Home = Home	