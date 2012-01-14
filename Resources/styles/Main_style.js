var S, bointbar_max_text, button_checkin, checkin_question, checkin_text, dayOnRibbon, height_bottom, height_middle, height_top, icon, name, point_base, point_title, pointbar_max, pointbar_now, pointbar_now_text, ribbon, star0, star0_text, star1, star1_text, star2, star2_text, star3, star3_text, star4, star4_text, star5, star5_text, star6, star6_text, styles, week_base, week_title;
Titanium.include('Const.js');
S = Const;
height_top = S.MARGIN * 3 + S.ICON * 2.5;
height_middle = S.MARGIN * 6 + S.ICON;
height_bottom = S.Device.Height - height_top - height_middle;
styles = {
  icon: {
    left: 5,
    top: 5,
    width: 44,
    height: 44,
    backgroundImage: '../images/user.png'
  },
  name: {
    left: 57,
    top: 16,
    width: 62,
    height: 21,
    text: 'person1',
    color: '#000000'
  },
  ribbon: {
    right: 0,
    top: 10,
    width: 132,
    height: 34,
    backgroundImage: '../images/UI/ribbon.png'
  },
  dayOnRibbon: {
    right: 10,
    top: 10,
    width: 132,
    height: 34,
    text: 'days / 21',
    color: '#000000',
    textAlign: 'right'
  },
  checkin_question: {
    left: 5,
    top: 237,
    width: 114,
    height: 21,
    text: 'Did you learn?'
  },
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
    backgroundImage: '../images/UI/point_base.png'
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
    backgroundColor: '#0080ff'
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
  },
  week_title: {
    left: 5,
    top: 132,
    width: 114,
    height: 20,
    text: 'Weekly record',
    color: '#777',
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
    backgroundImage: '../images/UI/week_base.png'
  },
  star0_text: {
    left: 36,
    top: 41,
    width: 26,
    height: 22,
    text: 'Mon',
    textAlign: 'center',
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
    text: 'Tues',
    textAlign: 'center',
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
    text: 'Wed',
    textAlign: 'center',
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
    text: 'Thurs',
    textAlign: 'center',
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
    text: 'Fri',
    textAlign: 'center',
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
    text: 'Sat',
    textAlign: 'center',
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
    text: 'Sun',
    textAlign: 'center',
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
    backgroundImage: '../images/star/red.png'
  },
  star1: {
    left: 71,
    top: 17,
    width: 26,
    height: 26
  },
  star2: {
    left: 105,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: '../images/star/yellow.png'
  },
  star3: {
    left: 139,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: '../images/star/aqua.png'
  },
  star4: {
    left: 175,
    top: 17,
    width: 26,
    height: 26
  },
  star5: {
    left: 210,
    top: 17,
    width: 26,
    height: 26
  },
  star6: {
    left: 246,
    top: 17,
    width: 26,
    height: 26,
    backgroundImage: '../images/star/green.png'
  },
  button_checkin: {
    left: 10,
    top: 266,
    width: 300,
    height: 63,
    font: {
      fontFamily: 'Helvetica-Bold',
      fontSize: 15
    },
    color: '#324f85',
    backgroundImage: '../images/button/checkin4.png'
  },
  checkin_text: {
    left: 0,
    top: 22,
    width: 300,
    height: 22,
    text: 'Check in & Get Star!',
    color: "#fff",
    textAlign: 'center',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 24
    }
  }
};
icon = Titanium.UI.createView(styles.icon);
win.add(icon);
name = Titanium.UI.createLabel(styles.name);
win.add(name);
ribbon = Titanium.UI.createView(styles.ribbon);
win.add(ribbon);
dayOnRibbon = Titanium.UI.createLabel(styles.dayOnRibbon);
win.add(dayOnRibbon);
checkin_question = Titanium.UI.createLabel(styles.checkin_question);
win.add(checkin_question);
point_title = Titanium.UI.createLabel(styles.point_title);
win.add(point_title);
point_base = Titanium.UI.createView(styles.point_base);
pointbar_max = Titanium.UI.createView(styles.pointbar_max);
pointbar_now = Titanium.UI.createView(styles.pointbar_now);
pointbar_now_text = Titanium.UI.createLabel(styles.pointbar_now_text);
pointbar_now.add(pointbar_now_text);
pointbar_max.add(pointbar_now);
bointbar_max_text = Titanium.UI.createLabel(styles.bointbar_max_text);
pointbar_max.add(bointbar_max_text);
point_base.add(pointbar_max);
win.add(point_base);
week_title = Titanium.UI.createLabel(styles.week_title);
win.add(week_title);
week_base = Titanium.UI.createButton(styles.week_base);
star0_text = Titanium.UI.createLabel(styles.star0_text);
week_base.add(star0_text);
star1_text = Titanium.UI.createLabel(styles.star1_text);
week_base.add(star1_text);
star2_text = Titanium.UI.createLabel(styles.star2_text);
week_base.add(star2_text);
star3_text = Titanium.UI.createLabel(styles.star3_text);
week_base.add(star3_text);
star4_text = Titanium.UI.createLabel(styles.star4_text);
week_base.add(star4_text);
star5_text = Titanium.UI.createLabel(styles.star5_text);
week_base.add(star5_text);
star6_text = Titanium.UI.createLabel(styles.star6_text);
week_base.add(star6_text);
star0 = Titanium.UI.createView(styles.star0);
week_base.add(star0);
star1 = Titanium.UI.createView(styles.star1);
week_base.add(star1);
star2 = Titanium.UI.createView(styles.star2);
week_base.add(star2);
star3 = Titanium.UI.createView(styles.star3);
week_base.add(star3);
star4 = Titanium.UI.createView(styles.star4);
week_base.add(star4);
star5 = Titanium.UI.createView(styles.star5);
week_base.add(star5);
star6 = Titanium.UI.createView(styles.star6);
week_base.add(star6);
win.add(week_base);
button_checkin = Titanium.UI.createButton(styles.button_checkin);
checkin_text = Titanium.UI.createLabel(styles.checkin_text);
week_base.add(star4_text);
button_checkin.add(checkin_text);
win.add(button_checkin);