var BaseWindow, hoge;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
hoge = (function() {
  __extends(hoge, BaseWindow);
  function hoge() {
    hoge.__super__.constructor.call(this, {
      title: 'hoge'
    });
    return this.win;
  }
  hoge.prototype.setView = function() {};
  hoge.prototype.setEvent = function() {};
  hoge.prototype.setButton = function() {};
  return hoge;
})();
exports.hoge = hoge;