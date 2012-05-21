BaseWindow 		= require('ui/common/BaseWindow').BaseWindow
MockComponent 	= require('ui/common/MockComponent').MockComponent

class GetPoint extends BaseWindow
	constructor: (@data) ->
		info_obj @data

		@pointList = data.lists
		super {title:'good job!'}
		
		@collection = new MockComponent 'LearningMate', 'images/mock/collection.png'
		
		@win.add @collection.getNodeView()
		# Ti.App.checkInUpdate = true
		
		return @win 
		
	setView : () =>
		# title = Titanium.UI.createLabel styles.title
		# message = Titanium.UI.createLabel styles.message
		# point_base = Titanium.UI.createView styles.point_base
		# point_title = Titanium.UI.createLabel styles.point_title
		# point_base.add point_title 
		# point_number = Titanium.UI.createLabel styles.point_number
		# point_base.add point_number 
		# share_base = Titanium.UI.createView styles.share_base
		# share_title = Titanium.UI.createLabel styles.share_title	
		# share_base.add share_title 
		# share_number = Titanium.UI.createLabel styles.share_number	
		# share_base.add share_number 
		# item = Titanium.UI.createView styles.item
		# 
		# @win.add title 
		# @win.add message 
		# @win.add point_base
		# @win.add share_base 
		# @win.add item 
		# 
		# info 'setView'
		# point_number.text = @data.total + "pt"
		# for i in [0..@pointList.length-1]
		# 	info i
		# 	info 'loop'	
		# 	base_white = Titanium.UI.createView styles.base_white
		# 	base_white.top += 35*i
		# 	point_msg = Titanium.UI.createLabel styles.point_msg
		# 	point_msg.text = @pointList[i].msg
		# 	base_white.add point_msg
		# 	
		# 	point_num = Titanium.UI.createLabel styles.point_num
		# 	point_num.text = @pointList[i].point + 'pt'
		# 	base_white.add point_num
		# 	@win.add base_white
	

	setEvent : () ->
		
	setButton : () ->
		$.Util.setLeftButton @win,() ->
			Ti.App.rootWindow.close()
			return
		, {title:setTT("CLOSE")}
			
	# @pointDetail = () ->
	# 	for i in [0..2]
	# 		info 'tt.UI.pointDetail'
	# 		info i
	# 		box = Titanium.UI.createView styles.point_box
	# 		
	# 		
	# 		box.top = S.MARGIN+(S.MARGIN+S.ICON)*i
	# 		
	# 		point_label = Titanium.UI.createLabel styles.point_label
	# 		point_num = Titanium.UI.createLabel styles.point_num
	# 		box.add point_label
	# 		box.add point_num
	# 		point.add box
	# 	return
	# 
	# @SupporterList = () ->
	# 	info 'call api and get supporter list'
	# 	return
	# 
	# 
		# tt.UI.setRightButton () ->
		# 	Ti.App.rootWindow.close()
		# 	return

exports.GetPoint = GetPoint


styles =
	title:
		left: 20,
		top: 7,
		width: 80,
		height: 21,
		text: 'Good Job!',
		color: '#000000'
	message:
		left: 20,
		top: 122,
		width: 262,
		height: 21,
		text: '2 times today. you get yellow star.'
	point_base:
		left: 5,
		top: 147,
		width: 310,
		height: 33,
		backgroundImage: 'images/UI/bar_black.png'
	point_title:
		left: 14,
		top: 4,
		width: 46,
		height: 21,
		text: 'points'
		color:"fff"
	point_number:
		left: 257,
		top: 4,
		width: 42,
		height: 21,
		text: '15pt'
		color:"fff"
	base_white:
		left: 5,
		top: 185,
		width: 310,
		height: 33,
		backgroundImage: 'images/UI/bar_white.png'
	point_msg:
		left: 14,
		top: 4,
		width: 200,
		height: 21,
		text: 'points'
	point_num:
		left: 257,
		top: 4,
		width: 42,
		height: 21,
		text: '15pt'
	share_base:
		left: 5,
		top: 293,
		width: 310,
		height: 33,
		backgroundImage: 'images/UI/bar_black.png'
	share_title:
		left: 14,
		top: 4,
		width: 46,
		height: 21,
		text: 'points'
		color:"fff"
	share_number:
		left: 257,
		top: 4,
		width: 42,
		height: 21,
		text: '15pt'
		color:"fff"
	item:
		left: 116,
		top: 33,
		width: 88,
		height: 88,
		backgroundImage: 'images/star/2.png'
