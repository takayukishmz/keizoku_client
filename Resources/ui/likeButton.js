var LikeButton;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
LikeButton = (function() {
  LikeButton.prototype.Stat = {
    ISLIKE: 'isLike',
    NOLIKE: 'noLike'
  };
  function LikeButton() {
    this.switchView = __bind(this.switchView, this);    info('LikeButton init');
    this.button = Titanium.UI.createButton({
      right: 5,
      bottom: 5,
      width: 28,
      height: 28,
      font: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 15
      },
      color: '#324f85',
      backgroundImage: 'images/button/like_bg.png',
      clickName: 'likebutton'
    });
    this.likeStar = Titanium.UI.createView({
      left: 7,
      top: 7,
      width: 14,
      height: 14,
      backgroundImage: 'images/star/like.png',
      clickName: 'star'
    });
    this.button.add(this.likeStar);
    this.likeText = Titanium.UI.createLabel({
      left: 23,
      top: 0,
      width: 30,
      height: 28,
      text: "いいね!",
      color: '#b3b3b3',
      font: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 8
      }
    });
    this.button.add(this.likeText);
  }
  LikeButton.prototype.switchView = function(isLike) {
    info('--------------------switchView--------------------');
    info(isLike);
    info(this.likeText.text);
    if (isLike) {
      info('already liked');
      this.button.width = 53;
      this.button.backgroundImage = 'images/button/like_bg_on.png';
      this.likeStar.backgroundImage = 'images/star/like_on.png';
      this.likeText.setColor('e6e6e6');
    } else if (Number(this.likeText.text)) {
      info('has like');
      this.button.width = 53;
      this.button.backgroundImage = 'images/button/like_bg.png';
      this.likeStar.backgroundImage = 'images/star/like.png';
      this.likeText.setColor('#b3b3b3');
    } else {
      info('no like');
      this.likeText.setVisible(false);
      this.button.width = 28;
      this.likeStar.left = 5;
      this.likeStar.top = 5;
      this.likeStar.width = 18;
      this.likeStar.height = 18;
      this.button.backgroundImage = 'images/button/like_bg.png';
      this.likeStar.backgroundImage = 'images/star/like.png';
    }
  };
  LikeButton.prototype.calcLikeFlag = function(pushFlag, isLike, responseFlg) {
    info('--------------------execLike--------------------');
    info(pushFlag);
    info(isLike);
    info(responseFlg);
    if (responseFlg) {
      if (responseFlg === this.Stat.ISLIKE) {
        isLike = true;
      } else {
        isLike = false;
      }
    } else if (!pushFlag && isLike) {
      isLike = true;
    } else if (pushFlag && !isLike) {
      isLike = true;
    } else if (pushFlag && isLike) {
      isLike = false;
    }
    return isLike;
  };
  LikeButton.prototype.setCount = function(count) {};
  return LikeButton;
})();
exports.LikeButton = LikeButton;