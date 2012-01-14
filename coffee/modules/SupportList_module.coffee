tt = {}
tt.UI = {}
Titanium.include('Common_module.js');
do ->
	tt.UI.loadListView = (listType,user_id) ->
		apiName = ""
		
		switch listType
			when TEXT.LISTTYPE.SUPPORTER
				apiName = 'getSupporters'
				
			when TEXT.LISTTYPE.SUPPORTING
				apiName = 'getSupportings'
			else
				info 'Invalid listType'
				return
				
		API.callAPI 'GET',apiName, {user_id:user_id}, (json)->
			list = json.list
			data = []
			for i in [0..list.length-1]
				info 'create row:'+i
				data.push tt.UI.createListView list[i],styles
				
			tt.UI.tableView.data = data
			return
			
		return
	
	
	tt.UI.createListView = (userData) ->
			info_obj userData
			section = Ti.UI.createTableViewSection()
			
			row = Titanium.UI.createTableViewRow styles.row
			row.userData = userData
			
			icon = Ti.UI.createView styles.icon
			user = Titanium.UI.createLabel styles.user
			text = Titanium.UI.createLabel styles.text
			
			user.text = userData.nickname
			row.add icon
			row.add user
			
			section.add row
			
			return section
			
	
	return
	



