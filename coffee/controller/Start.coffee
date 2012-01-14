win = Titanium.UI.currentWindow

Titanium.include '../Util.js'
Titanium.include '../lib/ServerAPI.js'
Titanium.include '../modules/Start_module.js'
Titanium.include '../styles/Start_style.js'

Ti.App.Category_flg = false
### UI #######################################################################
data = []
###################################
#ttitle
###################################
row_title =  Ti.UI.createTableViewRow {height:40}
row_title.header = 'project name'
title =Titanium.UI.createTextField styles.row
title.hintText = ''

###################################
#intro
###################################
row_intro =  Ti.UI.createTableViewRow {height:40}
row_intro.header = 'introduce'
row_intro.height = 80
intro = Titanium.UI.createTextField styles.row
intro.hintText = 'introduction of your project'
###################################
#category
###################################
row_category =  Ti.UI.createTableViewRow {height:40}
row_category.hasChild =true
category =Titanium.UI.createLabel styles.row
category.text = 'choose category'

#deal with window.focus bug 
Ti.App.category = category
###################################
#social
###################################
row_tw =  Ti.UI.createTableViewRow {height:40}
row_tw.header = 'social'
tw_box = Titanium.UI.createLabel styles.row
tw_box.value = 'twitter'

tw_switch =  Titanium.UI.createSwitch 
	value:false
	top:5
	right:5

row_time =  Ti.UI.createTableViewRow 
	height:25
	width:300

###################################
#time
###################################

time = Titanium.UI.createTabbedBar
	labels:TEXT.TIME_ARRAY
	backgroundColor:'#336699'
	top:0
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR
	height:25
	width:300
	index:0

row_time.add time
row_time.header = 'time'

row_term =  Ti.UI.createTableViewRow 
	height:25
	width:300
###################################
#term
###################################
term = Titanium.UI.createTabbedBar
	labels:TEXT.TERM_ARRAY
	backgroundColor:'#336699'
	top:0
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR
	height:25
	width:300
	index:0


row_term.add term
row_term.header = 'term'



row_title.add title
row_intro.add intro
row_tw.add tw_switch
row_tw.add tw_box
row_category.add Ti.App.category

data.push row_title
data.push row_category
data.push row_time
data.push row_term
data.push row_intro
# data.push row_tw


# row_submit = Ti.UI.createTableViewRow {height:40}
# b3 = Titanium.UI.createLabel styles.submit
# row_submit.header = ''
# row_submit.add b3
# data.push row_submit

tableView = Titanium.UI.createTableView {
	data:data
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
}
win.add tableView

### modules ##################################################################
# right button
tt.UI.setRightButton(tt.UI.execCreateNewProject)




category.addEventListener 'click',(e) ->
	info JSON.stringify e
	info 'tap category select'
	tt.module.rowEventController()
	return

	
win.addEventListener 'focus', () ->
	info 'focus start.js'

