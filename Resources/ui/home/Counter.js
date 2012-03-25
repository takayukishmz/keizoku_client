var BaseComponent, Counter, styles;
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
  function Counter() {
    this.params = {
      top: 0,
      width: 320,
      height: 100
    };
    Counter.__super__.constructor.call(this, this.params);
  }
  Counter.prototype.setView = function() {
    this.ribbon = Titanium.UI.createView(styles.ribbon);
    this.view.add(this.ribbon);
    this.dayOnRibbon = Titanium.UI.createLabel(styles.dayOnRibbon);
    return this.view.add(this.dayOnRibbon);
  };
  Counter.prototype.update = function(count) {
    return this.dayOnRibbon.text = count + ' days ';
  };
  return Counter;
})();
exports.Counter = Counter;
styles = {
  ribbon: {
    right: -5,
    top: 10,
    width: 77,
    height: 39,
    backgroundImage: 'images/UI/ribon/3.png'
  },
  dayOnRibbon: {
    right: 0,
    top: 10,
    width: 80,
    height: 34,
    text: '',
    color: '#fff',
    textAlign: 'right'
  }
};