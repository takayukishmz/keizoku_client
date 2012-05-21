exports.PointBar = () ->	
	@view = Ti.UI.createView 
		top:0
		width:320
		height:150
	
	point_title = Titanium.UI.createLabel styles.point_title
	hiscore_text = Titanium.UI.createLabel styles.hiscore_text
	point_base = Titanium.UI.createView styles.point_base	
	@pointbar_max = Titanium.UI.createView styles.pointbar_max	
	@pointbar_now = Titanium.UI.createView styles.pointbar_now	
	@pointbar_now_text = Titanium.UI.createLabel styles.pointbar_now_text	
	@bointbar_max_text = Titanium.UI.createLabel styles.bointbar_max_text
	
	@pointbar_now.add @pointbar_now_text 
	@pointbar_max.add @pointbar_now 
	point_base.add @bointbar_max_text 
	point_base.add @pointbar_max 
	point_base.add hiscore_text 
	
	@view.add point_title
	@view.add point_base
	
	@update = (current, max) =>
		width = Number(@pointbar_max.width) * (current / max)
		$.Util.move @pointbar_now, 0,width
		@pointbar_now_text.text = current
		@bointbar_max_text.text = max
		return
	
	@getNodeView = () =>
		return @view
	
	
	return
	


styles = 
	point_title:
		left:5
		top: 60
		width:114
		height:20
		text: 'Weekly Point'
		color: '#fff'
		font: {fontFamily: 'Helvetica', fontSize: 14}
	point_base:
		left: 5
		top: 80
		width: 310
		height: 40
		backgroundImage:'images/UI/point_base_black.png'
	pointbar_max:
		left: 10
		top: 12
		width: 260	
		height: 16
		backgroundColor: '#000000'
	pointbar_now:
		left:0,
		width: 10,
		height: 16,
		backgroundColor:'#3871c8'
	pointbar_now_text:
		right:10
		top: 0
		width: 42,
		height: 16,
		text: '29',
		textAlign:'right'
		font: {fontFamily: 'Helvetica', fontSize: 14},
		color: '#ffffff'
	bointbar_max_text:
		right: 0,
		top: 12,
		width: 40,
		height: 16,
		text: '00',
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 14},
		color: '#999'
	hiscore_text:
		right: 0,
		top: 1,
		width: 40,
		height: 10,
		text: 'record',
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
		color: '#999'