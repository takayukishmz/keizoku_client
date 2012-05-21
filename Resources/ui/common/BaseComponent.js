var BaseComponent;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
BaseComponent = (function() {
  function BaseComponent(param) {
    this.param = param;
    this.getNodeView = __bind(this.getNodeView, this);
    info_obj(this.param);
    if (!this.param) {
      throw Error('ERR! @param is undefined!');
    }
    this.view = Ti.UI.createView(this.param);
    this.setView();
    this.setEvent();
    this.setButton();
  }
  BaseComponent.prototype.setView = function() {};
  BaseComponent.prototype.setEvent = function() {};
  BaseComponent.prototype.setButton = function() {};
  BaseComponent.prototype.getNodeView = function() {
    return this.view;
  };
  return BaseComponent;
})();
exports.BaseComponent = BaseComponent;