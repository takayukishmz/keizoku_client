header_height = Const.MARGIN*2+22
row_height = 133

info 'timeline_style'


exports.styles =
	header_height:header_height
	bonus_box:
		top:Const.MARGIN
		left:Const.MARGIN
		width:300
		height:22
		backgroundColor:'#333'
		borderRadius:4
		borderWidth:4
		borderColor:'#999'
	bonusbar:
		top:4
		left:4
		width:200
		height:16
		backgroundColor:Const.barColor
	######## list view ######################################################
	#### headerVewi ####
	header:
		# backgroundImage:'images/UI/' + Const.ROWBACKGROUND
		# backgroundColor:'#ddd'
		height:Const.ICON*3/4
		opacity:0.8
		
	counter:
		top:0
		left:Const.MARGIN
		backgroundImage:'images/star/red.png'
		width:Const.ICON*3/4
		height:Const.ICON*3/4
		clickName:'counter'
		# backgroundGradient:
		# 	type:'linear',
		# 	colors:[{color:'#d4d4d4', position:0.0}, {color:'#c4c4c4', position:0.50}, {color:'#e4e4e4', position:1.0}]					
	counter_text:
		text:'1'
		fontsize:25
		width:Const.ICON*3/4
		height:Const.ICON*3/4
		textAlign:'center'
		clickName:'counter'
		color:'#222'
	######## list view ######################################################
	#### headerVewi ####
	title:
		backgroundcolor:'#fff'
		top:0
		left:Const.MARGIN+Const.ICON*3/4
		height:Const.ICON*3/4
		width:'auto'
		clickName:'user'
		text:''
	title_text:
		color:Const.FONTCOLOR
		font:{fontConstize:15,fontWeight:'bold',fontFamily:'Arial'}
		top:0
		left:0
		height:Const.ICON*3/4
		width:'auto'
		clickName:'title_text'
		text:''
	### row ###
	row:
		height:row_height
		# hasChild:true
		backgroundColor:Const.rowColor
		backgroundImage:'images/UI/'+Const.ROWBACKGROUND
		selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
	view:
		height:header_height
		width:Const.WIDTH
		top:0
		clickName:'view'
		borderRadius:0
		backgroundGradient:
			type:'linear',
			colors:[{color:'#d4d4d4', position:0.0}, {color:'#c4c4c4', position:0.50}, {color:'#e4e4e4', position:1.0}]			
	
	icon:
		# backgroundImage:'images/user.png'
		top:Const.MARGIN
		left:Const.MARGIN
		width:Const.ICON*3/4
		height:Const.ICON*3/4
		clickName:'icon'
	
	support:
		backgroundcolor:'#fff'
		bottom:Const.MARGIN
		left:Const.MARGIN*2+Const.ICON
		height:Const.TITTLE_H
		width:200
		clickName:'user'
		text:''
	support_text:
		color:'gray'
		font:{fontConstize:11,fontWeight:'bold',fontFamily:'Arial'}
		top:1
		left:1
		height:Const.TITTLE_H-2
		width:190
		clickName:'support_text'
		text:'supporter:5'

	user:
		color:Const.FONTCOLOR
		font:{fontConstize:12,fontWeight:'bold',fontFamily:'Arial'}
		top:Const.MARGIN
		left:Const.MARGIN*3/2+Const.ICON
		height:22
		width:100 # variable by length of name 
		clickName:'user'
		text:'name'
	comment:
		backgroundcolor:'#ddd'
		top:Const.MARGIN + Const.ICON*3/4
		left:Const.MARGIN*3/2+Const.ICON
		height:30
		width:200
		clickName:'user'
		text:''
	comment_text:
		color:Const.FONTCOLOR
		font:{fontConstize:15,fontWeight:'bold',fontFamily:'Arial'}
		top:1
		left:1
		height:20
		width:190
		clickName:'comment_text'
		text:''
	support_button:
		backgroundColor:'blue' 
		borderRadius:4 
		bottom:Const.MARGIN
		right:Const.MARGIN 
		width:44 
		height:22 
		clickName:'button'
	support_button_text:
		color:'#fff' 
		font:
			fontConstize:9
			fontWeight:'normal'  
			fontFamily:'Arial'  
		left:1
		top:1
		height:20 
		width:42
		clickName:'support_text' 
		text:'support' 
		textAlign:'center'