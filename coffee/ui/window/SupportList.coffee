BaseListView 	= require('ui/common/BaseListView').BaseListView

class SupportList extends BaseListView
	
	TYPE:
		SUPPORTER:'getSupporters'
		SUPPORTING:'getSupportings'
	
	constructor: (@user_id, type) ->
		@apiURL = if (type = @TYPE.SUPPORTING ) then  @TYPE.SUPPORTING else @TYPE.SUPPORTER
		
		@apiParams = {user_id:@user_id}
		
		super {title:'RecordList'}
		
		return @win
	
	createListView : (userData)=>
		info_obj userData
		section = Ti.UI.createTableViewSection()
		
		info_obj @styles.row
		row = Titanium.UI.createTableViewRow @styles.row
		row.user = userData
		icon = Ti.UI.createView @styles.icon
		user = Titanium.UI.createLabel @styles.title
		user.text = userData.nickname
		
		row.add icon
		row.add user
		section.add row
		return section
	setEvent : () =>
		@tableview.addEventListener 'click',(e) ->
			info JSON.stringify e
			$.tabs.currentTab.open $.Util.createUserHomeView e.rowData.user.support_user_id ,{animated:true}

	

exports.SupportList = SupportList


