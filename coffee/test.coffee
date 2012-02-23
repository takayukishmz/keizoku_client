win = Titanium.UI.currentWindow
# win.backgroundImage = './images/UI/base_pink.png'


icon = Titanium.UI.createImageView
	left: 58,
	top: 11,
	width: 22,
	height: 7

win.add icon 

name = Titanium.UI.createLabel
	left: 88,
	top: 11,
	width: 100,
	height: 21,
	text: 'Label',
	font: {fontFamily: 'Helvetica', fontSize: 12},
	color: '#4c4c4c'

win.add name 

starText = Titanium.UI.createLabel
	left: 268,
	top: 70,
	width: 40,
	height: 21,
	text: 'get !!',
	color: '#4c4c4c'

win.add starText 

message = Titanium.UI.createLabel
	left: 58,
	top: 34,
	width: 135,
	height: 21,
	text: '- min learned & get -- Pts',
	color: '#4c4c4c'

win.add message 

commentBox = Titanium.UI.createView
	left: 58,
	top: 58,
	width: 200,
	height: 33,
	backgroundImage:'images/UI/commentBox.png'


message = Titanium.UI.createLabel
	left: 8,
	top: 6,
	width: 135,
	height: 21,
	text: '- min learned & get -- Pts',
	color: '#4c4c4c'
	font: {fontFamily: 'Helvetica', fontSize: 12},

commentBox.add message 

win.add commentBox 

footer = Titanium.UI.createView
	left: 0,
	top: 99,
	width: 320,
	height: 33,
	backgroundImage:'images/UI/row_footer.png'

likeIcon = Titanium.UI.createView
	left: 5,
	top: 3,
	width: 28,
	height: 28,
	backgroundImage:'images/UI/like.png'

footer.add likeIcon 

commnetIcon = Titanium.UI.createView
	left: 89,
	top: 3,
	width: 28,
	height: 28,
	backgroundImage:'images/UI/comment.png'

footer.add commnetIcon 

likeNum = Titanium.UI.createLabel
	left: 41,
	top: 7,
	width: 40,
	height: 21,
	text: 'num',
	color: '#4c4c4c'
	font: {fontFamily: 'Helvetica', fontSize: 12},
	
footer.add likeNum 

commentNum = Titanium.UI.createLabel
	left: 125,
	top: 7,
	width: 40,
	height: 21,
	text: 'get !!',
	color: '#4c4c4c'
	font: {fontFamily: 'Helvetica', fontSize: 12},

footer.add commentNum 

win.add footer 

star = Titanium.UI.createView
	left: 266,
	top: 22,
	width: 44,
	height: 44,
	backgroundImage:'images/star/1.png'

win.add star 

ribon = Titanium.UI.createView
	left: 0,
	top: 6,
	width: 50,
	height: 33,
	backgroundImage:'images/UI/ribon1.png'

dayCnt = Titanium.UI.createLabel
	left: 11,
	top: 6,
	width: 100,
	height: 21,
	text: 'days',
	color: '#4c4c4c'
	font: {fontFamily: 'Helvetica', fontSize: 12},
	
ribon.add dayCnt 

win.add ribon 

