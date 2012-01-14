Titanium.include 'Const.js'

styles=
	scrollview:
		contentWidth:'auto'
		contentHeight:'auto'
		top:0
		showVerticalScrollIndicator:true
	base:
		height:440
		backgroundImage:'../images/UI/base_pink.png'
	icon:
		left: 5,
		top: 5,
		width: 44,
		height: 44,
		backgroundImage:'../images/user.png'
	name:
		left: 57,
		top: 16,
		width: 62,
		height: 21,
		text: 'person1',
		color: '#000000'
	status_base:
		left: 5,
		top: 57,
		width: 310,
		height: 79,
		backgroundImage: '../images/UI/status_base.png'
	day_text:
		left: 30,
		top: 47,
		width: 42,
		height: 21,
		text: 'days'
	day_count:
		left: 30,
		top: 10,
		width: 42,
		height: 21,
		text: '15'
	score_count:
		left: 134,
		top: 10,
		width: 42,
		height: 21,
		text: '100'
	challenge_count:
		left: 237,
		top: 10,
		width: 42,
		height: 21,
		text: '20'
	score_text:
		left: 133,
		top: 47,
		width: 45,
		height: 21,
		text: 'Score'
	challenge_text:
		left: 220,
		top: 47,
		width: 77,
		height: 21,
		text: 'Challenge'
	view32:
		left: 9,
		top: 39,
		width: 83,
		height: 6,
		backgroundColor: '#007cff'
	view33:
		left: 113,
		top: 39,
		width: 83,
		height: 6,
		backgroundColor: '#007cff'
	view34:
		left: 216,
		top: 39,
		width: 83,
		height: 6,
		backgroundColor: '#007cff'
	week_base:
		left: 5,
		top: 157,
		width: 310,
		height: 63
		backgroundImage: '../images/UI/week_base.png'
	week_title:
		left: 5,
		top: 0,
		width: 114,
		height: 20,
		text: 'This Week:'
		color: '#999'
		font: {fontFamily: 'Helvetica', fontSize: 12}
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
		backgroundImage:'../images/star/red.png'
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
		backgroundImage:'../images/star/yellow.png'
	star3:
		left: 139,
		top: 17,
		width: 26,
		height: 26
		backgroundImage:'../images/star/aqua.png'
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
		backgroundImage:'../images/star/green.png'
	button41:
		left: 228,
		top: 9,
		width: 72,
		height: 37,
		font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
		color: '#324f85'
	rank:
		left: 5,
		top: 228,
		width: 310,
		height: 44,
		color: '#324f85'
		backgroundImage:'../images/UI/bar_plain.png'
	collection:
		left: 5,
		top: 280,
		width: 310,
		height: 44,
		color: '#324f85'
		backgroundImage:'../images/UI/bar_plain.png'
	challenge:
		left: 5,
		top: 332,
		width: 310,
		height: 44,
		color: '#324f85'
		backgroundImage:'../images/UI/bar_plain.png'
	support:
		left: 5,
		top: 386,
		width: 153,
		height: 44,
		title: 'Support',
		color: '#324f85'
		backgroundImage:'../images/UI/bar_white_short_155x44.png'
	supporter:
		left: 162,
		top: 386,
		width: 153,
		height: 44,
		title: 'Supporter',
		color: '#324f85'
		backgroundImage:'../images/UI/bar_white_short_155x44.png'
	rank_title:
		left: 20,
		top: 239,
		width: 42,
		height: 21,
		text: 'Rank'
	rank_text:
		left: 243,
		top: 238,
		width: 42,
		height: 21,
		text: 'Rank'
	collection_title:
		left: 20,
		top: 291,
		width: 84,
		height: 21,
		text: 'Collections'
	collection_text:
		left: 201,
		top: 291,
		width: 84,
		height: 21,
		text: 'Collections'
	challenge_title:
		left: 20,
		top: 343,
		width: 86,
		height: 21,		
		text: 'Challenges'
	challenge_text:
		left: 199,
		top: 342,
		width: 86,
		height: 21,
		text: 'Challenges'

view = Titanium.UI.createView styles.base
#
#profile
#
icon = Titanium.UI.createView styles.icon
view.add icon
name = Titanium.UI.createLabel styles.name
view.add name 

#
#status
#
# status_base = Titanium.UI.createView styles.status_base
# day_text = Titanium.UI.createLabel styles.day_text
# status_base.add day_text 
# day_count = Titanium.UI.createLabel styles.day_count
# status_base.add day_count 
# score_count = Titanium.UI.createLabel styles.score_count
# status_base.add score_count 
# challenge_count = Titanium.UI.createLabel styles.challenge_count
# status_base.add challenge_count 
# score_text = Titanium.UI.createLabel styles.score_text
# status_base.add score_text 
# challenge_text = Titanium.UI.createLabel styles.challenge_text
# status_base.add challenge_text 
# view32 = Titanium.UI.createView styles.view32
# status_base.add view32 
# view33 = Titanium.UI.createView styles.view33
# status_base.add view33 
# view34 = Titanium.UI.createView styles.view34
# status_base.add view34 
# view.add status_base 

