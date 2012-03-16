class BaseWindow
	constructor : (@params) ->
		@win = Ti.UI.createWindow params
		info Const.BACKGROUND
		@win.backgroundImage = Const.BACKGROUND
		@win.barColor =  Const.BARCOLOR
		
		@setView()
		@setButton()
		@setEvent()
	
	setView: () ->
	setButton: () ->
	setEvent: () ->
	
	
	
		
exports.BaseWindow = BaseWindow