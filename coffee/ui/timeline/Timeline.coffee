
### const ####################################################################
Ti.App.timeline_type = '';
Ti.App.update_tl = true
### UI #######################################################################
LikeButton 	= require('ui/LikeButton').LikeButton
styles 		= require('styles/Timeline_style').styles
BaseComponent 		= require('ui/common/BaseComponent').BaseComponent


class Timeline extends BaseComponent
	Stat : 
		ISLIKE:'isLike'
		NOLIKE:'noLike'	
	
	constructor : ()->
			@SelectedIndex = 0
			@SelectedRow = ''
			@rowData = []
			
			super {title:'timeline'}

	setView : () =>
		@view.backgroundImage = Const.BACKGROUND
		@tableview = Titanium.UI.createTableView
			backgroundColor:'transparent'
			separatorColor:'#000'
			
		@view.add @tableview
	
	setEvent : () =>
		### call API #########################################################
		@view.addEventListener 'focus',() =>
			info 'focus - Timeline'
			if Ti.App.update_tl
				Ti.App.update_tl = false
				@loadTimeline()
				return
		### eventListener ####################################################
		@tableview.addEventListener 'click',(e) =>
			info JSON.stringify e
			info 'timeline -- table event'
			@rowEventController e
			return
			
		lastDistance = 0
		@view.addEventListener 'scroll', (e) =>
			offset = e.contentOffset.y
			height = e.size.height
			total = offset + height
			theEnd = e.contentSize.height
			distance = theEnd - total
			# 
			# info offset
			# info height
			# info total
			# info_obj e
			
			if (distance < lastDistance)
				info_obj e
			return
			
	loadTimeline : ()=>
		params = 
			# category:Ti.App.timeline_type
			user_id:Ti.App.user_id
			top_report_id:100000000000
			top_date:100000000000
			bottom_report_id:1
			bottom_date:1
			
		$.API.callAPI 'GET','getTimeline',params, (json) =>
			Ti.App.timeline_type = ''
			
			info 'get api response'
			reports = json.lists
			data = []
			isLike = false
			if reports[0]
				for i in [0..reports.length-1]
					info 'create row:'+i
					@rowData.push reports[i]
					info 'rowData ' + @rowData.length
					data.push @createListViewRow reports[i], isLike, false
			
			@tableview.data = data
			
			return
		
		return
	
	insertAfter : () ->
		info '#------------------ INSERT AFTER ------------------#'
		params = 
			# category:Ti.App.timeline_type
			user_id:Ti.App.user_id
			top_report_id:100000000000
			top_date:100000000000
			bottom_report_id:1
			bottom_date:1
			
		$.API.callAPI 'GET','getTimeline',params, (json) =>
			Ti.App.timeline_type = ''
			info 'get api response'
			reports = json.lists
			isLike = false
			if reports[0]
				for i in [0..reports.length-1]
					index = @rowData.length
					row = @createListViewRow reports[i], isLike, false
					@tableview.insertRowAfter index-1,row,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN}
			return
			
		return
		
		
	

	execLike : (report_id, user_id, unDo) ->
		info '--------------------execLike--------------------'
		api = if unDo then "cancelLike" else "execLike"
		
		params = 
			user_id:Ti.App.user_id
			report_id:report_id
			notice_user_id : user_id
		
		$.API.callAPI 'GET',api,params, (json) ->			
			if json.success
				info 'message ' + json.message
				switch json.message
					when TEXT.ALREADY_LIKED
						info TEXT.ALREADY_LIKED
						row = @createListViewRow(@SelectedRow, 0 , @Stat.ISLIKE)
						@tableview.updateRow @SelectedIndex, row
					when TEXT.NOT_LIKE_YET
						info TEXT.NOT_LIKE_YET
						row = @createListViewRow(@SelectedRow, 0 , @Stat.NOLIKE)
						@tableview.updateRow @SelectedIndex, row
					else
						info 'OK! no error'
			else
				alert 'server error'
			
			return
		return
	
	
	
	createRowContent : (report)->
		info 'createRowContent'
		#define row
		row = Titanium.UI.createTableViewRow styles.row
		row.report = report
		row.borderColor = '#900'
		# --------------------------------------
		#ver 0
		# --------------------------------------'
		icon = Titanium.UI.createImageView
			left: 5,
			top: 5,
			width: 33,
			height: 33,
			borderRadius:3
		
		icon.image = if report.picture_url then report.picture_url else 'images/' + Const.DEFALT.USER
		row.add icon
	
		
		star_shadow = Titanium.UI.createView
			left: 34,
			top: 0,
			width: 44,
			height: 44,
			backgroundImage: 'images/star/shadow.png'
		
		star = Titanium.UI.createView
			left: 9,
			top: 9,	
			width: 27,
			height: 27,
			# backgroundImage: 'images/star/yellow.png'
		
		starID = if Number report.day_first then report.color_id else 0			
		star.backgroundImage = "images/star/"+starID+".png"
		
		if !starID
			dot = Titanium.UI.createView
				left: 52,
				top: 15,	
				width: 11,
				height: 11,
				backgroundImage:"images/UI/dot.png"
			row.add dot
		
		else
			star_shadow.add star 
			row.add star_shadow			
			
		date = Titanium.UI.createLabel
			left: 125
			bottom:5
			width: 222
			height: 10
			text: '~ min ago',
			textAlign:'left'
			# color:S.FONTCOLOR
			color:"#999"
			font: {fontFamily: 'Helvetica', fontSize: 12}
		
		row.add date 
		date.text = report.date
		
		message = Titanium.UI.createLabel
			color:Const.FONTCOLOR
			left: 86,
			top: 0,
			width: 200,
			height: 44,
			font: {fontFamily: 'Helvetica', fontSize: 12}

		message.text = 'learned '+ report.time + ' min & get ' + report.point + ' pt!'
		row.add message
		 

		
		
		isComment = if report.comment then 1 else 0
		
		if isComment
			commentBox = Titanium.UI.createView
				left: 63,
				top: 70,		
				width: 200,
				height: 33,
				backgroundImage:'images/UI/commentbox.png'
			
			
			comment = Titanium.UI.createLabel
				left: 15,
				top: 4,
				width: 180,
				height: 21,
				color: '#4c4c4c'
				font: {fontFamily: 'Helvetica', fontSize: 12},
			
			comment.text = report.comment
			commentBox.add comment	
			row.add commentBox 
			
		
		if !isComment
			row.height -= 33
		
		colorId = if Number report.day_first then 1 else 3
		
		ribon = Titanium.UI.createView
			right: -10,
			top: 5,
			width: 64,
			height: 32,
			backgroundImage:'images/UI/ribon/'+colorId+'.png'
		
		
		dayCnt = Titanium.UI.createLabel
			left: 12,
			top: 4,
			width: 100,
			height: 24,
			text: '4 days',
			color: '#fff'
			font: {fontFamily: 'Helvetica', fontSize: 12},
		
		ribon.add dayCnt 
		row.add ribon
		
		
		
		
		@likeStar = Titanium.UI.createView
			left:85
			bottom: 5
			width: 15
			height: 15
			backgroundImage: 'images/star/like.png'
			clickName:'star'
		
		row.add @likeStar
		
		@likeCnt = Titanium.UI.createLabel
			left: 105
			bottom: 5
			width: 20
			height: 12
			text:"0"
			color: '#b3b3b3'
			# textAlign:'center'
			font: {fontFamily: 'Helvetica-Bold', fontSize: 10}
		
		row.add @likeCnt
		@likeCnt.text = Number(report.likeCount)
		
		return row
	
	
	createListViewRow : (report, pushLikeButton, responseFlg)=>
		info 'createListViewRow'
		#create like button
		likeButton = new LikeButton()
		isLike = likeButton.calcLikeFlag pushLikeButton, report.isLike, responseFlg		
		report.isLike = isLike
		
		#-------------------------------------#
		#if push likeButton, 
		#  like count number need to be changed
		#-------------------------------------#
		if pushLikeButton
			if isLike
				report.likeCount = Number(report.likeCount)+1
			else
				report.likeCount = Number(report.likeCount)-1
		
		#create row
		#switch view
		likeButton.switchView isLike		
		
		row = @createRowContent(report)
		
		row.add likeButton.button
		return	row
	
	
	rowEventController : (e) =>	
		switch e.source.clickName
			when 'likebutton'
					
					@SelectedIndex = e.index
					@SelectedRow = e.rowData.report
					pushLikeButton = true
					row = @createListViewRow(e.rowData.report, pushLikeButton)
					@tableview.updateRow e.index, row					
					unDo = if e.rowData.report.isLike then true else false
					@execLike e.rowData.report.report_id, e.rowData.report.user_id, unDo
					
			when 'icon'
				info 'icon ckicked'
			
			else
				info 'window open'
				$.tabs.currentTab.open $.Util.createUserHomeView e.rowData.report.user_id ,{animated:true}
	

	
	
exports.Timeline = Timeline