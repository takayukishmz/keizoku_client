BaseComponent 		= require('ui/common/BaseComponent').BaseComponent

class Counter extends BaseComponent
	constructor : () ->
		@params = 
			top:0
			width:320
			height:100
		
		super @params
		
	setView : () ->
		@ribbon = Titanium.UI.createView styles.ribbon
		@view.add @ribbon
		@dayOnRibbon = Titanium.UI.createLabel styles.dayOnRibbon
		@view.add @dayOnRibbon
		
	update : (count) ->
		@dayOnRibbon.text =  count + ' days '
		
exports.Counter = Counter

styles = 
	ribbon:
		right:-5,
		top: 10,
		width: 77,
		height: 39,
		backgroundImage:'images/UI/ribon/3.png'
	dayOnRibbon:
		right:0,
		top: 10,
		width: 80,
		height: 34,
		text: ''
		color: '#fff'
		textAlign:'right'
	
