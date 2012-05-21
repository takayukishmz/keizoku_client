class BaseComponent
	constructor : (@param) ->
		info_obj @param
		
		if !@param
			throw Error('ERR! @param is undefined!')
			
		@view = Ti.UI.createView @param 	
		
		@setView()
		@setEvent()
		@setButton()
		
	setView: () ->
	setEvent:() ->
	setButton:() ->
	getNodeView : () =>
		return @view
		
exports.BaseComponent = BaseComponent
