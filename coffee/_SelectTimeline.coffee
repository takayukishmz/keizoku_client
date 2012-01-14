win = Titanium.UI.currentWindow
picker = Ti.UI.createPicker {bottom:0}


data = [];
category = ['global','learn','fitness','life']

# for i in [0..category.length-1]
	
row=Ti.UI.createPickerRow 
		title:category[0]
		custom_item:category[0]

row.addEventListener 'click', (e) ->
		info 'row clicked. e.title'+e.title
		win.close()
		return
	
# data.push row
	


picker.selectionIndicator = true;

picker.add row

win.add picker

picker.setSelectedRow 0,1,true

# 
# picker.addEventListener 'change',(e) ->
# 	Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.custom_item);

	# win.close()


picker.setSelectedRow(0,1,false);

