Titanium.include 'Const.js'
S = Const

row_height = S.MARGIN*2+S.ICON

### header UI ############################################################
styles =
	row:
		# hasChild:true
		height:row_height
		backgroundImage:'../images/UI/base_pink.png'
	view:
		height:row_height
		width:S.WIDTH
		top:0
		borderRadius:0
		backgroundGradient:
			type:'linear'
			colors:[{color:'#d4d4d4', position:0.0}, {color:'#c4c4c4', position:0.50}, {color:'#e4e4e4', position:1.0}]
	user:
		color:'#576996'
		font:{fontSize:16,fontWeight:'bold',fontFamily:'Arial'}
		left:S.MARGIN*2+S.ICON
		top:S.MARGIN
		height:S.ICON
		width:'auto'
		clickName:'user'
		text:'user name'
	icon:
		backgroundImage:'../images/user.png'
		top:S.MARGIN
		left:S.MARGIN
		width:S.ICON
		height:S.ICON
	text:
		top:S.MARGIN+22
		left:S.MARGIN*2+S.ICON
		width:'auto'
		height:44