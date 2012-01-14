win = Titanium.UI.currentWindow

# apns = () ->
#   # var pref = require('preferences').preferences;
#   Titanium.Network.registerForPushNotifications
#     types: [
#         Titanium.Network.NOTIFICATION_TYPE_BADGE,
#         Titanium.Network.NOTIFICATION_TYPE_ALERT
#     ]
#     success:(e)->
#         alert 'apns'
#         deviceToken = e.deviceToken
#         alert("Push notification device token is: "+deviceToken)
#         alert("Push notification types: "+Titanium.Network.remoteNotificationTypes)
#         alert("Push notification enabled: "+Titanium.Network.remoteNotificationsEnabled)
#         http = Ti.Network.createHTTPClient()
#         http.onload = () ->        
#           # do nothing.
#         http.open 'GET', "http://192.168.0.3:5000/registerDeviceToken" + "?deviceuid=" + escape(Titanium.Platform.id)+"&devicetoken="+escape(e.deviceToken)
#         http.send()
#         return
#         
#     error:(e)->
#         alert("Error during registration: "+e.error)
#         return
#     callback:(e)->
#         # called when a push notification is received.
#       Titanium.Media.vibrate()
#       data = JSON.parse(e.data)
#       badge = data.badge;
#       if badge > 0 
#         Titanium.UI.iPhone.appBadge = badge
#       message = data.message
#       if message != '' 
#         my_alert = Ti.UI.createAlertDialog({title:'', message:message})
#         my_alert.show()
#         return
#   return


# platform = Ti.Platform.name
# if platform != 'android'
#   apns()


Titanium.include '../Util.js'  
Titanium.include '../lib/ServerAPI.js'  
Titanium.include '../modules/UserHome_module.js'
Titanium.include '../styles/UserHome_style.js'  

# win.backgroundColor = '#f89924'
win.backgroundColor = S.backgroundColor
# win.backgroundImage = 'images/gray_wave.png'
Ti.App.UserHomeWindow = win 


##############################################################################
Ti.App.update_flg = true 
Ti.App.CheckIn_flg = false 
Ti.App.CheckInComplete_flg = false 
Ti.App.bar_flg = true
Ti.App.UserHomeWindow = win 

view = Ti.UI.createView styles.view  
photo = Ti.UI.createView styles.photo  
view.add photo

user = Ti.UI.createLabel styles.user  
view.filter = user.text 
view.add user  

point = Ti.UI.createView styles.point  
point_cnt = Ti.UI.createLabel styles.point_cnt  
point.add point_cnt  
view.add point  

day_total = Ti.UI.createView styles.day_total  
day_cnt_total = Ti.UI.createLabel styles.day_cnt_total  
day_total.add day_cnt_total  
view.add day_total  

support = Ti.UI.createView styles.support  
support_cnt = Ti.UI.createLabel styles.support_cnt  
support.add support_cnt  
view.add support  

# info 'bonusbarbar'  
# info JSON.stringify styles.bonusbarbar   

bonus_box = Ti.UI.createView styles.bonus_box
bonusbar = Ti.UI.createView styles.bonusbar
bonus_box.add bonusbar
view.add bonus_box

win.add view 
 
listview = Ti.UI.createView styles.listview
listview.add tt.UI.tableView
win.add listview



hoge = 0 
# tt.UI.setRefreshButton () ->
  # limit += 30 
  # tt.UI.loadListView()  
  # tt.UI.getUserData Ti.App.user_id  

tt.UI.createNewProjectButton()
tt.UI.getUserData Ti.App.user_id     
### call API #################################################################
speed = 15 
limit = Number support_cnt.text

barMove = () ->
	rest 
	if  !Ti.App.bar_flg
		info 'boxMove return'
		return 
		
	# info 'limit:'+limit+' bonusbar.width'+bonusbar.width
	
	rest = limit - bonusbar.width
	bonusbar.width += rest / speed
	if  bonusbar.width > 300   
		limit = 1
		bonusbar.width = 0
	
	setTimeout barMove, 8  
  
# barMove()
### listener #################################################################
win.addEventListener 'focus', (e)  ->
	Ti.API.info 'userHome focus'  
	if  Ti.App.update_flg   
		Ti.API.info 'userHome update flg'  
		Ti.App.update_flg = false 
		tt.UI.getUserData Ti.App.user_id  
		tt.UI.loadListView()   
		
		info limit
		Ti.App.bar_flg
		barMove()
		
   
win.addEventListener 'blur', (e)  ->
  Ti.API.info 'userHome focus'  
  if  Ti.App.bar_flg   
    Ti.App.bar_flg = false 

