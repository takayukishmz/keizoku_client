BaseComponent 		= require('ui/common/BaseComponent').BaseComponent

class Counter extends BaseComponent
	constructor : (@param) ->
		info_obj @param
		
		@param = 
			top:0
			width:320
			height:70
		
		super @param
		
	setView : () ->
		return 
	
	
			
	update : () ->
		return 
		
		
		
		
exports.Counter = Counter
