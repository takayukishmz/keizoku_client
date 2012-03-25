BaseListView 	= require('ui/common/BaseListView').BaseListView

class Notice extends BaseListView
	
	TYPE : 
		SHARE:1
		SUPPORT:2
		LIKE:3
		COMMENT:4
		
	constructor : () ->
		@apiURL = 'getNotice'
		@apiParams = { user_id:Ti.App.user_id }	
		super {title:'Notice'}
		return @win
		
	createListView : (notice) =>
		log 'createListView'
		section = Ti.UI.createTableViewSection()
		
		row = Titanium.UI.createTableViewRow @styles.row
		icon = Ti.UI.createImageView @styles.icon
		message = Titanium.UI.createLabel @styles.title	
		#debug
		row.notice = notice
		icon.image = notice.picture_url
		
		info '-------------------NOTICE TYPE'+ notice.type+'------------------'
		switch notice.type
			when @TYPE.SHARE
				message.text = setTT('NOTICE_SHARE', [notice.nickname, notice.point])
				message.clickName = 'share'
				row.clickName = 'share'
			when @TYPE.SUPPORT
				message.text = setTT('NOTICE_SUPPORT', [notice.nickname])
				message.clickName = 'support'
				row.clickName = 'support'
			when @TYPE.LIKE
				message.text = setTT('NOTICE_LIKE', [notice.nickname])
				message.clickName = 'like'
				row.clickName = 'like'
			when @TYPE.COMMENT
				message.text = 'like your puroject:'+notice.pjt_name
		
		row.add icon
		row.add message
		
		section.add row
		
		return section
	
	setEvent: () =>
		@tableview.addEventListener 'click',(e) =>
			info JSON.stringify e
			info 'table event'
			switch e.source.clickName
				when 'share'
					info 'share'
				when 'like'
					info 'like'
				when 'support'
					info 'support'
					$.tabs.currentTab.open $.Util.createUserHomeView e.rowData.notice.user_id ,{animated:true}
				else
					info 'else'
			return
	createDetailWindow : () ->
		info 'createDetailWindow'

	


exports.Notice = Notice
