Titanium.include 'Const.js'
S = Const

height_row = S.MARGIN*2+S.ICON
boxsize = (S.Device.Width-S.MARGIN*4)/3
height_profile = S.MARGIN*6+S.ICON*3/2+boxsize/2
#ci = checkin
styles = 
	base_profile:
		height:height_profile
		backgroundColor:S.rowColor
		clickName:'profile'
	username:
		top:S.MARGIN
		left:S.MARGIN*2+S.ICON
		width:S.Device.Width-(S.MARGIN*3+S.ICON)-S.ICON*1.5
		height:S.ICON
		textAlign:'left'
		text:'12345678901234567890'
	support_box:
		top:S.MARGIN*2+S.ICON
		right:S.MARGIN
		width:S.ICON*1.5
		height:S.ICON/2
		borderRadius:3
		backgroundColor:'#00ff11'
	support_text:
		top:0
		left:0
		width:S.ICON*1.5
		height:S.ICON/2
		textAlign:'center'
		text:'Support'
	### boxs start ###
	count_box:
		top:S.ICON*3/2+S.MARGIN*4
		left:S.MARGIN
		width:boxsize
		height:boxsize/2
		borderRadius:3
		backgroundColor:'#555'
	point_box:
		top:S.ICON*3/2+S.MARGIN*4
		left:S.MARGIN*2+boxsize
		width:boxsize
		height:boxsize/2
		borderRadius:3
		backgroundColor:'#555'
	series_box:
		top:S.ICON*3/2+S.MARGIN*4
		left:S.MARGIN*3+boxsize*2
		width:boxsize
		height:boxsize/2
		borderRadius:3		
		backgroundColor:'#555'	
		
	count_num:
		top:0
		left:0
		width:boxsize
		height:boxsize/4
		textAlign:'center'
		text:'1'
		color:'#fff'
		font:{fontSize:20, fontWeight:'normal', fontFamily:'Arial'}
	count_text:
		top:boxsize/4
		left:0
		width:boxsize
		height:boxsize/4
		textAlign:'center'
		text:'counts'
		font:{fontSize:12, fontWeight:'normal', fontFamily:'Arial'}
	
	### boxs end ###
	base_black:
		height:S.MARGIN*4+S.ICON
		backgroundColor:'#505050'
		clickName:"top"
	header:
		height:20
		text:'star log'
		backgroundColor:'#ddd'
	header_text:
		height:20 
		text:'Star Log'
	base_support:
		height:height_row
		backgroundColor:S.rowColor
		clickName:'support'
		title:'supporting'
		hasChild:true
	base_supporter:
		height:height_row
		backgroundColor:S.rowColor
		clickName:'supporter'
		title:'supporter'	
		hasChild:true