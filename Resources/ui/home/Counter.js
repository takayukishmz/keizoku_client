var BaseComponent, Counter;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseComponent = require('ui/common/BaseComponent').BaseComponent;
Counter = (function() {
  __extends(Counter, BaseComponent);
  function Counter(param) {
    this.param = param;
    info_obj(this.param);
    this.param = {
      top: 0,
      width: 320,
      height: 70
    };
    Counter.__super__.constructor.call(this, this.param);
  }
  Counter.prototype.setView = function() {};
  Counter.prototype.update = function() {};
  return Counter;
})();
exports.Counter = Counter;