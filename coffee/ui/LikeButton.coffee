class LikeButton
	
	Stat : 
		ISLIKE:'isLike'
		NOLIKE:'noLike'	
	
	constructor: () ->
		info 'LikeButton init'
		@button = Titanium.UI.createButton
			right:5
			bottom: 5,
			width: 28
			height: 28,
			font: {fontFamily: 'Helvetica-Bold', fontSize: 15},
			color: '#324f85'
			backgroundImage: 'images/button/like_bg.png'
			clickName:'likebutton'
		
		@likeStar = Titanium.UI.createView
			left: 4.5,
			top: 4.5,
			width: 19,
			height: 19,
			backgroundImage: 'images/star/like.png'
			clickName:'star'
		@button.add @likeStar
		
		@likeCnt = Titanium.UI.createLabel
			left: 29.5,
			top: 4.5,
			width: 19,
			height: 19,
			text:"0"
			color: '#b3b3b3'
		
		@button.add @likeCnt
		
	
	switchView:(isLike)=>
		info '--------------------switchView--------------------'
		info isLike
		info @likeCnt.text
		#if you like or not
		#	already liked this row
		if isLike  	# check you already liked or not
			info 'already liked'
			@button.width = 53
			@button.backgroundImage = 'images/button/like_bg_on.png'
			@likeStar.backgroundImage = 'images/star/like_on.png'
			@likeCnt.setColor 'e6e6e6'		
		#if timelime show the row liked my otherr people
		#if you caneled your like of this row
		else if Number @likeCnt.text
			info 'has like'
			@button.width = 53
			@button.backgroundImage = 'images/button/like_bg.png'
			@likeStar.backgroundImage = 'images/star/like.png'
			@likeCnt.setColor '#b3b3b3'
		#no one like this row
		else 
			info 'no like'	
			@likeCnt.setVisible false
			@button.width = 28
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
	

exports.LikeButton = LikeButton