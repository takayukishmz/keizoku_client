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
	message:
		color:'#576996'
		font:{fontSize:12,fontFamily:'Arial'}
		left:S.MARGIN*2+S.ICON
		top:S.MARGIN
		height:S.ICON
		width:'auto'
		clickName:'message'
		textAlign:'left'
	icon:
		backgroundImage:'../images/user.png'
		top:S.MARGIN
		left:S.MARGIN
		width:S.ICON
		height:S.ICON
		borderRadius:3
	title:
		font:{fontSize:12,fontFamily:'Arial'}
		left:S.MARGIN*2+S.ICON
		top:S.MARGIN
		height:S.ICON
		width:'auto'
		clickName:'text'
		textAlign:'left'
