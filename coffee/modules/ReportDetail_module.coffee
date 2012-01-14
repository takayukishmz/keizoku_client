tt = {}
tt.UI = {}
tt.module = {}
Titanium.include('Common_module.js');

info_obj Ti.App

setup_flg = true

do ->
	tt.UI.loadTimeline = () ->
		data = []
		
		user_num =2
		for i in [0..user_num]
			info 'user:'+i
			icon = Ti.UI.createView STYLE.PHOTO
			icon.left = S.MARGIN*(1+i)+(S.ICON)*i
			icon.backgroundImage = '../images/user.png'
			row_top.add icon
		
		
		photo.backgroundImage = '../images/user.png'
		
		
		pjt_name.text = Ti.App.Selected_Report_timeline.pjt_name
		
		data.push section_top
		data.push section_middle
		
		params = 
			user_id:Ti.App.Selected_Report_timeline.user_id
			pjt_id:Ti.App.Selected_Report_timeline.pjt_id
		
		API.callAPI 'GET','getTimeline',params, (json) ->
			info 'get api response'
			reports = json.reports
			tt.UI.tableView.data = data

			# reports = [1,2,3]		
			if setup_flg
				info 'setup'
				setup_flg = false
				for i in [0..reports.length-1]
					info 'create row:'+i
					# tt.UI.tableView.appendRow tt.UI.createListView reports[i],styles
					data.push tt.UI.createListView reports[i],styles
				
				header = Ti.UI.createView styles.header
				header_text= Ti.UI.createLabel styles.header_text
				header.add header_text
				data[2].headerView = header
			
				tt.UI.tableView.data =data
				return
			else
				tt.UI.updateRow(reports)
				return
		
		
					
	tt.UI.updateRow = () ->
		for i in [2..tt.UI.tableView.data.length-1]
				info 'create row:'+i
				tt.UI.tableView.updateRow i,tt.UI.createListView reports[i-2],styles	
		return
	
	tt.UI.createListView = (report,styles) ->
		info 'createlistview'
		section = Ti.UI.createTableViewSection()
		row = Titanium.UI.createTableViewRow styles.row
		info_obj report
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
		message.text = report.report_text
		
		
		row.add counter
		row.add message
		row.add miniicon
		
		section.add row
		
		return section
	
	tt.module.rowEventController = (e) ->
		info 'rowEventController start'
		info JSON.stringify e
		switch e.source.clickName
			when 'top'
				info 'top'
			when 'middle'
				info 'middle'
				Titanium.UI.currentTab.open tt.UI.gotoProjectTL Ti.App.Selected_Report_timeline

			else
				info 'else'
				Titanium.UI.currentTab.open tt.UI.gotoUserDetail e.rowData.report
				# alert 'window open:'+JSON.stringify e
				
		return
	
	tt.UI.gotoProjectTL = (report) ->
			Ti.API.info "open ProjectTLWindow"
			newWindow = Ti.UI.createWindow  
				backgroundColor:'#fff'
				url:'../controller/ProjectTL.js'
			
			Ti.App.Selected_Report_reportdetail = report
			# Ti.App.ProjectHomeWindow = newWindow
			return newWindow
	
	return


