 


height_top = Const.MARGIN*3+Const.ICON*2.5 

height_middle = Const.MARGIN*6+Const.ICON

height_bottom = Const.Device.Height - height_top-height_middle

#ci = checkin
exports.styles = 
	checkin_question:
		left: 5,
		top: 237,
		width: 114,
		height: 21,
		text: 'Did you learn?'	
		color:'#999'
	point_title:
		left:5
		top: 60
		width:114
		height:20
		text: 'Weekly Point'
		color: '#777'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	button_checkin:
		left: 10,
		top: 266,
		width: 300,
		height: 63,
		font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
		color: '#324f85'
		backgroundImage: 'images/button/checkin4.png'
	checkin_text:
		left: 0,
		top: 22,
		width: 300,
		height: 22,
		text: '記録する'
		color:"#fff"
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 24},	
		
		
# 		
# #
