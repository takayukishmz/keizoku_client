tt = {}
tt.UI = {}
tt.module = {}
tt.param = {}

Titanium.include('Common_module.js');

do ->
	tt.UI.execCreateNewProject = () ->
		# validate input
 		# info_obj time
		info term.labels[term.index]
		info time.labels[time.index]
		
		if tt.validateText(title.value,0,20,'not_null')
			info 'OK / title validated'
		else 
			alert 'invalid title text'
		
		if !Ti.App.Category_flg or !category.text
			alert 'select category'
		
		
		# set param
		params  =
			user_id:Ti.App.user_id
			pjt_name:title.value
			pjt_info:intro.value
			category:category.text
		
		#call API
		Ti.API.info 'start exec button'
		API.callAPI 'GET','createNewProject',params, (json) ->
			if json.join_success and json.new_success
				alert 'success'
				rootWindow.close()
				return
			else
				alert 'false'
				return
		return
	
	tt.module.rowEventController = (e) ->
		info 'tt.module.rowEventController start'
		info JSON.stringify e	
		newWindow = Ti.UI.createWindow 
			title:'Select Category' 
			backgroundColor:'#fff'
			url:'../controller/SelectCategory.js'
			
		# newWin{dow.open(transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT)
		Ti.App.nav.open newWindow,{animated:true}
		# Titanium.UI.currentTab.open newWindow
		return
	
	
				
	return
	
	
	return


