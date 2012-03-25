class LikeButton
	
	Stat : 
		ISLIKE:'isLike'
		NOLIKE:'noLike'	
	
	constructor: () ->
		info 'LikeButton init'
		@button = Titanium.UI.createButton
			right:5
			bottom: 5
			width: 28
			height: 28
			font: {fontFamily: 'Helvetica-Bold', fontSize: 15}
			color: '#324f85'
			backgroundImage: 'images/button/like_bg.png'
			clickName:'likebutton'
		
		@likeStar = Titanium.UI.createView
			left: 7
			top: 7
			width: 14
			height: 14
			backgroundImage: 'images/star/like.png'
			clickName:'star'
		
		@button.add @likeStar
		
		@likeText = Titanium.UI.createLabel
			left: 23,
			top: 0,
			width: 30,
			height: 28,
			text:"いいね!"
			color: '#b3b3b3'
			# textAlign:'center'
			font: {fontFamily: 'Helvetica-Bold', fontSize: 8}
					
		@button.add @likeText

		
	
	switchView:(isLike)=>
		info '--------------------switchView--------------------'
		info isLike
		info @likeText.text
		#if you like or not
		#	already liked this row
		if isLike  	# check you already liked or not
			info 'already liked'
			@button.width = 53
			@button.backgroundImage = 'images/button/like_bg_on.png'
			@likeStar.backgroundImage = 'images/star/like_on.png'
			@likeText.setColor 'e6e6e6'		
		#if timelime show the row liked my otherr people
		#if you caneled your like of this row
		else if Number @likeText.text
			info 'has like'
			@button.width = 53
			@button.backgroundImage = 'images/button/like_bg.png'
			@likeStar.backgroundImage = 'images/star/like.png'
			@likeText.setColor '#b3b3b3'
		#no one like this row
		else 
			info 'no like'	
			@likeText.setVisible false
			@button.width   = 28
			@likeStar.left   = 5
			@likeStar.top    = 5
			@likeStar.width  = 18
			@likeStar.height = 18
			
			@button.backgroundImage = 'images/button/like_bg.png'
			@likeStar.backgroundImage = 'images/star/like.png'
		return
	
	calcLikeFlag : (pushFlag, isLike, responseFlg)->
		info '--------------------execLike--------------------'
		info pushFlag
		info isLike
		info responseFlg
		
		if responseFlg
			if responseFlg == @Stat.ISLIKE
				isLike = true
			else
				isLike = false
		else if !pushFlag and isLike
			isLike = true
		else if pushFlag and !isLike
			isLike = true
		else if pushFlag and isLike
			isLike = false
		
		return isLike
	
	setCount : (count) ->
		# @likeCnt.text = count#'いいね!'#{}"like\n"+count
		return 

exports.LikeButton = LikeButton