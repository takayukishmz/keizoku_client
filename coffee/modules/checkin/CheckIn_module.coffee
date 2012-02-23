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
		win.setRightNavButton actInd
		actInd.show()

		# Ti.App.nav.open messageWin,{animated:true}
		API.callAPI 'GET','countUpResult',params, (json) ->
			actInd.hide()
			tt.UI.setRightButton(tt.execCountUp)
			if json.success
				point = json.point
				info 'success'
				newWindow = Ti.UI.createWindow 
					title:'congratulations!' 
					backgroundColor:'#fff'
					url:'../../controller/checkin/GetPoint.js'
					data:point
					barColor: Const.BARCOLOR	
				Ti.App.nav.open newWindow,{animated:true}
				return
				
			else
				info 'false'
				return
		return

	return


