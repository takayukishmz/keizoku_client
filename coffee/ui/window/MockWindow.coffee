BaseWindow 	= require('ui/common/BaseWindow').BaseWindow


class MockWindow extends BaseWindow
	constructor : (@title, @url) ->
		@params = 
			title:@title
			width:320
			height:368
			
		super @params
		
		return @win	
		
	setView:() =>
		bg = Ti.UI.createView
			top:0
			width:320
			height:368
			backgroundImage:@url
		
		@win.add bg
		
	setButton : () ->
	
	setEvent: () =>

		
exports.MockWindow = MockWindow