collectionbar_base = Titanium.UI.createView
    left: 5,
    top: 60,
    width: 310,
    height: 44,
    backgroundImage:'../images/UI/bar_base.png'

collectionbar_max = Titanium.UI.createView
    left: 10,
    top: 20,
    width: 290,
    height: 19,
    backgroundColor: '#cacaca'


collectionbar_now = Titanium.UI.createView
    left:0
    width: 10,
    height: 19,
    backgroundColor: '#66ccff'


collection_now_text = Titanium.UI.createLabel
    right:5,
    top: 1,
    width: 42,
    height: 16,
    text: '12',
    textAlign:'right'
    color: '#ffffff'

collectionbar_now.add collection_now_text 

collectionbar_max.add collectionbar_now 

collection_max_text = Titanium.UI.createLabel
    right:5,
    top: 0,
    width: 42,
    height: 21,
    text: '21',
    color: '#000000'
    textAlign:'right'

collectionbar_max.add collection_max_text 

collectionbar_base.add collectionbar_max 

collection_title = Titanium.UI.createLabel
    left: 10,
    top: 0,
    width: 75,
    height: 21,
    text: 'Collection',
    font: {fontFamily: 'Helvetica', fontSize: 14}

collectionbar_base.add collection_title 

collection_status_text = Titanium.UI.createLabel
    right:15,
    top: 0,
    width: 88,
    height: 21,
    text: '12 / 21'
    textAlign:'right'
    font: {fontFamily: 'Helvetica', fontSize: 14}


collectionbar_base.add collection_status_text 

view.add collectionbar_base 

pointbar_base = Titanium.UI.createView
    left: 5,
    top: 108,
    width: 310,
    height: 44,
    backgroundImage:'../images/UI/bar_base.png'

pointbar_max = Titanium.UI.createView
    left: 10,
    top: 20,
    width: 290,
    height: 16,
    backgroundColor: '#cacaca'


pointbar_now = Titanium.UI.createView
    left:0
    width: 20,
    height: 16,
    backgroundColor: '#66ccff'


point_now_text = Titanium.UI.createLabel
    right:5,
    top: 0,
    width: 42,
    height: 16,
    text: '30'
    textAlign:'right'
    color: '#ffffff'

pointbar_now.add point_now_text

pointbar_max.add pointbar_now

point_max_text = Titanium.UI.createLabel
    right:5,
    top: 0,
    width: 42,
    height: 16,
    text: '99'
    textAlign:'right'

pointbar_max.add point_max_text 

pointbar_base.add pointbar_max 

point_title = Titanium.UI.createLabel
    left: 10,
    top: 0,
    width: 100,
    height: 21,
    text: 'Weekly Point'
    font: {fontFamily: 'Helvetica', fontSize: 14}

pointbar_base.add point_title 

point_record_text = Titanium.UI.createLabel
    right:15,
    top: 0,
    width: 78,
    height: 21,
    text: 'record'
    textAlign:'right'
    font: {fontFamily: 'Helvetica', fontSize: 14}

pointbar_base.add point_record_text 

view.add pointbar_base 


#week status
#
week_base = Titanium.UI.createButton styles.week_base
week_title = Titanium.UI.createLabel styles.week_title	
week_base.add week_title 
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
view.add week_base 


button41 = Titanium.UI.createButton styles.button41
view.add button41 
rank = Titanium.UI.createButton styles.rank
view.add rank 
collection = Titanium.UI.createButton styles.collection
view.add collection 
challenge = Titanium.UI.createButton styles.challenge
view.add challenge 
support = Titanium.UI.createButton styles.support
view.add support 
supporter = Titanium.UI.createButton styles.supporter
view.add supporter 
rank_title = Titanium.UI.createLabel styles.rank_title
view.add rank_title 
rank_text = Titanium.UI.createLabel styles.rank_text
view.add rank_text 
collection_title = Titanium.UI.createLabel styles.collection_title
view.add collection_title 
collection_text = Titanium.UI.createLabel styles.collection_text
view.add collection_text 
challenge_title = Titanium.UI.createLabel styles.challenge_title
view.add challenge_title 
challenge_text = Titanium.UI.createLabel styles.challenge_text
view.add challenge_text 
#
#scrollView
#
scrollView = Titanium.UI.createScrollView styles.scrollview
scrollView.add view
win.add scrollView
