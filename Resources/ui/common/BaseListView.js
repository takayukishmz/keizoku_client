var BaseListView, BaseWindow, row_height;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
row_height = Const.MARGIN * 2 + Const.ICON;
BaseListView = (function() {
  __extends(BaseListView, BaseWindow);
  function BaseListView(windowProperty) {
    this.windowProperty = windowProperty;
    this.createListView = __bind(this.createListView, this);
    this.loadListView = __bind(this.loadListView, this);
    this.tableview = Titanium.UI.createTableView({
      separatorColor: '#000',
      backgroundColor: 'transparent'
    });
    BaseListView.__super__.constructor.call(this, this.windowProperty);
    this.loadListView();
    this.win.add(this.tableview);
  }
  BaseListView.prototype.setView = function() {};
  BaseListView.prototype.setEvent = function() {};
  BaseListView.prototype.setButton = function() {};
  BaseListView.prototype.loadListView = function(user_id) {
    info(this.apiURL);
    if (!this.apiURL) {
      throw new Error('set apiURL');
    }
    log('BaseListView', this.apiParams);
    $.API.callAPI('GET', this.apiURL, this.apiParams, __bind(function(json) {
      var data, i, lists, _ref;
      lists = json.lists;
      data = [];
      for (i = 0, _ref = lists.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
        info(i);
        data.push(this.createListView(lists[i]));
      }
      this.tableview.data = data;
    }, this));
  };
  BaseListView.prototype.createListView = function(report) {
    throw new Error('overRide createListView');
  };
  BaseListView.prototype.styles = {
    row: {
      height: row_height,
      backgroundImage: Const.BACKGROUND
    },
    view: {
      height: row_height,
      width: Const.WIDTH,
      top: 0,
      borderRadius: 0
    },
    message: {
      color: Const.FONTCOLOR,
      font: {
        fontSize: 12,
        fontFamily: 'Arial'
      },
      left: Const.MARGIN * 2 + Const.ICON,
      top: Const.MARGIN,
      height: Const.ICON,
      width: 'auto',
      clickName: 'message',
      textAlign: 'left'
    },
    icon: {
      backgroundImage: 'images/user.png',
      top: Const.MARGIN,
      left: Const.MARGIN,
      width: Const.ICON,
      height: Const.ICON,
      borderRadius: 3
    },
    title: {
      font: {
        fontSize: 12,
        fontFamily: 'Arial'
      },
      left: Const.MARGIN * 2 + Const.ICON,
      top: Const.MARGIN,
      height: Const.ICON,
      width: 'auto',
      clickName: 'text',
      textAlign: 'left',
      color: Const.FONTCOLOR
    }
  };
  return BaseListView;
})();
exports.BaseListView = BaseListView;