class BaseComponent
	constructor : (@param) ->
		info_obj @param
		
		if !@param
			throw Error('ERR! @param is undefined!')
			
		@view = Ti.UI.createView @param 	
		
		@setView()
		
	setView: () ->
	
	getNodeView : () =>
		return @view
		
exports.BaseComponent = BaseComponent
