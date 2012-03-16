BaseListView 	= require('ui/common/BaseListView').BaseListView


class RecordList extends BaseListView
	constructor: (@user_id) ->
		@apiURL = 'getTimeline'	
		@apiParams = {user_id:@user_id}
		
		super {title:'RecordList'}
		
		return @win
	
	createListView : (report)=>
		info 'createListView'
		section = Ti.UI.createTableViewSection()
		info 'createListView1'		
		row = Titanium.UI.createTableViewRow @styles.row
		row.report = report
		info 'createListView2'		
		icon = Ti.UI.createView @styles.icon
		text = Titanium.UI.createLabel @styles.title
		info 'createListView3'
		text.text = report.comment
		row.add icon
		row.add text			
		section.add row
			
		return section


	

exports.RecordList = RecordList


