# exports.hoge = {
# 	
# 	init:() ->
# 	  alert 'hoge'
# 	  return
# 
# 	
# }

# Titaniumオブジェクトを返すクラスを作るときは、
# メソッド名がTitaniumが定義しているものとかぶらないように注意
# 同名のメソッドを定義した場合、Titaniumが定義したものが優先される

# debug function
log = (obj) -> Titanium.API.log obj

Titanium.UI.setBackgroundColor '#000'

class TabGroup
	constructor: () ->
		@tabGroup = Titanium.UI.createTabGroup()
		return @tabGroup

class Window
	constructor: (@title) ->
		return Titanium.UI.createWindow
			title:@title
			backgroundColor:'#fff'

class Tab
	constructor: (@title, @icon) ->
		@window = new Window @title
		@tab = Titanium.UI.createTab
			icon:@icon
			title:@title
			window:@window
		@createContents()
		return @tab
	createContents: ->
		label = Titanium.UI.createLabel
			color:'#999'
			text:'I am Window on '+@title
			font:
				fontSize:20
				fontFamily:'Helvetica Neue'
			textAlign:'center'
			width:'auto'
		label.addEventListener 'click', ->
			alert 'OK'
			log 'OK'
		@window.add label

tabGroup  = new TabGroup()
tab1 = new Tab 'Tab1', 'KS_nav_ui.png'
tabGroup.addTab tab1
tab2 = new Tab 'Tab2', 'KS_nav_views.png'
tabGroup.addTab tab2

#継承してみる
class ImageTab extends Tab
	constructor: (@title, @icon) ->
		super
		return @tab #必須　Titaniumオブジェクトを返さない作りのほうがいいのかも
	createContents: ->
		images = 
			0:
				name: 'appcelerator'
				image: 'http://gyazo.com/64ee108bc98ab4e6632c2ee183eb0288.png'
			1:
				name: 'Titanium'
				image: 'http://gyazo.com/d2d78ef02588f6c69a53147e06547a38.png'
			2:
				name: 'CoffeeScript'
				image: 'http://gyazo.com/a6cb876b91bcfa8f6580e7c7fd461868.png'
			3:
				name: 'Gyazo'
				image: 'http://gyazo.com/c86f9566d5fd2904b2929ad4b67347c7.png'

		imgs = []
		for own key, value of images
			imgs.push value.image

		@view = Titanium.UI.createCoverFlowView
			images: imgs
			backgroundColor: '#000'

		# 画像選択時のイベント
		#Function binding
		@view.addEventListener 'click', (e) => # => と書くと this を渡せる
			log "image clicked: #{e.index}, selected is #{@view.selected}"
			@window.title = images[e.index].name

		#　フリックなどで選択中の画像が変わったときのイベント
		#Function binding
		@view.addEventListener 'change', (e) =>
			log "image changed: #{e.index}, selected is #{@view.selected}"

		@window.add @view

tab3 = new ImageTab 'CoverFlow', 'KS_nav_views.png'
tabGroup.addTab tab3

tabGroup.open()

# 参照可能
log tab3.view
log tab3.window.title