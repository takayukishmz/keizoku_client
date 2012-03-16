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
      left: 4.5,
      top: 4.5,
      width: 19,
      height: 19,
      backgroundImage: 'images/star/like.png',
      clickName: 'star'
    });
    this.button.add(this.likeStar);
    this.likeCnt = Titanium.UI.createLabel({
      left: 29.5,
      top: 4.5,
      width: 19,
      height: 19,
      text: "0",
      color: '#b3b3b3'
    });
    this.button.add(this.likeCnt);
  }
  LikeButton.prototype.switchView = function(isLike) {
    info('--------------------switchView--------------------');
    info(isLike);
    info(this.likeCnt.text);
    if (isLike) {
      info('already liked');
      this.button.width = 53;
      this.button.backgroundImage = 'images/button/like_bg_on.png';
      this.likeStar.backgroundImage = 'images/star/like_on.png';
      this.likeCnt.setColor('e6e6e6');
    } else if (Number(this.likeCnt.text)) {
      info('has like');
      this.button.width = 53;
      this.button.backgroundImage = 'images/button/like_bg.png';
      this.likeStar.backgroundImage = 'images/star/like.png';
      this.likeCnt.setColor('#b3b3b3');
    } else {
      info('no like');
      this.likeCnt.setVisible(false);
      this.button.width = 28;
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
  return LikeButton;
})();
exports.LikeButton = LikeButton;