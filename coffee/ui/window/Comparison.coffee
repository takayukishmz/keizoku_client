WeeklyTotalGraph 	= require('ui/comparison/WeeklyTotalGraph').WeeklyTotalGraph
UserResultPanel 	= require('ui/comparison/UserResultPanel').UserResultPanel
BaseWindow 			= require('ui/common/BaseWindow').BaseWindow

class Comparison extends BaseWindow
	constructor : () ->
		@params = 
			title:"comparision"
		
		super @params
		
		@graph = new WeeklyTotalGraph()
		@panel = new UserResultPanel()
		# @graph.updateWeeklyTotalData()
		@win.add @graph.view
		@win.add @panel
		
		$.Util.setRightButton @win, @graph.updateWeeklyTotalData
		
		@setEvent()
		
		return @win
	setEvent : () ->
		# @win.addEventListener 'focus', () =>
			# @graph.getWeeklyTotalData()
		
	
	
	
exports.Comparison = Comparison