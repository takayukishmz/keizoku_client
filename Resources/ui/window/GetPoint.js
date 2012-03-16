var BaseWindow, GetPoint, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
GetPoint = (function() {
  __extends(GetPoint, BaseWindow);
  function GetPoint(data) {
    this.data = data;
    this.setView = __bind(this.setView, this);
    info_obj(this.data);
    this.pointList = data.lists;
    GetPoint.__super__.constructor.call(this, {
      title: 'good job!'
    });
    Ti.App.checkInUpdate = true;
    return this.win;
  }
  GetPoint.prototype.setView = function() {
    var base_white, i, item, message, point_base, point_msg, point_num, point_number, point_title, share_base, share_number, share_title, title, _ref, _results;
    title = Titanium.UI.createLabel(styles.title);
    message = Titanium.UI.createLabel(styles.message);
    point_base = Titanium.UI.createView(styles.point_base);
    point_title = Titanium.UI.createLabel(styles.point_title);
    point_base.add(point_title);
    point_number = Titanium.UI.createLabel(styles.point_number);
    point_base.add(point_number);
    share_base = Titanium.UI.createView(styles.share_base);
    share_title = Titanium.UI.createLabel(styles.share_title);
    share_base.add(share_title);
    share_number = Titanium.UI.createLabel(styles.share_number);
    share_base.add(share_number);
    item = Titanium.UI.createView(styles.item);
    this.win.add(title);
    this.win.add(message);
    this.win.add(point_base);
    this.win.add(share_base);
    this.win.add(item);
    info('setView');
    point_number.text = this.data.total + "pt";
    _results = [];
    for (i = 0, _ref = this.pointList.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      info(i);
      info('loop');
      base_white = Titanium.UI.createView(styles.base_white);
      base_white.top += 35 * i;
      point_msg = Titanium.UI.createLabel(styles.point_msg);
      point_msg.text = this.pointList[i].msg;
      base_white.add(point_msg);
      point_num = Titanium.UI.createLabel(styles.point_num);
      point_num.text = this.pointList[i].point + 'pt';
      base_white.add(point_num);
      _results.push(this.win.add(base_white));
    }
    return _results;
  };
  GetPoint.prototype.setEvent = function() {};
  GetPoint.prototype.setButton = function() {
    return $.Util.setLeftButton(this.win, function() {
      Ti.App.rootWindow.close();
    }, {
      title: setTT("CLOSE")
    });
  };
  GetPoint.pointDetail = function() {
    var box, i, point_label, point_num;
    for (i = 0; i <= 2; i++) {
      info('tt.UI.pointDetail');
      info(i);
      box = Titanium.UI.createView(styles.point_box);
      box.top = S.MARGIN + (S.MARGIN + S.ICON) * i;
      point_label = Titanium.UI.createLabel(styles.point_label);
      point_num = Titanium.UI.createLabel(styles.point_num);
      box.add(point_label);
      box.add(point_num);
      point.add(box);
    }
  };
  GetPoint.SupporterList = function() {
    info('call api and get supporter list');
  };
  return GetPoint;
})();
exports.GetPoint = GetPoint;
styles = {
  title: {
    left: 20,
    top: 7,
    width: 80,
    height: 21,
    text: 'Good Job!',
    color: '#000000'
  },
  message: {
    left: 20,
    top: 122,
    width: 262,
    height: 21,
    text: '2 times today. you get yellow star.'
  },
  point_base: {
    left: 5,
    top: 147,
    width: 310,
    height: 33,
    backgroundImage: 'images/UI/bar_black.png'
  },
  point_title: {
    left: 14,
    top: 4,
    width: 46,
    height: 21,
    text: 'points',
    color: "fff"
  },
  point_number: {
    left: 257,
    top: 4,
    width: 42,
    height: 21,
    text: '15pt',
    color: "fff"
  },
  base_white: {
    left: 5,
    top: 185,
    width: 310,
    height: 33,
    backgroundImage: 'images/UI/bar_white.png'
  },
  point_msg: {
    left: 14,
    top: 4,
    width: 200,
    height: 21,
    text: 'points'
  },
  point_num: {
    left: 257,
    top: 4,
    width: 42,
    height: 21,
    text: '15pt'
  },
  share_base: {
    left: 5,
    top: 293,
    width: 310,
    height: 33,
    backgroundImage: 'images/UI/bar_black.png'
  },
  share_title: {
    left: 14,
    top: 4,
    width: 46,
    height: 21,
    text: 'points',
    color: "fff"
  },
  share_number: {
    left: 257,
    top: 4,
    width: 42,
    height: 21,
    text: '15pt',
    color: "fff"
  },
  item: {
    left: 116,
    top: 33,
    width: 88,
    height: 88,
    backgroundImage: 'images/star/yellow.png'
  }
};