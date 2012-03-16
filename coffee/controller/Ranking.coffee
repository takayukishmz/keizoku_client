Titanium.include '../styles/Ranking_style.js'
### event ####################################################################
button_share.addEventListener 'click', (e)->
### loadView #################################################################

week_id = 1

passdNumOfDays = 7
color = ["red","orange","yellow","green", "blue", "navy", "purple"]
bars = []
percents = []
graphSpace = {
	top:100
	left:35
	width:200
	height:220
	
}

class WeeklyTotalGraph
	@maxRatio : 0
	@maxIndex : 0		
	@box_h : graphSpace.height / passdNumOfDays
	@margin : (@box_h - 28) / 2
	
	constructor : () ->
		@win = Ti.UI.createWindow
			title:'graph'
		return @win
		
	@getWeeklyTotalData : () ->
		info 'tt.UI.update'
		$.API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) ->
			total_data = json.weekly_total_data
			@createGraph(total_data)
			return
	
	@updateWeeklyTotalData : () ->
		$.API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) ->
			total_data = json.weekly_total_data;
			@updateGraph(total_data)
			return
			
	@createGraph : (data) ->
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

			@win.add day_num
			@win.add bar 
			@win.add per_num		
			
			bars.push bar
			percents.push per_num
			
			@move bar, 0, width
		return
			
	@updateGraph : (data) ->
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
			percents[i].text = ratios[i] + "%"
			height = graphSpace.top + @margin * 2 * (i) + @margin * i + 28 *(i) 
			width = graphSpace.width*(ratios[i] / @maxRatio)
			@move bars[i], 0, width		
		return
	
		
	@calcRatio : (data) ->
		ratios = []
		for i in [1..passdNumOfDays]
			ratio = data["count_"+i] / data.num_all * 100
			if ratio > @maxRatio
				@maxRatio = ratio
				@maxIndex = i
			ratios.push(ratio)
		return ratios

exports.WeeklyTotalGraph = WeeklyTotalGraph

tt.UI.setRightButton tt.api.updateWeeklyTotalData
# win.addEventListener "focus", () ->
# 	tt.api.getWeeklyTotalData()



