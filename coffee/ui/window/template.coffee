BaseWindow 	= require('ui/common/BaseWindow').BaseWindow


class hoge extends BaseWindow
	constructor : () ->
		super {title:'hoge'}
		
		return @win
		
	setView : () ->
	setEvent : () ->
	setButton: () ->


exports.hoge = hoge