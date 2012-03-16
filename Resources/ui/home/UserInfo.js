var styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
exports.UserInfo = function() {
  this.view = Ti.UI.createView({
    top: 0,
    width: 320,
    height: 70
  });
  this.icon = Titanium.UI.createImageView(styles.icon);
  this.icon.image = 'images/' + Const.DEFALT.USER;
  this.name = Titanium.UI.createLabel(styles.name);
  this.view.add(this.icon);
  this.view.add(this.name);
  this.setUserData = __bind(function(profile) {
    log('UserInfo', '1');
    this.icon.image = profile.picture_url ? profile.picture_url : 'images/' + Const.DEFALT.USER;
    log('UserInfo', '2');
    this.name.text = profile.nickname;
    log('UserInfo', '3');
  }, this);
  this.getNodeView = __bind(function() {
    return this.view;
  }, this);
};
styles = {
  icon: {
    left: 5,
    top: 5,
    width: 44,
    height: 44,
    image: '../images/user.png',
    borderRadius: 3
  },
  name: {
    left: 57,
    top: 16,
    width: 200,
    height: 21,
    text: 'person1',
    color: '#000000'
  }
};