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
		
		icon = Ti.UI.createImageView styles.icon
		icon.image = notice.picture_url
		
		message = Titanium.UI.createLabel styles.title	
		#debug
		notice.type = "support"
		
		switch notice.type
			when 'share'
				message.text = setTT('NOTICE_SHARE', [notice.nickname, notice.point])
				message.clickName = 'share'
				row.clickName = 'share'
			when 'support'
				message.text = setTT('NOTICE_SUPPORT', [notice.nickname])
				message.clickName = 'support'
				row.clickName = 'support'
			when 'like'
				message.text = 'like your puroject:'+notice.pjt_name
		row.add icon
		row.add message
		
		return row
		
	tt.module.rowEventController = (e) ->
		switch e.source.clickName
			when 'share'
				info 'share'
			when 'support'
				info 'support'
				Titanium.UI.currentTab.open tt.UI.createUserHomeView e.rowData.notice.user_id ,{animated:true}
			else
				info 'else'
		return
				
	return



