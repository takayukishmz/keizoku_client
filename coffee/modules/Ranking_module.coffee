Titanium.include('Common_module.js');

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

tt.api = {}
do ->
	tt.maxRatio = 0
	tt.maxIndex = 0		
	tt.box_h = graphSpace.height / passdNumOfDays
	tt.margin = (tt.box_h - 28) / 2
	
	tt.api.getWeeklyTotalData = () ->
		info 'tt.UI.update'
		API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) ->
			total_data = json.weekly_total_data
			tt.UI.createGraph(total_data)
			return
	
	tt.api.updateWeeklyTotalData = () ->
		API.callAPI 'GET','getWeeklyTotalData',{week_id:week_id}, (json) ->
			total_data = json.weekly_total_data;
			tt.UI.updateGraph(total_data)
			return
			
	tt.UI.createGraph = (data) ->
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
		ratios = tt.module.calcRatio(data)		
		
		for i in [1..passdNumOfDays]

			height = graphSpace.top + tt.margin * 2 * (i-1) + tt.margin * i + 28 *(i-1) 
			width = graphSpace.width*(ratios[i - 1] / tt.maxRatio)

			bar = Titanium.UI.createView styles.bar
			bar.top = height
			bar.backgroundColor = color[i-1]

		
			day_num = Titanium.UI.createLabel styles.day_num
			day_num.text = i
			day_num.top = height
 		
			per_num = Titanium.UI.createLabel styles.per_num
			per_num.top = height
			per_num.text = ratios[i-1] + "%"

			win.add day_num
			win.add bar 
			win.add per_num		
			
			bars.push bar
			percents.push per_num
			
			tt.module.move bar, 0, width
		return
	

			
	tt.UI.updateGraph = (data) ->
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
		
		ratios = tt.module.calcRatio(data)

		for i in [0..bars.length-1]
			percents[i].text = ratios[i] + "%"
			height = graphSpace.top + tt.margin * 2 * (i) + tt.margin * i + 28 *(i) 
			width = graphSpace.width*(ratios[i] / tt.maxRatio)
			tt.module.move bars[i], 0, width		
		return
	

	tt.module.calcRatio = (data) ->
		ratios = []
		for i in [1..passdNumOfDays]
			ratio = data["count_"+i] / data.num_all * 100
			if ratio > tt.maxRatio
				tt.maxRatio = ratio
				tt.maxIndex = i
			ratios.push(ratio)
		return ratios
		
	return
	