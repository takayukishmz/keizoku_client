tt = {}
tt.UI = {}
Titanium.include('Common_module.js');
do ->
	tt.UI.loadListView = (user_id) ->
		API.callAPI 'GET','getTimeline', {user_id:user_id}, (json)->
			list = json.reports
			data = []
			for i in [0..list.length-1]
				info 'create row:'+i
				data.push tt.UI.createListView list[i],styles
				
			tt.UI.tableView.data = data
			return
			
		return
	
	
	tt.UI.createListView = (report) ->
			info_obj report
			section = Ti.UI.createTableViewSection()
			
			row = Titanium.UI.createTableViewRow styles.row
			row.report = report
			
			icon = Ti.UI.createView styles.icon
			text = Titanium.UI.createLabel styles.title
				
			text.text = report.comment
			row.add icon
			row.add text			
			section.add row
			
			return section
			
	
	return
	




