//一時的に。
var user_id = 1;

(function () { 
	AppLib.UI.UserProjects = function (project) {
		var row = Titanium.UI.createTableViewRow();
				//row.classname = 'tweet';
		row.height = 100;
		row.add(Titanium.UI.createLabel({
				text: project.pjt_name,
				top: 8,	left: 64,	height:'16'
		}));
		row.add(Titanium.UI.createLabel({
				text: project.pjt_info,
				top: 32,	left: 64,	width:'256',	height:'auto'
		}));
		row.add(Titanium.UI.createImageView({
				image: 'images/user.png',
				top: 8,	left: 8,	width:'48',	height:'48'
		}));
		row.add (Ti.UI.createView({
				backgroundColor:'#3DFF00',
				borderRadius:4,
				bottom:8,left:8,width:150,height:30,
				
				clickName:'button'
		}));
		button = Ti.UI.createView({
				bottom:8,right:8,width:150,height:30,
				backgroundColor:'#FFE700',
				borderRadius:4,
				clickName:'button'
		});
		
		row.project = project;

		//それぞれのrowにクリック時のイベントを追加
		button.addEventListener('click', function(e) {
			Ti.API.info('click row');		
			var thisProject = e.rowData.project;
            Titanium.UI.currentTab.open(
                AppLib.UI.createCompleteWindow(thisProject)
            );
    	});
    	row.add(button);
		return row;
	};
	AppLib.UI.createCompleteWindow = function (project) {
		var newWindow = Ti.UI.createWindow({
			title:'~ project',
			backgroundColor:'#fff'
		});
		var view = Titanium.UI.createView({
			top:0,	height:480,
			backgroundColor: '#ccc'
		});		
		view.add(Titanium.UI.createImageView({
			image: 'images/user.png',
			top:8,	left:8,	width:72,	height:72
		}));
		view.add(Titanium.UI.createLabel({
			top:8,	left:88,	right:8,	height:20,
			text:project.pjt_name
		}));
		view.add(Titanium.UI.createView({
			top:36,	left:88,height:44,right:8,
			backgroundColor: '#fff'
		}));
		view.add(Titanium.UI.createLabel({
			top:36,	left:88, right:8,	height:44,
			text: project.result,
			textAlign:'center',
			font:{fontSize:20}
		}));
		var checkin = Ti.UI.createView({
			backgroundColor:'#3DFF00',
			borderRadius:4,
			top:88,left:8,width:300,height:40,
			clickName:'button'
		});
		var checkin_text = Ti.UI.createLabel({
			color:'#222',
			font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
			left:0,
			top:0,
			height:40,
			width:300,
			clickName:'rank',
			text:'check in ',
			textAlign:'center'
		});
		
		checkin.addEventListener('click', function(e) {
			Ti.API.info('click checkin');
			AppLib.API.CountUpResult(user_id,project.pjt_id);
					
            // Titanium.UI.currentTab.open(
                // AppLib.UI.createCompleteWindow(project);
            // );
    	});

		checkin.add(checkin_text);
		view.add(checkin);
		newWindow.add(view);
		
		
		
		
		//dialogの表示
		if(Titanium.Platform.osname === 'android') {
			var intent = Titanium.Android.createIntent ({
				action :Titanium.Android.ACTION_SEND,
				type:"text/plain"
			});
			intent.putExtra(Titanium.Android.EXTRA_text, url);
			Titanium.Android.currentActivity.
			startActivity(Titanium.Andriod.createIntentChooseeeer(intent, "Choose App"));
		}
		else{
			newWindow.rightNavButton = (function () {
				var button = Titanium.UI.createButton({
					//title:選択肢表示
					systemButton: Titanium.UI.iPhone.SystemButton.ACTION
				});
				button.addEventListener('click', function() {
					var dialog = Titanium.UI.createOptionDialog({			
						title:'処理を選択してください',
						options: ["Safari","Twitter for iPhone","E-mail","お気に入り","キャンセル"],
						cancel:4
						});
						dialog.addEventListener('click', function (e){
							if(e.cancel === true) {
								return;
							}
							if(e.index == 0){
								Titanium.Platform.openURL(url);
							}
							else if(e.index == 1) {
								Titanium.Platform.openURL('twitter:' + url);
							}
							else if (e.index === 2) {
								(function() {
									var emailDialog = Titanium.UI.craateEailDialog();
									emailDialog.sugject = 'twitter';
									emailDoalog.messagebody = thisTeet.text + "\n" + url;
									emailDialog.open();
                                });
							}
							else if (e.index === 3 ) {
							AppLib.insertTweet();
							}
						});	
						dialog.show();
				});
				return button;
			})();	
		}		
		return newWindow;	
    };	
})();
