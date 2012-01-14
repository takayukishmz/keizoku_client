rootWindow = Titanium.UI.currentWindow
win = Ti.UI.createWindow 
	backgroundColor:'#fff'
	title:'checkin'

Titanium.include '../Util.js'
Titanium.include '../modules/CheckIn_module.js'
Titanium.include '../styles/CheckIn_style.js'
	# win = tt.UI.loadView win,styles



### UI #######################################################################
### common ###
data = []
win.add tt.UI.tableView


section_top = Ti.UI.createTableViewSection()
section_middle = Ti.UI.createTableViewSection()
section_bottom = Ti.UI.createTableViewSection()

data.push section_top
data.push section_middle
data.push section_bottom

row_top = Titanium.UI.createTableViewRow styles.row_top
row_middle = Titanium.UI.createTableViewRow styles.row_middle
row_bottom = Titanium.UI.createTableViewRow styles.row_top
row_top.hasChild = true
row_bottom.hasChild = true

section_top.add row_top
section_middle.add row_middle
section_bottom.add row_bottom


### top ###
icon = Titanium.UI.createImageView styles.icon

owner = Titanium.UI.createLabel styles.owner
owner.text = 'user name'

counter = Titanium.UI.createView styles.counter
counter_text = Titanium.UI.createLabel styles.counter_text 
# counter_text.text =  Ti.App.Selected_pjt.count
member = Titanium.UI.createView styles.member
member_text = Titanium.UI.createLabel styles.member_text 

checkin = Ti.UI.createView styles.checkin
checkin_text = Ti.UI.createLabel styles.checkin_text
checkin.add checkin_text

row_top.add icon
row_top.add owner
row_top.add counter
row_top.add member
row_top.add checkin
### top  end ###
### middle ###

# check_cnt = 7
star_num  = 7
for i in [0..star_num-1]
	info 'star:'+i
	star = Titanium.UI.createImageView styles.star
	# star.right = 0
	star.left = S.MARGIN+(S.ICON)*i
	row_middle.add star

header = Ti.UI.createView styles.header
header_text= Ti.UI.createLabel styles.header_text
header.add header_text

data[1].headerView = header
### bottom ###
header = Ti.UI.createView styles.header
header_text= Ti.UI.createLabel styles.header_text
header_text.text = 'supporters'
header.add header_text

data[2].headerView = header
### setlist　###
tt.UI.tableView.data = data


Ti.App.nav = Ti.UI.iPhone.createNavigationGroup 
	window:win
	
rootWindow.add Ti.App.nav


### end ###

### user view ###
# userview = Titanium.UI.createView styles.userview
# 
# 
# mycount = Ti.UI.createView styles.mycount
# mycount_text = Ti.UI.createLabel styles.mycount_text
# mycount_text.text = Ti.App.Selected_pjt.count+' days'
# mycount.add mycount_text
# 
# # user_icon = Titanium.UI.createImageView styles.user_icon
# user = Titanium.UI.createLabel styles.user
# user.text = 'your status:'
# 
# statusbar = Ti.UI.createView styles.statusbar

# userview.add mycount
# userview.add user
# userview.add statusbar
# 
# 
# win.add userview

### eventListener ############################################################

checkin.addEventListener 'click',(e)->   
	Ti.API.info 'click checkin'  		 
	# Titanium.UI.currentTab.open tt.UI.createCheckInCompleteView()
	tt.UI.createNewProjectView()
	return

win.addEventListener 'focus',(e)->   
	Ti.API.info 'checkin focus'

	return


### call API #################################################################
