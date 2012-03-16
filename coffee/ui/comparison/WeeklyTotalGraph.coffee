styles = 
	bar:
		left: 35,
		height: 28
		width:0
		backgroundColor:'#345'
		borderRadius:5
	day_num:
		left: 5,
		width: 28,
		height: 28,
		textAlign:'center'
	per_num:
		right: 5,
		width: 35,
		height: 28,
		textAlign: "right"
		



week_id = 0

passdNumOfDays = 7
color = ["red","orange","yellow","green", "blue", "navy", "purple"]
bars = []

graphSpace = {
	top:0
	left:35
	width:200
	height:220	
}

class WeeklyTotalGraph
	
	
	constructor : () ->
		@maxRatio = 0
		@maxIndex = 0		
		@box_h = graphSpace.height / passdNumOfDays
		@margin = (@box_h - 28) / 2
		@percents = []
		
		
		@view = Ti.UI.createView
			title:'graph'
			# backgroundColor:'#fff'
			top:100
			left:0
			width:320
			height:220
		
		@getWeeklyTotalData()
		
		
	getWeeklyTotalData : () =>
		info 'tt.UI.update'
		$.API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) =>
			# total_data = json.weekly_total_datas
			# @createGraph(total_data)
			@createGraph()
			return
	
	updateWeeklyTotalData : () =>
		@updateGraph()
		$.API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) =>
			info '1'			
			total_data = json.weekly_total_data;
			@updateGraph(total_data)
			return
			
	createGraph : (data) ->
		info 'createGraph'

		ratios = []
		
		data = {
		      "count_3" : "5",
		      "count_1" : "5",
		      "count_7" : "10",
		      "count_6" : "30",
		      "count_2" : "30",
		      "num_all" : "100",
		      "start_date" : "1",
		      "count_4" : "15",
		      "count_5" : "5"
		}
		#check day which num is the highest of all
		ratios = @calcRatio(data)		
		
		for i in [1..passdNumOfDays]
			height = graphSpace.top + @margin * 2 * (i-1) + @margin * i + 28 *(i-1) 
			width = graphSpace.width*(ratios[i - 1] / @maxRatio)

			bar = Titanium.UI.createView styles.bar
			bar.top = height
			bar.backgroundColor = color[i-1]

		
			day_num = Titanium.UI.createLabel styles.day_num
			day_num.text = i
			day_num.top = height
 		
			per_num = Titanium.UI.createLabel styles.per_num
			per_num.top = height
			per_num.text = ratios[i-1] + "%"

			@view.add day_num
			@view.add bar 
			@view.add per_num	
			
			bars.push bar
			@percents.push per_num
			bar.width = width
			# $.Util.move bar, 0, width
		return
			
	updateGraph:(data) =>
		info 'updateGraph'
		ratios = []
		
		data = {
		      "count_3" : "5",
		      "count_1" : "5",
		      "count_7" : "10",
		      "count_6" : "25",
		      "count_2" : "35",
		      "num_all" : "100",
		      "start_date" : "1",
		      "count_4" : "15",
		      "count_5" : "5"
		}
		#check day which num is the highest of all
		
		ratios = @calcRatio(data)

		for i in [0..bars.length-1]
			@percents[i].text = ratios[i] + "%"
			height = graphSpace.top + @margin * 2 * (i) + @margin * i + 28 *(i) 
			width = graphSpace.width*(ratios[i] / @maxRatio)
			# $.Util.move bars[i], 0, width		
		
		return
	
	
	calcRatio : (data) =>
		ratios = []
		for i in [1..passdNumOfDays]
			ratio = data["count_"+i] / data.num_all * 100
			if ratio > @maxRatio
				@maxRatio = ratio
				@maxIndex = i
			ratios.push(ratio)
		return ratios

exports.WeeklyTotalGraph = WeeklyTotalGraph
