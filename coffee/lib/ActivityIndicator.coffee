actInd = Titanium.UI.createActivityIndicator
	height:50,
	style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	font:{fontFamily:'Helvetica Neue', fontSize:15,fontWeight:'bold'}
	color:'#999'
	# message:'Loading...'
	width:50

actInd.show()

messageWin = Titanium.UI.createWindow
	height:50
	width:50
	top:50
	borderRadius:10
	touchEnabled:false
	orientationModes : [Titanium.UI.PORTRAIT,Titanium.UI.UPSIDE_PORTRAIT,Titanium.UI.LANDSCAPE_LEFT,Titanium.UI.LANDSCAPE_RIGHT]

messageView = Titanium.UI.createView
	id:'messageview',
	height:50,
	width:50,
	borderRadius:10,
	# backgroundColor:'#fff',
	opacity:0.7,
	touchEnabled:false


messageWin.add messageView
messageWin.add actInd


indicator =
	status:true
	show:() ->
		if !@status 
			return
		
		actInd.show()
		messageWin.open()
		return
	hide:() ->
		if !@status 
			return
		
		actInd.hide()
		messageWin.close()
		return
	setStatus:(status) ->
		@status = status

	
	

	