var BaseComponent;
BaseComponent = (function() {
  function BaseComponent(param) {
    this.param = param;
    info_obj(this.param);
    if (!this.param) {
      throw Error('ERR! @param is undefined!');
    }
    info('1');
    this.view = Ti.UI.createView(this.param);
    info('2');
    this.setView();
    info_obj(this.view);
    return this.view;
  }
  BaseComponent.prototype.setView = function() {};
  return BaseComponent;
})();
exports.BaseComponent = BaseComponent;