exports.UserInfo = () ->
	
	@view = Ti.UI.createView
		top:0
		width:320
		height:70
	
	@icon = Titanium.UI.createImageView styles.icon
	# icon.image = if report.picture_url then report.picture_url else 'images/' + Const.DEFALT.USER
	@icon.image = 'images/' + Const.DEFALT.USER
	@name = Titanium.UI.createLabel styles.name
	
	@view.add @icon
	@view.add @name	
	@setUserData = (profile) =>
		log 'UserInfo', '1'
		@icon.image = if profile.picture_url then profile.picture_url else 'images/' + Const.DEFALT.USER
		log 'UserInfo', '2'
		@name.text = profile.nickname
		log 'UserInfo', '3'
		return
	
	@getNodeView = () =>
		return @view

	return

styles =
	icon:
		left: 5
		top: 5
		width: 44
		height: 44
		image:'../images/user.png'
		borderRadius:3
	name:
		left: 57,
		top: 16,
		width: 200,
		height: 21,
		text: 'person1',
		color: '#000000'

# BaseComponent 	= require('ui/common/BaseComponent').BaseComponent
# 
# class UserInfo extends BaseComponent
# 	constructor : () ->
# 		super {
# 			top:0
# 			width:320
# 			height:60
# 		}
# 		
# 	setView : () =>
# 		@icon = Titanium.UI.createView @styles.icon
# 		@view.add @icon
# 		@name = Titanium.UI.createLabel @styles.name
# 		@view.add @name
# 
# 		
# 	styles :
# 		icon:
# 			left: 5,
# 			top: 5,
# 			width: 44,
# 			height: 44,
# 			image:'../images/user.png'
# 			borderRadius:3
# 		name:
# 			left: 57,
# 			top: 16,
# 			width: 200,
# 			height: 21,
# 			text: 'person1',
# 			color: '#000000'
# 		
# exports.UserInfo = UserInfo