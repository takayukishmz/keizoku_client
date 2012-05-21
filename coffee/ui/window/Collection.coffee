BaseWindow 	= require('ui/common/BaseWindow').BaseWindow
MockComponent 	= require('ui/common/MockComponent').MockComponent


class Collection extends BaseWindow
	
	TYPE:
		CALENDAR:0
		COLLECTION:1
		
	constructor : () ->
		@params = 
			title:'collection'
			width:320
			height:368
			
		super @params
		
		@collection = new MockComponent 'LearningMate', 'images/mock/collection.png'
		@calendar = new MockComponent 'LearningMate', 'images/mock/calendar.png'
		
		@win.add @collection.getNodeView()
		@win.add @calendar.getNodeView()
		
		return @win	
		
	setView:() =>
		@buttonBar = Ti.UI.createButtonBar
			labels:['カレンダー', 'コレクション'],
			backgroundColor:Const.BUTTONBARCOLOR,
			top:3,
			style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
			height:25,
			width:200
	
		@win.titleControl = @buttonBar		
		
		
		
	setButton : () ->
	
	setEvent: () =>
		@buttonBar.addEventListener "click", (e) =>
			
			@collection.getNodeView().setVisible false
			@calendar.getNodeView().setVisible false
			
			switch e.index 
				when @TYPE.CALENDAR
					@calendar.getNodeView().setVisible true
				when @TYPE.COLLECTION				
					@collection.getNodeView().setVisible true				

			return
		
		
exports.Collection = Collection

