tt = {}
tt.UI = {}
tt.param = {}

Titanium.include('../Common_module.js');
Titanium.include('../../lib/Facebook.js');
Titanium.include ('../../lib/Twitter.js');

do ->
	tt.execCountUp = () ->
		info  'tt/execCountUp'
		# validate input
		if tt.validateText(text.value,0,141,'not_null')
			info  'valid textx value'
		else 
			info 'invalid input'
			text.backgroundColor = '#ffcccc'
			return
		# set param
		params  =
			user_id:Ti.App.user_id
			comment:text.value
			time:10
			challenge_flg:0
			
		#call API
		API.callAPI 'GET','countUpResult',params, (json) ->
			info 'countUpResult json:'+JSON.stringify json	
			point = json.point
			if json.success
				info 'success'
				newWindow = Ti.UI.createWindow  
					title:'congratulations!' 
					backgroundColor:'#fff'
					url:'../../controller/checkin/GetPoint.js'
					data:point
					
				Ti.App.nav.open newWindow,{animated:true}
				return
				
			else
				info 'false'
				return
		return
		
	tt.UI.createGetPointWindow = () ->
		Ti.API.info "createGetPointWindow"

		return newWindow
	
	tt.UI.setLeftButton () ->
		info 'SelectNewWay.js close'
		# win.close()
		rootWindow.close()
		return
	
	return


