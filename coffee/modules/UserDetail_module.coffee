tt = {}
tt.UI = {}
tt.module = {}
Titanium.include('Common_module.js');

do ->
	tt.UI.loadTimeline = () ->
		data = []
		#########################
		#top
		#########################
		row_top = Titanium.UI.createTableViewRow styles.base_profile
		section_top = Ti.UI.createTableViewSection()
		section_top.add row_top
		
		photo = Ti.UI.createView STYLE.PHOTO
		photo.backgroundImage = '../images/user.png'
		
		username = Ti.UI.createLabel styles.username 
		
		support_box = Ti.UI.createView styles.support_box
		support_text = Ti.UI.createLabel styles.support_text #いずれは画像で
		support_box.add support_text

		star_box = Ti.UI.createView styles.count_box  
		star_num = Ti.UI.createLabel styles.count_num #いずれは画像で
		star_text = Ti.UI.createLabel styles.count_text #いずれは画像で
		star_text.text = 'stars'
		star_box.add star_num
		star_box.add star_text
		
		point_box = Ti.UI.createView styles.point_box  
		point_num = Ti.UI.createLabel styles.count_num #いずれは画像で
		point_text = Ti.UI.createLabel styles.count_text #いずれは画像で
		point_text.text = 'point'
		point_box.add point_num
		point_box.add point_text
		
		series_box = Ti.UI.createView styles.series_box  
		series_num = Ti.UI.createLabel styles.count_num #いずれは画像で
		series_text = Ti.UI.createLabel styles.count_text #いずれは画像で
		series_text.text = '連続記録'
		series_box.add series_num
		series_box.add series_text
		
		row_top.add photo
		row_top.add username
		row_top.add support_box
		row_top.add star_box
		row_top.add point_box
		row_top.add series_box
		
		#########################
		#middle
		#########################
		row_middle = Titanium.UI.createTableViewRow styles.base_black
		row_middle.hasChild = true
		section_middle = Ti.UI.createTableViewSection()
		section_middle.add row_middle		
		
		header = Ti.UI.createView styles.header
		header_text= Ti.UI.createLabel styles.header_text
		header.add header_text
		
		section_middle.headerView = header
		
		star_num = 3
		for i in [0..star_num]
			info 'star:'+i
			star = Titanium.UI.createImageView STYLE.BIGSTAR
			# star.right = 0
			star.left = S.MARGIN+(S.ICON)*i
			star.top = S.MARGIN*2
			row_middle.add star
		
		#########################
		#bottom
		#########################
		# row_bottom = Titanium.UI.createTableViewRow styles.base_bottom
		# section_bottom = Ti.UI.createTableViewSection()
		# section_bottom.add row_bottom
		# 
		# 
		# 
		# supporting_button = Ti.UI.createView styles.supporting_button 
		# supporting_text = Ti.UI.createLabel styles.supporting_text
		# supporting_num = Ti.UI.createLabel styles.supporting_num
		# 
		# 
		# supporting_button.add supporting_text
		# supporting_button.add supporting_num
		# 
		# supporter_button = Ti.UI.createView styles.supporter_button 
		# supporter_text = Ti.UI.createLabel styles.supporter_text
		# supporter_num = Ti.UI.createLabel styles.supporter_num
		# 
		# supporter_button.add supporter_text
		# supporter_button.add supporter_num		
		# 
		# row_bottom.add supporter_button
		# row_bottom.add supporting_button
		# 
		
		#########################
		#setup
		#########################
		data.push section_top
		data.push section_middle

		
		tt.UI.tableView.data = data
		return
	
	tt.UI.createListView = (report,styles) ->
		info 'createlistview'
		section = Ti.UI.createTableViewSection()
		row = Titanium.UI.createTableViewRow styles.row
		
		#
		#counter
		#
		counter = Ti.UI.createView styles.counter
		counter_text = Ti.UI.createLabel styles.counter_text
		counter_text.text = '1'
		counter.add counter_text
		
		#
		#stars
		#
		check_cnt = 5%3
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
		message.text = 'name' + ' done his project:' + '[projectTitle]'+"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#########"
		
		
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
				Titanium.UI.currentTab.open tt.UI.gotoProjectTL 'hoge'

			else
				info 'else'
				# alert 'window open:'+JSON.stringify e
				
		return
		
	tt.UI.gotoProjectTL = (report) ->
			Ti.API.info "open ProjectTLWindow"
			newWindow = Ti.UI.createWindow  
				backgroundColor:'#fff'	
				url:'../controller/ProjectTL.js'
			
			# Ti.App.ProjectHomeWindow = newWindow
			return newWindow
	
	
	tt.UI.gotoUserDetail = (report) ->
			Ti.API.info "open UserDetailWindow"
			newWindow = Ti.UI.createWindow  
				backgroundColor:'#fff'
				url:'../controller/UserDetail.js'
			
			# Ti.App.ProjectHomeWindow = newWindow
			return newWindow
	
	return


