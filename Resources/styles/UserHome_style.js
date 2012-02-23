var history, history_text, history_title, icon, like, like_text, name, point_max_text, point_now_text, point_record_text, point_title, pointbar_base, pointbar_max, pointbar_now, scrollView, star0, star0_text, star1, star1_text, star2, star2_text, star3, star3_text, star4, star4_text, star5, star5_text, star6, star6_text, styles, supporter, supporter_text, supporting, supporting_text, view, week_base, week_title;
Titanium.include('Const.js');
styles = {
  scrollview: {
    contentWidth: 'auto',
    contentHeight: 'auto',
    top: 0,
    showVerticalScrollIndicator: true
  },
  base: {
    height: 400,
    backgroundImage: '../images/UI/base_pink.png'
  },
  icon: {
    left: 5,
    top: 5,
    width: 44,
    height: 44,
    image: '../images/user.png',
    borderRadius: 3
  },
  name: {
    left: 57,
    top: 16,
    width: 200,
    height: 21,
    text: 'person1',
    color: '#000000'
  },
  week_base: {
    left: 5,
    top: 152,
    width: 310,
    height: 63,
    backgroundImage: '../images/UI/week_base.png'
  },
  week_title: {
    left: 5,
    top: 132,
    width: 114,
    height: 20,
    text: 'Weekly Record',
    color: '#999',
    color: '#777',
    font: {
      fontFamily: 'Helvetica',
      fontSize: 14
    }
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
  }
};
view = Titanium.UI.createView(styles.base);
icon = Titanium.UI.createImageView(styles.icon);
view.add(icon);
name = Titanium.UI.createLabel(styles.name);
view.add(name);
pointbar_base = Titanium.UI.createView({
  left: 5,
  top: 80,
  width: 310,
  height: 40,
  backgroundImage: '../images/UI/bar_base.png'
});
pointbar_max = Titanium.UI.createView({
  left: 10,
  top: 12,
  width: 250,
  height: 16,
  backgroundColor: '#f2f2f2f0'
});
pointbar_now = Titanium.UI.createView({
  left: 0,
  width: 20,
  height: 16,
  backgroundColor: '#008aff'
});
point_now_text = Titanium.UI.createLabel({
  right: 5,
  top: 0,
  width: 42,
  height: 16,
  text: '30',
  textAlign: 'right',
  color: '#ffffff'
});
pointbar_now.add(point_now_text);
pointbar_max.add(pointbar_now);
point_max_text = Titanium.UI.createLabel({
  left: 260,
  top: 0,
  width: 50,
  height: 40,
  text: '99',
  textAlign: 'center'
});
pointbar_base.add(point_max_text);
pointbar_base.add(pointbar_max);
point_title = Titanium.UI.createLabel({
  left: 10,
  top: 60,
  width: 100,
  height: 21,
  text: 'Weekly Point',
  color: '#777',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14
  }
});
view.add(point_title);
point_record_text = Titanium.UI.createLabel({
  left: 260,
  top: 0,
  width: 50,
  height: 10,
  text: 'record',
  textAlign: 'center',
  color: '#777',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 12
  }
});
pointbar_base.add(point_record_text);
view.add(pointbar_base);
week_base = Titanium.UI.createButton(styles.week_base);
week_title = Titanium.UI.createLabel(styles.week_title);
view.add(week_title);
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
view.add(week_base);
stars.push(star0);
stars.push(star1);
stars.push(star2);
stars.push(star3);
stars.push(star4);
stars.push(star5);
stars.push(star6);
supporter = Titanium.UI.createButton({
  left: 5,
  top: 310,
  width: 100,
  height: 44,
  color: '#324f85',
  backgroundImage: '../images/UI/bar_white_short_155x44.png'
});
view.add(supporter);
supporting = Titanium.UI.createButton({
  left: 110,
  top: 310,
  width: 100,
  height: 44,
  color: '#324f85',
  backgroundImage: '../images/UI/bar_white_short_155x44.png'
});
view.add(supporting);
like = Titanium.UI.createButton({
  left: 214,
  top: 310,
  width: 100,
  height: 44,
  color: '#324f85',
  backgroundImage: '../images/UI/bar_white_short_155x44.png'
});
view.add(like);
history = Titanium.UI.createButton({
  left: 5,
  top: 250,
  width: 310,
  height: 44,
  color: '#324f85',
  backgroundImage: '../images/UI/bar_white_310x44.png'
});
view.add(history);
history_title = Titanium.UI.createLabel({
  left: 5,
  top: 230,
  width: 155,
  height: 16,
  text: 'Learning History',
  textAlign: 'left',
  color: '#777',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14
  }
});
view.add(history_title);
history_text = Titanium.UI.createLabel({
  left: 20,
  top: 0,
  width: 127,
  height: 44,
  text: '-- Records'
});
history.add(history_text);
supporter_text = Titanium.UI.createLabel({
  left: 0,
  top: 11,
  width: 100,
  height: 22,
  textAlign: 'center',
  text: 'Supporter',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14
  }
});
supporter.add(supporter_text);
supporting_text = Titanium.UI.createLabel({
  left: 0,
  top: 11,
  width: 100,
  height: 22,
  textAlign: 'center',
  text: 'Support',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14
  }
});
supporting.add(supporting_text);
like_text = Titanium.UI.createLabel({
  left: 0,
  top: 11,
  width: 100,
  height: 22,
  textAlign: 'center',
  text: 'My Like',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 14
  }
});
like.add(like_text);
scrollView = Titanium.UI.createScrollView(styles.scrollview);
scrollView.add(view);
win.add(scrollView);