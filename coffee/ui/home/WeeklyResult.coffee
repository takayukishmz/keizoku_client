exports.WeeklyResult = () ->
	@stars = []
	
	@view = Ti.UI.createView({
		top:0
		width:320
		height:100
	})
	
	week_title = Titanium.UI.createLabel styles.week_title	
	@view.add week_title
	week_base = Titanium.UI.createButton styles.week_base	
	#star text
	star0_text = Titanium.UI.createLabel styles.star0_text
	week_base.add star0_text 
	star1_text = Titanium.UI.createLabel styles.star1_text
	week_base.add star1_text 
	star2_text = Titanium.UI.createLabel styles.star2_text
	week_base.add star2_text 
	star3_text = Titanium.UI.createLabel styles.star3_text
	week_base.add star3_text 
	star4_text = Titanium.UI.createLabel styles.star4_text
	week_base.add star4_text 
	star5_text = Titanium.UI.createLabel styles.star5_text
	week_base.add star5_text 
	star6_text = Titanium.UI.createLabel styles.star6_text
	week_base.add star6_text 
	#star 
	star0 = Titanium.UI.createView styles.star0
	week_base.add star0 
	star1 = Titanium.UI.createView styles.star1
	week_base.add star1 
	star2 = Titanium.UI.createView styles.star2
	week_base.add star2
	star3 = Titanium.UI.createView styles.star3
	week_base.add star3 
	star4 = Titanium.UI.createView styles.star4
	week_base.add star4 
	star5 = Titanium.UI.createView styles.star5
	week_base.add star5 
	star6 = Titanium.UI.createView styles.star6
	week_base.add star6 
	
	@stars.push star0
	@stars.push star1
	@stars.push star2
	@stars.push star3
	@stars.push star4
	@stars.push star5
	@stars.push star6
	
	@view.add week_base 
	
	@update = (weeklyRecord) =>
		log 'WeeklyResult', 'update'
		if !weeklyRecord
			return
		log 'WeeklyResult', 'update1'
		for i in  weeklyRecord
			if i.wday != null
				info 'weeklyRecord update index:' + i
				@stars[i.wday].backgroundImage = 'images/star/' + i.color_id + '.png'
		return
	
	@getNodeView = () ->
		return @view

	return 
	

styles =
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
		text: 'Sun'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star1_text:
		left: 71,
		top: 41,
		width: 26,
		height: 22,
		text: 'Mon'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star2_text:
		left: 105,
		top: 41,
		width: 26,
		height: 22,
		text: 'Tues'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star3_text:
		left: 139,
		top: 41,
		width: 26,
		height: 22,
		text: 'Wed'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star4_text:
		left: 176,
		top: 41,
		width: 26,
		height: 22,
		text: 'Thurs'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star5_text:
		left: 210,
		top: 41,
		width: 26,
		height: 22,
		text: 'Fri'
		textAlign:'center'
		font: {fontFamily: 'Helvetica', fontSize: 10},
	star6_text:
		left: 246,
		top: 41,
		width: 26,
		height: 22,
		text: 'Sat'
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
