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
	
	open :(args) ->
		@win.open(args)
		return
		
	close : (args) ->
		@win.close(args)
		return
		
		
		
exports.BaseWindow = BaseWindow