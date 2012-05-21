var BaseComponent, MockComponent;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseComponent = require('ui/common/BaseComponent').BaseComponent;
MockComponent = (function() {
  __extends(MockComponent, BaseComponent);
  function MockComponent(title, url) {
    this.title = title;
    this.url = url;
    this.setView = __bind(this.setView, this);
    this.param = {
      title: this.title,
      width: 320,
      height: 368
    };
    MockComponent.__super__.constructor.call(this, this.param);
  }
  MockComponent.prototype.setView = function() {
    var bg;
    bg = Ti.UI.createView({
      top: 0,
      width: 320,
      height: 368,
      backgroundImage: this.url
    });
    return this.view.add(bg);
  };
  return MockComponent;
})();
exports.MockComponent = MockComponent;