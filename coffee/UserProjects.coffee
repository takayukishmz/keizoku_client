#Titanium.include 'CheckinView.js'
UserProjects = {}
UserProjects = 
	createListView:(project) ->		
		Ti.API.info JSON.stringify project
		row = Titanium.UI.createTableViewRow()  
				#row.classname = 'tweet' 
		row.height = 100   		    
	
		row.add Titanium.UI.createLabel  
				text:'1'
				top:8 	
				left: 64 	
				height:16
	
		row.add Titanium.UI.createLabel  
				text: project.pjt_info 
				top: 32
				left: 64
				width:'256'
				height:'auto'
	
		row.add Titanium.UI.createImageView  
				image: '../images/user.png' 
				top: 8
				left: 8 	
				width:'48' 	
				height:'48'
	
		row.project = project 
	
		#それぞれのrowにクリック時のイベントを追加
		row.addEventListener 'click',(e)->   
			Ti.API.info 'click row'  		
			thisProject = e.rowData.project
			Titanium.UI.currentTab.open CheckinVew.createView thisProject 
	
		Ti.API.info 'click row'  				
		return row
