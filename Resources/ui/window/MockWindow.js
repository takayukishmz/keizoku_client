var BaseWindow, MockWindow;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
MockWindow = (function() {
  __extends(MockWindow, BaseWindow);
  function MockWindow(title, url) {
    this.title = title;
    this.url = url;
    this.setEvent = __bind(this.setEvent, this);
    this.setView = __bind(this.setView, this);
    this.params = {
      title: this.title,
      width: 320,
      height: 368
    };
    MockWindow.__super__.constructor.call(this, this.params);
    return this.win;
  }
  MockWindow.prototype.setView = function() {
    var bg;
    bg = Ti.UI.createView({
      top: 0,
      width: 320,
      height: 368,
      backgroundImage: this.url
    });
    return this.win.add(bg);
  };
  MockWindow.prototype.setButton = function() {};
  MockWindow.prototype.setEvent = function() {};
  return MockWindow;
})();
exports.MockWindow = MockWindow;