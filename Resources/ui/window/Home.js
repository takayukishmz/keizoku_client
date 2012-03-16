var BaseWindow, CheckIn, Home, PointBar, UserInfo, WeeklyResult, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
PointBar = require('ui/home/PointBar').PointBar;
UserInfo = require('ui/home/UserInfo').UserInfo;
WeeklyResult = require('ui/home/WeeklyResult').WeeklyResult;
CheckIn = require('ui/window/CheckIn').CheckIn;
styles = require('styles/Home_style').styles;
Home = (function() {
  __extends(Home, BaseWindow);
  function Home() {
    this.updateView = __bind(this.updateView, this);    this.params = {
      title: '1 Week English'
    };
    Home.__super__.constructor.call(this, this.params);
    this.userInfo = new UserInfo();
    this.pointBar = new PointBar();
    this.weeklyResult = new WeeklyResult();
    this.win.add(this.userInfo.getNodeView());
    this.win.add(this.pointBar.getNodeView());
    this.win.add(this.weeklyResult.getNodeView());
    return this.win;
  }
  Home.prototype.setView = function() {
    var checkin_question, checkin_text, ribbon;
    ribbon = Titanium.UI.createView(styles.ribbon);
    this.win.add(ribbon);
    this.dayOnRibbon = Titanium.UI.createLabel(styles.dayOnRibbon);
    this.win.add(this.dayOnRibbon);
    checkin_question = Titanium.UI.createLabel(styles.checkin_question);
    this.win.add(checkin_question);
    this.button_checkin = Titanium.UI.createButton(styles.button_checkin);
    checkin_text = Titanium.UI.createLabel(styles.checkin_text);
    this.button_checkin.add(checkin_text);
    return this.win.add(this.button_checkin);
  };
  Home.prototype.updateView = function() {
    $.API.callAPI('GET', 'getUserData', {
      user_id: Ti.App.user_id
    }, __bind(function(json) {
      this.dayOnRibbon.text = json.profile.day_total + ' days ';
      this.userInfo.setUserData(json.profile);
      this.weeklyResult.update(json.weekly_record);
    }, this));
  };
  Home.prototype.setEvent = function() {
    this.button_checkin.addEventListener('click', __bind(function(e) {
      var newWindow;
      Ti.API.info('click checkin');
      newWindow = new CheckIn();
      newWindow.open();
    }, this));
    return this.win.addEventListener('focus', __bind(function(e) {
      Ti.API.info('userHome focus');
      indicator.setStatus(false);
      info(Ti.App.checkInUpdate);
      if (Ti.App.checkInUpdate) {
        Ti.App.checkInUpdate = false;
        return this.updateView();
      }
    }, this));
  };
  return Home;
})();
exports.Home = Home;