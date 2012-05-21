BaseWindow 		= require('ui/common/BaseWindow').BaseWindow
MockComponent 	= require('ui/common/MockComponent').MockComponent

class Group extends BaseWindow
	
	TYPE:
		MEMBER:0
		TIMELINE:1
		RATING:2
	
	constructor : () ->
		
		@params = title:'Group Learning'
		super @params
		
		@memberList = new MockComponent 'LearningMate', 'images/mock/grouprank.png'
		@rating = new MockComponent 'LearningMate', 'images/mock/rating.png'
		@timeline = new MockComponent 'LearningMate', 'images/mock/timeline.png'
		
		@win.add @memberList.getNodeView()
		@win.add @rating.getNodeView()
		@win.add @timeline.getNodeView()
		
		
		return @win
		
	setView: () => 
		@buttonBar = Ti.UI.createButtonBar
			labels:['メンバー', 'タイムライン', '評価'],
			backgroundColor:Const.BUTTONBARCOLOR,
			top:3,
			style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
			height:25,
			width:250
	
		@win.titleControl = @buttonBar		
		
		return
		
	setButton : () =>
		
	
	setEvent : () =>
		@buttonBar.addEventListener "click", (e) =>
			
			@memberList.getNodeView().setVisible false
			@rating.getNodeView().setVisible false
			@timeline.getNodeView().setVisible false
			
			switch e.index 
				when @TYPE.MEMBER
					@memberList.getNodeView().setVisible true
				when @TYPE.TIMELINE				
					@timeline.getNodeView().setVisible true				
				when @TYPE.RATING
					@rating.getNodeView().setVisible true			
			return
		
		
exports.Group = Group