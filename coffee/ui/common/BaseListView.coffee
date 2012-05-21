BaseWindow 	= require('ui/common/BaseWindow').BaseWindow
#
# BaseLisView
# TODO:
#	1.set apiName
#	2.set @apiParams
row_height = Const.MARGIN*2+Const.ICON
 
class BaseListView extends BaseWindow
	
	constructor : (@windowProperty) ->	
		#set layout
		@tableview = Titanium.UI.createTableView(
			separatorColor:'#000'
			backgroundColor:'transparent'
			)
		super @windowProperty
		
		#loadList
		@loadListView()		
		
		#add
		@win.add @tableview
		
	setView : () ->
	setEvent : () ->
	setButton: () ->
	
	loadListView : (user_id) =>
		info @apiURL
		if !@apiURL
			throw new Error('set apiURL')
			
		log 'BaseListView', @apiParams
		$.API.callAPI 'GET',@apiURL, @apiParams, (json)=>
			lists = json.lists
			data = []
			for i in [0..lists.length-1]
				info i
				data.push @createListView lists[i]
			
			@tableview.data = data
			return
			
		return
	
	
	createListView : (report) =>
		throw new Error('overRide createListView')
			
	
	
	styles :
		row:
			# hasChild:true
			height:row_height
			backgroundImage:Const.BACKGROUND
		view:
			height:row_height
			width:Const.WIDTH
			top:0
			borderRadius:0
		message:
			color:Const.FONTCOLOR
			font:{fontSize:12,fontFamily:'Arial'}
			left:Const.MARGIN*2+Const.ICON
			top:Const.MARGIN
			height:Const.ICON
			width:'auto'
			clickName:'message'
			textAlign:'left'
		icon:
			backgroundImage:'images/user.png'
			top:Const.MARGIN
			left:Const.MARGIN
			width:Const.ICON
			height:Const.ICON
			borderRadius:3
		title:
			font:{fontSize:12,fontFamily:'Arial'}
			left:Const.MARGIN*2+Const.ICON
			top:Const.MARGIN
			height:Const.ICON
			width:'auto'
			clickName:'text'
			textAlign:'left'
			color:Const.FONTCOLOR
	

exports.BaseListView = BaseListView

