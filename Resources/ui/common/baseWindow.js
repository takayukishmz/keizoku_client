var BaseWindow;
BaseWindow = (function() {
  function BaseWindow(params) {
    this.params = params;
    this.win = Ti.UI.createWindow(params);
    info(Const.BACKGROUND);
    this.win.backgroundImage = Const.BACKGROUND;
    this.win.barColor = Const.BARCOLOR;
    this.setView();
    this.setButton();
    this.setEvent();
  }
  BaseWindow.prototype.setView = function() {};
  BaseWindow.prototype.setButton = function() {};
  BaseWindow.prototype.setEvent = function() {};
  BaseWindow.prototype.open = function(args) {
    this.win.open(args);
  };
  BaseWindow.prototype.close = function(args) {
    this.win.close(args);
  };
  return BaseWindow;
})();
exports.BaseWindow = BaseWindow;