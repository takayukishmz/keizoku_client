var BaseWindow, Group, MockComponent;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
MockComponent = require('ui/common/MockComponent').MockComponent;
Group = (function() {
  __extends(Group, BaseWindow);
  Group.prototype.TYPE = {
    MEMBER: 0,
    TIMELINE: 1,
    RATING: 2
  };
  function Group() {
    this.setEvent = __bind(this.setEvent, this);
    this.setButton = __bind(this.setButton, this);
    this.setView = __bind(this.setView, this);    this.params = {
      title: 'Group Learning'
    };
    Group.__super__.constructor.call(this, this.params);
    this.memberList = new MockComponent('LearningMate', 'images/mock/grouprank.png');
    this.rating = new MockComponent('LearningMate', 'images/mock/rating.png');
    this.timeline = new MockComponent('LearningMate', 'images/mock/timeline.png');
    this.win.add(this.memberList.getNodeView());
    this.win.add(this.rating.getNodeView());
    this.win.add(this.timeline.getNodeView());
    return this.win;
  }
  Group.prototype.setView = function() {
    this.buttonBar = Ti.UI.createButtonBar({
      labels: ['メンバー', 'タイムライン', '評価'],
      backgroundColor: Const.BUTTONBARCOLOR,
      top: 3,
      style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
      height: 25,
      width: 250
    });
    this.win.titleControl = this.buttonBar;
  };
  Group.prototype.setButton = function() {};
  Group.prototype.setEvent = function() {
    return this.buttonBar.addEventListener("click", __bind(function(e) {
      this.memberList.getNodeView().setVisible(false);
      this.rating.getNodeView().setVisible(false);
      this.timeline.getNodeView().setVisible(false);
      switch (e.index) {
        case this.TYPE.MEMBER:
          this.memberList.getNodeView().setVisible(true);
          break;
        case this.TYPE.TIMELINE:
          this.timeline.getNodeView().setVisible(true);
          break;
        case this.TYPE.RATING:
          this.rating.getNodeView().setVisible(true);
      }
    }, this));
  };
  return Group;
})();
exports.Group = Group;