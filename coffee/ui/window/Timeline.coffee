Ti.API.info 'timeline.js'
### const ####################################################################
Ti.App.timeline_type = '';
Ti.App.update_tl = true
### UI #######################################################################
LikeButton 	= require('ui/LikeButton').LikeButton
styles 		= require('styles/Timeline_style').styles
BaseWindow 		= require('ui/common/BaseWindow').BaseWindow
TimelineListView = require('ui/timeline/Timeline').Timeline
WeeklyTotalGraph 	= require('ui/comparison/WeeklyTotalGraph').WeeklyTotalGraph
UserResultPanel 	= require('ui/comparison/UserResultPanel').UserResultPanel


class Timeline extends BaseWindow
	
	@_selectedMenuIndex = -1
	
	constructor : ()->
			super {title:'timeline'}
					
			@timeline = new TimelineListView()	
			@graph = new WeeklyTotalGraph()
			@panel = new UserResultPanel()
			
			@win.add @timeline.getNodeView()
			@win.add @graph.view
			@win.add @panel
			
			@graph.view.setVisible false
			@panel.setVisible false
			
			return @win
	# 
	setView : () =>
		@setTitle()
	# 
	# 	
	# 
	# setButton :() ->
	# 	$.Util.setRightButton @win, () ->
	# 		# when dialog already opened
	# 		if Ti.App.selectDialog_flg
	# 			return
	# 		
	# 		Ti.App.selectDialog_flg = true
	# 		
	# 		
	# 		w = Titanium.UI.createWindow
	# 			backgroundColor:'#336699'
	# 			borderWidth:2
	# 			borderColor:'#999'
	# 			height:400
	# 			width:300
	# 			borderRadius:5
	# 			opacity:0.92
	# 			# transform:t
	# 			url:'../controller/SelectTimeline.js'
	# 	
	# 		$.Util.create2DMatrixDialog w
	# 		return
	# 	,	{
	# 		title:'Filter'
	# 		# color:'red'
	# 		width:10
	# 		height:10
	# 		color:'black'
	# 		# image:'images/UI/base_pink.png'
	# 	}
	# 
	# 
	setEvent : () =>
		### call API #########################################################
		@win.addEventListener 'focus',() =>
			info 'focus - Timeline'
			if Ti.App.update_tl
				Ti.App.update_tl = false
				@timeline.loadTimeline()
				return
		
		@buttonBar.addEventListener 'click', (e) =>
			@_selectedMenuIndex = e.index
			
			if e.index == 0
				@timeline.getNodeView().setVisible true
				@panel.setVisible false
				@graph.view.setVisible false
			else if e.index == 1
				@timeline.getNodeView().setVisible false
				@panel.setVisible true
				@graph.view.setVisible true
				
			return
		
		
		
	setTitle : () =>
		@buttonBar = Ti.UI.createButtonBar
			labels:['タイムライン', '比較'],
			backgroundColor:Const.BUTTONBARCOLOR,
			top:3,
			style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
			height:25,
			width:200
	
		@win.titleControl = @buttonBar
		return

	
	
exports.Timeline = Timeline