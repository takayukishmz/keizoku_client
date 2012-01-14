tt = {}
tt.UI = {}
tt.module = {}
tt.param = {}

Titanium.include('Common_module.js');

do->
	tt.module.eventSetter = (e) ->
		info 'eventSetter'
		info e.source.clickName
		goWindow;
		switch e.source.clickName
			when 'gocreate'
				goWindow = Ti.UI.createWindow 
					title:'Create New' 
					backgroundColor:'#fff'
					url:'../controller/Start.js'
			when 'gojoin'
				goWindow = Ti.UI.createWindow 
					title:'Select Project' 
					backgroundColor:'#fff'
					url:'../controller/CategoryList.js'
			when 'goapp'
				goWindow = Ti.UI.createWindow 
					title:'select App' 
					backgroundColor:'#fff'
					url:'../controller/SelectApp.js'
			else
				info 'else'
				return
		
		Ti.App.nav.open goWindow,{animated:true}
		return
	
	return