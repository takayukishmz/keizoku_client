BaseListView 	= require('ui/common/BaseListView').BaseListView

class Notice extends BaseListView
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
		
		section.add row
		
		return section
	
	setEvent: () =>
		@tableview.addEventListener 'click',(e) =>
			info JSON.stringify e
			info 'table event'
			switch e.source.clickName
				when 'share'
					info 'share'
				when 'support'
					info 'support'
					$.tabs.currentTab.open $.Util.createUserHomeView e.rowData.notice.user_id ,{animated:true}
				else
					info 'else'
			return



exports.Notice = Notice
