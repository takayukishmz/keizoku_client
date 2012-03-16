class BaseComponent
	constructor : (@param) ->

		info_obj @param

		if !@param
			throw Error('ERR! @param is undefined!')
		info '1'
		@view = Ti.UI.createView @param 
		info '2'		
		@setView()
		info_obj @view
		return @view
		
	setView: () ->
		
exports.BaseComponent = BaseComponent