var BaseWindow, FB, Login, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
FB = require('lib/Facebook').Facebook;
Ti.App.checkInUpdate = true;
Ti.Facebook.appid = '203800316311425';
Ti.Facebook.permissions = ['publish_stream', 'manage_friendlists'];
Login = (function() {
  __extends(Login, BaseWindow);
  Login.isSignUp = false;
  function Login(callback) {
    this.callback = callback;
    this.setEvent = __bind(this.setEvent, this);
    this.setView = __bind(this.setView, this);
    this.updateLoginStatus = __bind(this.updateLoginStatus, this);
    this.signUp = __bind(this.signUp, this);
    this.checkLogin = __bind(this.checkLogin, this);
    this.params = {
      title: 'LoginWindow',
      navBarHidden: true,
      modal: true
    };
    Login.__super__.constructor.call(this, this.params);
    this.FB = new FB;
    Ti.Facebook.addEventListener('login', this.updateLoginStatus);
  }
  Login.prototype.checkLogin = function() {
    info('#---------------checkLogin---------------#');
    if (Ti.Facebook.loggedIn) {
      this.login();
    } else {
      this.open();
    }
  };
  Login.prototype.login = function() {
    var params;
    if (Ti.Facebook.loggedIn && Ti.Facebook.uid) {
      params = {
        uid: Ti.Facebook.uid
      };
      $.API.callAPI('GET', 'login', params, __bind(function(res) {
        if (res.success) {
          alert(res);
          return;
        }
        return this.win.close();
      }, this));
    }
  };
  Login.prototype.signUp = function() {
    this.FB.getProfile(__bind(function(json) {
      var params, result, user;
      info('#---------------getProfile---------------#');
      info(json.method);
      result = JSON.parse(json.result);
      user = result[0];
      params = {
        uid: user.uid,
        name: user.name,
        picture_url: user.pic_square,
        email: user.email
      };
      info_obj(params);
      $.API.callAPI('GET', 'signUp', params, __bind(function(res) {
        if (res.is_success) {
          this.isSignUp = true;
          this.close();
        } else {
          alert('invalid user data');
        }
      }, this));
    }, this));
  };
  Login.prototype.updateLoginStatus = function() {
    if (Ti.Facebook.loggedIn) {
      return this.login();
    } else {
      return Ti.Facebook.authorize();
    }
  };
  Login.prototype.setView = function() {
    var l0, l1;
    this.fb_button = Titanium.UI.createButton({
      left: 7,
      top: 290,
      width: 306,
      height: 49,
      backgroundImage: 'images/button/fb_login.png'
    });
    this.win.add(this.fb_button);
    this.tw_button = Titanium.UI.createButton({
      left: 7,
      top: 352,
      width: 306,
      height: 49,
      backgroundImage: 'images/button/tw_login.png'
    });
    this.win.add(this.tw_button);
    l0 = Titanium.UI.createLabel({
      left: 60,
      top: 112,
      width: 208,
      height: 32,
      text: 'ケイゾク。',
      font: {
        fontFamily: 'HiraMaruPro-W4',
        fontSize: 24
      },
      color: '#000000'
    });
    this.win.add(l0);
    l1 = Titanium.UI.createLabel({
      left: 60,
      top: 152,
      width: 208,
      height: 32,
      text: 'Social Recording Learning',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    return this.win.add(l1);
  };
  Login.prototype.setEvent = function() {
    return this.fb_button.addEventListener('click', __bind(function(e) {
      info('click fb Login button');
      if (Ti.Facebook.loggedIn && this.isSignUp) {
        info('fb already login');
        this.win.close();
      } else if (Ti.Facebook.loggedIn) {
        this.signUp();
      } else {
        info('fb login');
        Ti.Facebook.authorize();
      }
    }, this));
  };
  return Login;
})();
exports.Login = Login;
styles = {
  a: 1
};