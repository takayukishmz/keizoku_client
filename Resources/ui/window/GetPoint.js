var BaseWindow, GetPoint, MockComponent, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
MockComponent = require('ui/common/MockComponent').MockComponent;
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
    this.collection = new MockComponent('LearningMate', 'images/mock/collection.png');
    this.win.add(this.collection.getNodeView());
    return this.win;
  }
  GetPoint.prototype.setView = function() {};
  GetPoint.prototype.setEvent = function() {};
  GetPoint.prototype.setButton = function() {
    return $.Util.setLeftButton(this.win, function() {
      Ti.App.rootWindow.close();
    }, {
      title: setTT("CLOSE")
    });
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
    backgroundImage: 'images/star/2.png'
  }
};