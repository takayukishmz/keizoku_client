BaseComponent = require('ui/common/BaseComponent').BaseComponent

class MockComponent extends BaseComponent
	constructor : (@title, @url) ->
		@param = 
			title:@title
			width:320
			height:368
		
		super @param
		
	setView : () =>
		bg = Ti.UI.createView
			top:0
			width:320
			height:368
			backgroundImage:@url
		
		@view.add bg
		
exports.MockComponent = MockComponent
