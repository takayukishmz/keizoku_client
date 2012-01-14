tt = {}
tt.UI = {}
tt.module = {}
Titanium.include('Common_module.js');


do ->
	tt.UI.loadTimeline = () ->
		data = []
		base=[]		
		
		photo = Ti.UI.createView STYLE.BIGPHOTO
		photo.backgroundImage = '../images/user.png'
		row_top.add photo
		
		data.push section_top
		# data.push section_middle
		info 'test'
		info_obj Ti.App.Selected_Report_reportdetail
		params = 
			pjt_id:Ti.App.Selected_Report_reportdetail.pjt_id
			
		# 
		API.callAPI 'GET','getTimeline',params, (json) ->
			info 'get api response'
			reports = json.reports
			# reports = [1,2,3]
			for i in [0..reports.length-1]
				info 'create row:'+i
				# tt.UI.tableView.appendRow tt.UI.createListView reports[i],styles
				data.push tt.UI.createListView reports[i],styles	
		
			
		header = Ti.UI.createView styles.header
		header_text= Ti.UI.createLabel styles.header_text
		header.add header_text
		data[1].headerView = header
		
		tt.UI.tableView.data = data
		
		return
	
	tt.UI.createListView = (report,styles) ->
		info 'createlistview'
		section = Ti.UI.createTableViewSection()
		row = Titanium.UI.createTableViewRow styles.row
		row.report = report
		#
		#counter
		#
		counter = Ti.UI.createView styles.counter
		counter_text = Ti.UI.createLabel styles.counter_text
		counter_text.text = report.count
		counter.add counter_text
		
		#
		#stars
		#
		check_cnt = report.count%3
		info 'check_cnt'+check_cnt
		switch check_cnt
			when 0
				star_num = 2
			when 1
				star_num = 0
			when 2
				star_num = 1
			else
				info 'check_cnt error'
				star_num = 0
		
		for i in [0..star_num]
			info 'star:'+i
			star = Titanium.UI.createImageView styles.star
			# star.right = 0
			star.left = S.MARGIN+(S.ICON/3)*i
			row.add star
		
		#
		#message
		#
		miniicon = Ti.UI.createView	STYLE.MINIPHOTO 
		
		miniicon.left = S.ICON+S.MARGIN*2
		miniicon.top = S.ICON*2/3+S.MARGIN*2
		miniicon.backgroundImage = '../images/user.png'
		
		  
		message = Ti.UI.createLabel styles.message
		# message.text = 'name' + ' done his project:' + '[projectTitle]'+"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#########"
		message.text = report.report_text
		
		row.add counter
		row.add message
		row.add miniicon
		
		section.add row
		
		return section

	tt.UI.gotoUserDetail = (report) ->
		Ti.API.info "open UserDetailWindow"
		newWindow = Ti.UI.createWindow  
			backgroundColor:'#fff'
			url:'../controller/UserDetail.js'
	
			# Ti.App.ProjectHomeWindow = newWindow
		return newWindow

	
	tt.module.rowEventController = (e) ->
		info 'at projectTL'
		info 'tt.module.rowEventController start'
		info e.source.clickName
		switch e.source.clickName
			when 'timeline'
				info 'click user report '
				user_id = e.rowData.report.user_id
				Titanium.UI.currentTab.open tt.UI.gotoUserDetail user_id
			when 'icon'
				info 'icon ckicked'
			else
				info 'window open'
				# alert 'window open:'+JSON.stringify e

		
		return
	
	return


