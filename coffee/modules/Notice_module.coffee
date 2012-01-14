tt = {}
tt.UI = {}
tt.module = {}

Titanium.include('Common_module.js');


do ->
	tt.UI.loadListView = () ->
		
		params =
			user_id:Ti.App.user_id
		
		API.callAPI 'GET','getNotice',params, (json) ->
			info 'success getNoticeAPI'
			notices = json.notices
			tt.UI.tableView.data = [];
			for i in [0..notices.length-1]
				info i
				tt.UI.tableView.appendRow tt.UI.createNoticeRow notices[i]
			return 
	
	tt.UI.createNoticeRow = (notice) ->
		info 'createNoticeRow'
		row = Titanium.UI.createTableViewRow styles.row
		row.notice = notice
			# backgroundColor:'#fff'
		
		icon = Ti.UI.createView styles.icon
		user = Titanium.UI.createLabel styles.user
		text = Titanium.UI.createLabel styles.text
		
		user.text = notice.nickname+ ' san ga'
		
		
		switch notice.type
			when 'share'
				info 'share'
				text.text = 'done \''+notice.pjt_name+'\' '+notice.count+' times and share '+notice.point/4+' points'
				
			when 'support'
				info 'support'
				text.text = 'became your supporter'
			when 'like'
				info 'like'
				text.text = 'like your puroject:'+notice.pjt_name
		row.add icon
		row.add user
		row.add text
		
		return row
	return



