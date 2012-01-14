
tt = {}
tt.UI = {}
tt.module = {}
rightBotton = {}



do ->
	tt.UI.loadTimeline = () ->
		
		
		info info Ti.App.timeline_type
		rightBotton.title = Ti.App.timeline_type
		if !Ti.App.timeline_type
			rightBotton.title = 'new'
		
			# Ti.App.timeline_type = 'learn'
			# return
		# Ti.App.timeline_type = 'learn'
		params = 
			user_id:Ti.App.user_id
			opt:Ti.App.timeline_type
		
		API.callAPI 'GET','getTimeline',params, (json) ->
			Ti.App.timeline_type = ''
			
			info 'get api response'
			reports = json.reports
			data = []

			if reports[0]
				for i in [0..reports.length-1]
					info 'create row:'+i
					# tt.UI.tableView.appendRow tt.UI.createListView reports[i],styles
					data.push tt.UI.createListView reports[i],styles
			
			tt.UI.tableView.data = data
			
			return
		return
	
	
	tt.UI.createListView = (report,styles) ->
			
			section = Ti.UI.createTableViewSection()
			
			#define row
			row = Titanium.UI.createTableViewRow styles.row
			
			developer = Ti.UI.createLabel styles.developer
			icon = Ti.UI.createView styles.icon
			title = Ti.UI.createLabel styles.title

			row.report = report			
			developer.text = report.pjt_name
			title.text = report.report_text
			
			
			support = Ti.UI.createView styles.support
			support_text = Ti.UI.createLabel styles.support_text
			# #support_text.text = report.report_text
			support.add support_text
			
			row.add title
			row.add developer
			row.add icon
			row.add support

			if Ti.App.user_id!=Number report.user_id
				info 'create support button'
				support_button = Ti.UI.createLabel styles.support_button
				support_button_text = Ti.UI.createLabel styles.support_button_text
				support_button.add support_button_text
				row.add support_button
			
			section.add row
			
			return section
			
	
	
	tt.UI.gotoReportDetail = (report) ->
			Ti.API.info "open projectHomeWindow"
			newWindow = Ti.UI.createWindow  
				# title:'~ project' 
				backgroundColor:'#fff'
				url:'../controller/ReportDetail.js'
			
			Ti.App.Selected_Report = report
			# Ti.App.ProjectHomeWindow = newWindow
			return newWindow
	
	
	
	tt.UI.setCreateNewButton = (callback) ->
			# if Titanium.Platform.osname === 'android'
			if Titanium.Platform.osname == 'android' 
				activity = Titanium.Android.currentActivity
				if activity 
					acitivity.onCreateOptionsMenu = (e) ->
						menu = e.menu
						menuItem = menu.add {title: "再読込"}
						menuItem.setIcon "dark_refresh.png"
						menuItem.addEventListener "click", (e) ->
							callback

			else
				rightBotton = Titanium.UI.createButton
					title:'new'
					# systemButton: Titanium.UI.iPhone.SystemButton.REFRESH

				win.rightNavButton = rightBotton
				rightBotton.addEventListener 'click', () ->
					info 'click right button:'+callback
					callback()
					return
				return
	

	tt.execSupport = (e,pjt_id,user_id) ->
		params = 
			user_id:Ti.App.user_id
			pjt_id:pjt_id
			support_user_id:user_id
		
		API.callAPI 'GET','execSupport',params, (json) ->
			# support_success = json.support_success
			support_success = 1
			if support_success
				alert 'success'
				info JSON.stringify e
				info tt.UI.tableView.Data[0]
				e.source.text = done
				e.rowData.text = done
				return
			else
				alert 'false'
				return
		return
	

	tt.module.rowEventController = (e) ->
		info 'tt.module.rowEventController start'
		info JSON.stringify e
		switch e.source.clickName
			when 'support_text'
				user_id = e.rowData.report.user_id
				pjt_id = e.rowData.report.pjt_id
				info 'support ckicked id='+ e.rowData.user_id
				tt.execSupport e,pjt_id,user_id
			when 'icon'
				info 'icon ckicked'
			else
				info 'window open'
				# alert 'window open:'+JSON.stringify e
				Titanium.UI.currentTab.open tt.UI.gotoReportDetail e.rowData.report

		return
	
	
				
	return
	

Titanium.include('Common_module.js');

