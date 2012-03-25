 


height_top = Const.MARGIN*3+Const.ICON*2.5 

height_middle = Const.MARGIN*6+Const.ICON

height_bottom = Const.Device.Height - height_top-height_middle

#ci = checkin
exports.styles = 
	icon:
		left: 5,
		top: 5,
		width: 44,
		height: 44,
		backgroundImage:'images/user.png'	
	name:
		left: 57,
		top: 16,
		width: 200,
		height: 21,
		text: 'person1',
		color: '#000000'
	checkin_question:
		left: 5,
		top: 237,
		width: 114,
		height: 21,
		text: 'Did you learn?'	
	point_title:
		left:5
		top: 60
		width:114
		height:20
		text: 'Weekly Point'
		color: '#777'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	point_base:
		left: 5
		top: 80
		width: 310
		height: 40
		backgroundImage:'images/UI/point_base.png'
	pointbar_max:
		left: 10
		top: 12
		width: 290	
		height: 16
		backgroundColor: '#f2f2f2f0'
	pointbar_now:
		left:0,
		width: 10,
		height: 16,
		backgroundColor: '#008aff'
	pointbar_now_text:
		right:2
		top: 0
		width: 42,
		height: 16,
		text: '29',
		textAlign:'right'
		font: {fontFamily: 'Helvetica', fontSize: 14},
		color: '#ffffff'
	bointbar_max_text:
		right: 2,
		top: 0,
		width: 290,
		height: 16,
		text: 'record:99',
		textAlign:'right'
		font: {fontFamily: 'Helvetica', fontSize: 14},
		color: '#555'
	week_title:
		left: 5,
		top: 132,
		width: 114,
		height: 20,
		text: 'Weekly record'
		color: '#777'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	week_base:
		left: 5,
		top: 152,
		width: 310,
		height: 63
		backgroundImage: 'images/UI/week_base.png'
	star0_text:
		left: 36,
		top: 41,
		width: 26,
		height: 22,
		text: 'Mon'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star1_text:
		left: 71,
		top: 41,
		width: 26,
		height: 22,
		text: 'Tues'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star2_text:
		left: 105,
		top: 41,
		width: 26,
		height: 22,
		text: 'Wed'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star3_text:
		left: 139,
		top: 41,
		width: 26,
		height: 22,
		text: 'Thurs'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star4_text:
		left: 176,
		top: 41,
		width: 26,
		height: 22,
		text: 'Fri'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star5_text:
		left: 210,
		top: 41,
		width: 26,
		height: 22,
		text: 'Sat'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star6_text:
		left: 246,
		top: 41,
		width: 26,
		height: 22,
		text: 'Sun'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star0:
		left: 36,
		top: 17,
		width: 26,
		height: 26,
		backgroundImage:'images/star/red.png'
	star1:
		left: 71,
		top: 17,
		width: 26,
		height: 26
	star2:
		left: 105,
		top: 17,
		width: 26,
		height: 26,
		backgroundImage:'images/star/yellow.png'
	star3:
		left: 139,
		top: 17,
		width: 26,
		height: 26
		backgroundImage:'images/star/aqua.png'
	star4:
		left: 175,
		top: 17,
		width: 26,
		height: 26,
	star5:
		left: 210,
		top: 17,
		width: 26,
		height: 26
	star6:
		left: 246,
		top: 17,
		width: 26,
		height: 26,
		backgroundImage:'images/star/green.png'
	button_checkin:
		left: 10,
		top: 266,
		width: 300,
		height: 63,
		font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
		color: '#324f85'
		backgroundImage: 'images/button/checkin3.png'
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
