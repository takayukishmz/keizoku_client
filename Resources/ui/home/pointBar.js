var styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
exports.PointBar = function() {
  var point_base, point_title;
  this.view = Ti.UI.createView({
    top: 0,
    width: 320,
    height: 100
  });
  point_title = Titanium.UI.createLabel(styles.point_title);
  point_base = Titanium.UI.createView(styles.point_base);
  this.pointbar_max = Titanium.UI.createView(styles.pointbar_max);
  this.pointbar_now = Titanium.UI.createView(styles.pointbar_now);
  this.pointbar_now_text = Titanium.UI.createLabel(styles.pointbar_now_text);
  this.bointbar_max_text = Titanium.UI.createLabel(styles.bointbar_max_text);
  this.pointbar_now.add(this.pointbar_now_text);
  this.pointbar_max.add(this.pointbar_now);
  this.pointbar_max.add(this.bointbar_max_text);
  point_base.add(this.pointbar_max);
  this.view.add(point_title);
  this.view.add(point_base);
  this.update = __bind(function(current, max) {
    var width;
    width = Number(this.pointbar_max.width) * (current / max);
    $.Util.move(this.pointbar_now, 0, width);
    this.pointbar_now_text.text = current;
    this.bointbar_max_text.text = max;
  }, this);
  this.getNodeView = __bind(function() {
    return this.view;
  }, this);
};
styles = {
  point_title: {
    left: 5,
    top: 60,
    width: 114,
    height: 20,
    text: 'Weekly Point',
    color: '#777',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  },
  point_base: {
    left: 5,
    top: 80,
    width: 310,
    height: 40,
    backgroundImage: 'images/UI/point_base.png'
  },
  pointbar_max: {
    left: 10,
    top: 12,
    width: 290,
    height: 16,
    backgroundColor: '#f2f2f2f0'
  },
  pointbar_now: {
    left: 0,
    width: 10,
    height: 16,
    backgroundColor: '#008aff'
  },
  pointbar_now_text: {
    right: 2,
    top: 0,
    width: 42,
    height: 16,
    text: '29',
    textAlign: 'right',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    },
    color: '#ffffff'
  },
  bointbar_max_text: {
    right: 2,
    top: 0,
    width: 290,
    height: 16,
    text: 'record:99',
    textAlign: 'right',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    },
    color: '#555'
  }
};