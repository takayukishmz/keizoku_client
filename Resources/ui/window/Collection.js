var BaseWindow, Collection, MockComponent;
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
Collection = (function() {
  __extends(Collection, BaseWindow);
  Collection.prototype.TYPE = {
    CALENDAR: 0,
    COLLECTION: 1
  };
  function Collection() {
    this.setEvent = __bind(this.setEvent, this);
    this.setView = __bind(this.setView, this);    this.params = {
      title: 'collection',
      width: 320,
      height: 368
    };
    Collection.__super__.constructor.call(this, this.params);
    this.collection = new MockComponent('LearningMate', 'images/mock/collection.png');
    this.calendar = new MockComponent('LearningMate', 'images/mock/calendar.png');
    this.win.add(this.collection.getNodeView());
    this.win.add(this.calendar.getNodeView());
    return this.win;
  }
  Collection.prototype.setView = function() {
    this.buttonBar = Ti.UI.createButtonBar({
      labels: ['カレンダー', 'コレクション'],
      backgroundColor: Const.BUTTONBARCOLOR,
      top: 3,
      style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
      height: 25,
      width: 200
    });
    return this.win.titleControl = this.buttonBar;
  };
  Collection.prototype.setButton = function() {};
  Collection.prototype.setEvent = function() {
    return this.buttonBar.addEventListener("click", __bind(function(e) {
      this.collection.getNodeView().setVisible(false);
      this.calendar.getNodeView().setVisible(false);
      switch (e.index) {
        case this.TYPE.CALENDAR:
          this.calendar.getNodeView().setVisible(true);
          break;
        case this.TYPE.COLLECTION:
          this.collection.getNodeView().setVisible(true);
      }
    }, this));
  };
  return Collection;
})();
exports.Collection = Collection;