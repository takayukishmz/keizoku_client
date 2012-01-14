win = Titanium.UI.currentWindow

Titanium.include '../Util.js'

data = []
data[0] = Ti.UI.createTableViewRow {title:'new',header:'all'}
data[3] = Ti.UI.createTableViewRow {title:'my post'}
data[4] = Ti.UI.createTableViewRow {title:'supporting'}
data[5] = Ti.UI.createTableViewRow {title:'language',header:'category'}
data[6] = Ti.UI.createTableViewRow {title:'study'}
data[7] = Ti.UI.createTableViewRow {title:'fitness'}
data[8] = Ti.UI.createTableViewRow {title:'sport'}
data[9] = Ti.UI.createTableViewRow {title:'lifestyle'}
data[10] = Ti.UI.createTableViewRow {title:'buisiness'}
data[11] = Ti.UI.createTableViewRow {title:'entertaiment'}



tableview = Titanium.UI.createTableView 
	data:data

win.add tableview


### listener #################################################################

tableview.addEventListener 'click', (e) ->

	info 'row object:'+JSON.stringify e
	t3 = Titanium.UI.create2DMatrix()
	t3 = t3.scale 0 
	
	if e.index == 0
		info 'select new'
		Ti.App.timeline_type = ''
	else
		Ti.App.timeline_type = e.rowData.title
	
	#flgs	
	Ti.App.selectDialog_flg = false
	Ti.App.update_tl = true
	
	win.close {transform:t3,duration:300}
	return