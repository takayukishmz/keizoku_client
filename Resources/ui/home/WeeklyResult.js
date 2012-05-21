var Collection, MockWindow, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
Collection = require('ui/window/Collection').Collection;
MockWindow = require('ui/window/MockWindow').MockWindow;
exports.WeeklyResult = function() {
  var star0, star0_text, star1, star1_text, star2, star2_text, star3, star3_text, star4, star4_text, star5, star5_text, star6, star6_text, week_title;
  this.stars = [];
  this.view = Ti.UI.createView({
    top: 0,
    width: 320,
    height: 220
  });
  week_title = Titanium.UI.createLabel(styles.week_title);
  this.view.add(week_title);
  this.week_base = Titanium.UI.createButton(styles.week_base);
  star0_text = Titanium.UI.createLabel(styles.star0_text);
  this.week_base.add(star0_text);
  star1_text = Titanium.UI.createLabel(styles.star1_text);
  this.week_base.add(star1_text);
  star2_text = Titanium.UI.createLabel(styles.star2_text);
  this.week_base.add(star2_text);
  star3_text = Titanium.UI.createLabel(styles.star3_text);
  this.week_base.add(star3_text);
  star4_text = Titanium.UI.createLabel(styles.star4_text);
  this.week_base.add(star4_text);
  star5_text = Titanium.UI.createLabel(styles.star5_text);
  this.week_base.add(star5_text);
  star6_text = Titanium.UI.createLabel(styles.star6_text);
  this.week_base.add(star6_text);
  star0 = Titanium.UI.createView(styles.star0);
  this.week_base.add(star0);
  star1 = Titanium.UI.createView(styles.star1);
  this.week_base.add(star1);
  star2 = Titanium.UI.createView(styles.star2);
  this.week_base.add(star2);
  star3 = Titanium.UI.createView(styles.star3);
  this.week_base.add(star3);
  star4 = Titanium.UI.createView(styles.star4);
  this.week_base.add(star4);
  star5 = Titanium.UI.createView(styles.star5);
  this.week_base.add(star5);
  star6 = Titanium.UI.createView(styles.star6);
  this.week_base.add(star6);
  this.stars.push(star0);
  this.stars.push(star1);
  this.stars.push(star2);
  this.stars.push(star3);
  this.stars.push(star4);
  this.stars.push(star5);
  this.stars.push(star6);
  this.view.add(this.week_base);
  this.week_base.addEventListener('click', __bind(function(e) {
    var newWindow;
    Ti.API.info('click Collection');
    newWindow = new Collection();
    $.tabs.currentTab.open(newWindow, {
      animated: true
    });
  }, this));
  this.update = __bind(function(weeklyRecord) {
    var i, _i, _len;
    log('WeeklyResult', 'update');
    if (!weeklyRecord) {
      return;
    }
    log('WeeklyResult', 'update1');
    for (_i = 0, _len = weeklyRecord.length; _i < _len; _i++) {
      i = weeklyRecord[_i];
      if (i.wday !== null) {
        info('weeklyRecord update index:' + i);
        this.stars[i.wday].backgroundImage = 'images/star/' + i.color_id + '.png';
      }
    }
  }, this);
  this.getNodeView = function() {
    return this.view;
  };
};
styles = {
  week_title: {
    left: 5,
    top: 132,
    width: 114,
    height: 20,
    text: 'Weekly record',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
  },
  week_base: {
    left: 5,
    top: 152,
    width: 310,
    height: 63,
    backgroundImage: 'images/UI/record_bg_black.png'
  },
  star0_text: {
    left: 36,
    top: 41,
    width: 26,
    height: 22,
    text: 'Sun',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star1_text: {
    left: 71,
    top: 41,
    width: 26,
    height: 22,
    text: 'Mon',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star2_text: {
    left: 105,
    top: 41,
    width: 26,
    height: 22,
    text: 'Tues',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star3_text: {
    left: 139,
    top: 41,
    width: 26,
    height: 22,
    text: 'Wed',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star4_text: {
    left: 176,
    top: 41,
    width: 26,
    height: 22,
    text: 'Thurs',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star5_text: {
    left: 210,
    top: 41,
    width: 26,
    height: 22,
    text: 'Fri',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star6_text: {
    left: 246,
    top: 41,
    width: 26,
    height: 22,
    text: 'Sat',
    textAlign: 'center',
    color: '#fff',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 10
    }
  },
  star0: {
    left: 36,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/1.png'
  },
  star1: {
    left: 71,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/1.png'
  },
  star2: {
    left: 105,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/7.png'
  },
  star3: {
    left: 139,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/10.png'
  },
  star4: {
    left: 175,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/13.png'
  },
  star5: {
    left: 210,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/16.png'
  },
  star6: {
    left: 246,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: 'images/star/19.png'
  }
};