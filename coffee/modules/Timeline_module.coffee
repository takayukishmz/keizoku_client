tt = {}
tt.UI = {}
tt.api = {}
tt.module = {}
rightBotton = {}
Titanium.include('Common_module.js');
do ->
	tt.SelectedIndex = 0
	tt.SelectedRow = ''
	tt.Stat = 
		ISLIKE:'isLike'
		NOLIKE:'noLike'
	
	tt.UI.loadTimeline = () ->	
		info info Ti.App.timeline_type
		rightBotton.title = Ti.App.timeline_type
		if !Ti.App.timeline_type
			rightBotton.title = 'new'
		params = 
			category:Ti.App.timeline_type
			user_id:Ti.App.user_id
		
		API.callAPI 'GET','getTimeline',params, (json) ->
			Ti.App.timeline_type = ''
			
			info 'get api response'
			reports = json.reports
			data = []
			isLike = false
			if reports[0]
				for i in [0..reports.length-1]
					info 'create row:'+i
					data.push tt.UI.createListViewRow reports[i],isLike, false
			
			tt.UI.tableView.data = data
			
			return
		return
		
	
	
	tt.module.execLike = (report_id, user_id, unDo) ->
		
		api = if unDo then "cancelLike" else "execLike"
		
		params = 
			user_id:user_id,
			report_id:report_id,

		API.callAPI 'GET',api,params, (json) ->			
			if json.success
				info 'message ' + json.message
				switch json.message
					when TEXT.ALREADY_LIKED
						info TEXT.ALREADY_LIKED
						row = tt.UI.createListViewRow(tt.SelectedRow, 0 , tt.Stat.ISLIKE)
						tt.UI.tableView.updateRow tt.SelectedIndex, row
					when TEXT.NOT_LIKE_YET
						info TEXT.NOT_LIKE_YET
						row = tt.UI.createListViewRow(tt.SelectedRow, 0 , tt.Stat.NOLIKE)
						tt.UI.tableView.updateRow tt.SelectedIndex, row
					else
						info 'OK! no error'
			else
				alert 'server error'
			
			return
		return
	
	
	tt.UI.createRowContent = (report) ->
		#define row
		row = Titanium.UI.createTableViewRow styles.row
		row.report = report
		# --------------------------------------
		#ver 0
		# --------------------------------------
		icon = Titanium.UI.createImageView
			left: 5,
			top: 5,
			width: 33,
			height: 33,
			borderRadius:3
		
		icon.image = if report.picture_url then report.picture_url else '../images/' + Const.DEFALT.USER
		
		row.add icon
		
		name = Titanium.UI.createLabel
			left: 85,
			top: -1,
			width: 200,
			height: 44,
			color:S.FONTCOLOR
			font: {fontFamily: 'Helvetica', fontSize: 12}
		
		name.text = report.nickname
		
		# header.add icon 			
		row.add name
		
		
		star_shadow = Titanium.UI.createView
			left: 34,
			top: 0,
			width: 44,
			height: 44,
			backgroundImage: '../images/star/shadow.png'
		
		
		star = Titanium.UI.createView
			left: 9,
			top: 9,	
			width: 27,
			height: 27,
			# backgroundImage: '../images/star/yellow.png'
		
		starID = if Number report.day_first then report.color_id else 0			
		star.backgroundImage = "../images/star/"+starID+".png"
		
		if !starID
			dot = Titanium.UI.createView
				left: 52,
				top: 15,	
				width: 11,
				height: 11,
				backgroundImage:"../images/UI/dot.png"
			
			row.add dot
		else
			star_shadow.add star 

			row.add star_shadow			
			
		time = Titanium.UI.createLabel
			left: 77,
			bottom:5 ,
			width: 222,
			height: 17,
			text: '~ min ago',
			textAlign:'left'
			# color:S.FONTCOLOR
			color:"#999"
			font: {fontFamily: 'Helvetica', fontSize: 12}
		
		row.add time 
		
		message = Titanium.UI.createLabel
			color:S.FONTCOLOR
			left: 86,
			top: 30,
			width: 200,
			height: 44,
			text: 'learned 15 min & get 15pt'
			font: {fontFamily: 'Helvetica', fontSize: 12}
						
		row.add message 
		
		isComment = 1 #Math.floor(Math.random() * 2)
		
		if isComment
			commentBox = Titanium.UI.createView
				left: 63,
				top: 70,		
				width: 200,
				height: 33,
				backgroundImage:'../images/UI/commentBox.png'
			
			
			comment = Titanium.UI.createLabel
				left: 12,
				top: 6,
				width: 192,
				height: 21,
				color: '#4c4c4c'
				font: {fontFamily: 'Helvetica', fontSize: 12},
			
			comment.text = report.comment
			commentBox.add comment	
			row.add commentBox 
			
		
		if !isComment
			row.height -= 33
		
		
		color = if Number report.day_first then report.color_id else 0
		
		ribon = Titanium.UI.createView
			right: -10,
			top: 5,
			width: 69,
			height: 38,
			backgroundImage:'../images/UI/ribon'+color+'.png'
		
		
		dayCnt = Titanium.UI.createLabel
			left: 20,
			top: 6,
			width: 100,
			height: 21,
			text: '4days',
			color: '#4c4c4c'
			font: {fontFamily: 'Helvetica', fontSize: 12},
		
		ribon.add dayCnt 
		
		row.add ribon
		
		return row
	
	
	tt.UI.createLikeButton = () ->
		button = Titanium.UI.createButton
			right:5
			bottom: 5,
			width: 28
			height: 28,
			font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
			color: '#324f85'
			backgroundImage: '../images/button/like_bg.png'
			clickName:'likebutton'

		like_star = Titanium.UI.createView
			left: 4.5,
			top: 4.5,
			width: 19,
			height: 19,
			backgroundImage: '../images/star/like.png'
			clickName:'star'
		button.add like_star 
		
		like_cnt = Titanium.UI.createLabel
			left: 29.5,
			top: 4.5,
			width: 19,
			height: 19,
			text:"0"
			color: '#b3b3b3'
		
		button.add like_cnt
		return button
	

	tt.module.switchLikeFlag = (pushFlag, isLike, responseFlg) ->
		if responseFlg
			if responseFlg == tt.Stat.ISLIKE
				isLike = true
			else
				isLike = false
		else if !pushFlag and isLike
			isLike = true
		else if pushFlag and !isLike
			isLike = true
		else if pushFlag and isLike
			isLike = false
		
 		return isLike
	
	
	tt.UI.createListViewRow = (report, pushLikeButton, responseFlg) ->

		isLike = tt.module.switchLikeFlag pushLikeButton, report.isLike, responseFlg
		
		report.isLike = isLike
		
		#if push likeButton, like count number need to be changed
		if pushLikeButton
			if isLike
				report.likeCount = Number(report.likeCount)+1
			else
				report.likeCount = Number(report.likeCount)-1
		
		#create row
		row = tt.UI.createRowContent(report)
		#create like button
		button = tt.UI.createLikeButton()
		
		likeStar = button.children[0]
		likeCnt = button.children[1]
		likeCnt.setText(Number(report.likeCount))
		#if you like or not
		#	already liked this row
		if isLike  	# check you already liked or not
			info 'already liked'
			button.width = 53
			button.backgroundImage = '../images/button/like_bg_on.png'
			likeStar.backgroundImage = '../images/star/like_on.png'
			likeCnt.setColor 'e6e6e6'		
		#if timelime show the row liked my otherr people
		#if you caneled your like of this row
		else if Number likeCnt.text
			info 'has like'
			button.width = 53
			button.backgroundImage = '../images/button/like_bg.png'
			likeStar.backgroundImage = '../images/star/like.png'
			likeCnt.setColor '#b3b3b3'
		#no one like this row
		else 
			info 'no like'	
			likeCnt.setVisible false
			button.width = 28
			button.backgroundImage = '../images/button/like_bg.png'
			likeStar.backgroundImage = '../images/star/like.png'
			
			
			
		row.add button
		return	row
			
			#---------------------------------------
			# ver1
			#---------------------------------------
						# icon = Titanium.UI.createImageView
						# 	left: 10,
						# 	top: 5,
						# 	width: 22,
						# 	height: 22
						# 	
						# icon.image = if report.picture_url then report.picture_url else '../images/' + Const.DEFALT.USER
						# 
						# row.add icon 
						# 
						# name = Titanium.UI.createLabel
						# 	left: 40,
						# 	top: 6,
						# 	width: 100,
						# 	height: 21,
						# 	text: 'Label',
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 	color: '#4c4c4c'
						# 
						# row.add name 
						# 
						# starText = Titanium.UI.createLabel
						# 	left: 270,
						# 	top: 70,
						# 	width: 40,
						# 	height: 21,
						# 	text: 'get !!',
						# 	color: '#4c4c4c'
						# 
						# row.add starText 
						# 
						# message = Titanium.UI.createLabel
						# 	left: 40,
						# 	top: 35,
						# 	width: 200,
						# 	height: 21,
						# 	text: '- min learned & get -- Pts',
						# 	color: '#4c4c4c'
						# 
						# row.add message 
						# 
						# commentBox = Titanium.UI.createView
						# 	left: 40,
						# 	top: 64,
						# 	width: 220,
						# 	height: 33,
						# 	backgroundImage:'../images/UI/commentBox.png'
						# 	borderRadius:3		
						# 
						# row.add commentBox 
						# 
						# footer = Titanium.UI.createView
						# 	left: 0,
						# 	top: 106,
						# 	width: 320,
						# 	height: 44,
						# 	backgroundImage:'../images/UI/row_footer.png'
						# 
						# 
						# ribon = Titanium.UI.createView
						# 	left: -3,
						# 	top: 2,
						# 	width: 66,
						# 	height: 40,
						# 	backgroundImage:'../images/UI/ribon0.png'
						# 
						# 
						# dayCnt = Titanium.UI.createLabel
						# 	left: 11,
						# 	top: 6,
						# 	width: 100,
						# 	height: 21,
						# 	text: '5days',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# ribon.add dayCnt 
						# 
						# footer.add ribon 
						# 
						# likeIcon = Titanium.UI.createView
						# 	left: 80,
						# 	top: 7,
						# 	width: 28,
						# 	height: 28,
						# 	backgroundImage:'../images/UI/like.png'
						# 
						# footer.add likeIcon 
						# 
						# commnetIcon = Titanium.UI.createView
						# 	left: 165,
						# 	top: 10,
						# 	width: 28,
						# 	height: 28,
						# 	backgroundImage:'../images/UI/comment.png'
						# 
						# footer.add commnetIcon 
						# 
						# likeNum = Titanium.UI.createLabel
						# 	left: 110,
						# 	top: 11,
						# 	width: 40,
						# 	height: 21,
						# 	text: 'num',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# footer.add likeNum 
						# 
						# commentNum = Titanium.UI.createLabel
						# 	left: 186,
						# 	top: 11,
						# 	width: 40,
						# 	height: 21,
						# 	text: 'get !!',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# 	
						# footer.add commentNum 
						# 
						# row.add footer 
						# 
						# starID = Math.floor(Math.random() * 9)+1
						# star = Titanium.UI.createView
						# 	left: 268,
						# 	top: 23,
						# 	width: 44,
						# 	height: 44,
						# 	backgroundImage:'../images/star/'+starID+'.png'
						# 
						# row.add star 
						# 
			#---------------------------------------
			# ver 2
			#---------------------------------------			# 
						# icon = Titanium.UI.createImageView
						# 	left: 58,
						# 	top: 11,
						# 	width: 22,
						# 	height: 22
						# 
						# 
						# icon.image = if report.picture_url then report.picture_url else '../images/' + Const.DEFALT.USER
						# row.add icon 
						# 
						# name = Titanium.UI.createLabel
						# 	left: 88,
						# 	top: 11,
						# 	width: 100,
						# 	height: 21,
						# 	text: 'Label',
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 	color: '#4c4c4c'
						# 
						# name.text = report.nickname
						# row.add name 
						# 
						# message = Titanium.UI.createLabel
						# 	left: 58,
						# 	top: 34,
						# 	width: 200,
						# 	height: 21,
						# 	text: '- min learned & get -- Pts',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 	
						# row.add message 
						# 
						# 
						# footer = Titanium.UI.createView
						# 	left: 0,
						# 	top: 99,
						# 	width: 320,
						# 	height: 33,
						# 	backgroundImage:'../images/UI/row_footer.png'
						# 
						# likeIcon = Titanium.UI.createView
						# 	left: 5,
						# 	top: 3,
						# 	width: 28,
						# 	height: 28,
						# 	backgroundImage:'../images/UI/like.png'
						# 
						# footer.add likeIcon 
						# 
						# commnetIcon = Titanium.UI.createView
						# 	left: 89,
						# 	top: 5,
						# 	width: 28,
						# 	height: 28,
						# 	backgroundImage:'../images/UI/comment.png'
						# 
						# footer.add commnetIcon 
						# 
						# likeNum = Titanium.UI.createLabel
						# 	left: 41,
						# 	top: 7,
						# 	width: 40,
						# 	height: 21,
						# 	text: '1',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# footer.add likeNum 
						# 
						# commentNum = Titanium.UI.createLabel
						# 	left: 125,
						# 	top: 7,
						# 	width: 40,
						# 	height: 21,
						# 	text: '3',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# footer.add commentNum 
						# 
						# row.add footer 
						# 
						# if Number report.day_first
						# 	
						# 	star = Titanium.UI.createView
						# 		left: 266,
						# 		top: 15,
						# 		width: 44,
						# 		height: 44,
						# 		backgroundImage:'../images/star/' + report.color_id + '.png'
						# 	
						# 	row.add star 
						# 	
						# 	starText = Titanium.UI.createLabel
						# 		left: 268,
						# 		top: 70,
						# 		width: 40,
						# 		height: 21,
						# 		text: 'get !!',
						# 		color: '#4c4c4c'
						# 	
						# 	# row.add starText 
						# 	
						# isComment = Math.floor(Math.random() * 2)
						# 
						# if isComment
						# 	commentBox = Titanium.UI.createView
						# 		left: 58,
						# 		top: 58,
						# 		
						# 		width: 200,
						# 		height: 33,
						# 		backgroundImage:'../images/UI/commentBox.png'
						# 	
						# 	
						# 	comment = Titanium.UI.createLabel
						# 		left: 12,
						# 		top: 6,
						# 		width: 192,
						# 		height: 21,
						# 		color: '#4c4c4c'
						# 		font: {fontFamily: 'Helvetica', fontSize: 12},
						# 	
						# 	comment.text = report.comment
						# 	commentBox.add comment	
						# 	row.add commentBox 
						# 	
						# 
						# if !Number(report.day_first) and !isComment
						# 	row.height -= 33
						# 	footer.top -= 33
						# 	
						# 
						# ribon = Titanium.UI.createView
						# 	left: -5,
						# 	top: 6,
						# 	width: 60,
						# 	height: 33,
						# 	backgroundImage:'../images/UI/ribon'+report.day_first+'.png'
						# 
						# dayCnt = Titanium.UI.createLabel
						# 	left: 11,
						# 	top: 6,
						# 	width: 100,
						# 	height: 21,
						# 	text: '4days',
						# 	color: '#4c4c4c'
						# 	font: {fontFamily: 'Helvetica', fontSize: 12},
						# 
						# ribon.add dayCnt 
						# 
						# row.add ribon 

	
	
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
		switch e.source.clickName
			when 'star'
				info_obj e.source.clickName
				
			when 'likebutton'
					tt.SelectedIndex = e.index
					tt.SelectedRow = e.rowData.report
					pushLikeButton = true
					row = tt.UI.createListViewRow(e.rowData.report, pushLikeButton)
					tt.UI.tableView.updateRow e.index, row
					
					info '#################'
					info_obj row.report
					
					unDo = if e.rowData.report.isLike then true else false
					
					
					tt.module.execLike e.rowData.report.report_id, Ti.App.user_id, unDo
					
			when 'icon'
				info 'icon ckicked'

			else
				info 'window open'
				# Ti.App.Selected_pjt_id_timeline = e.rowData.report.pjt_id
				# alert 'window open:'+JSON.stringify e
				$.currentTab.open tt.UI.createUserHomeView e.rowData.report.user_id ,{animated:true}

		return
	
	
				
	return
	



