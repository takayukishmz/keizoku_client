var button_share, button_star, icon_pt, icon_star, status_bg, status_day, status_pt, status_title, title_analysis, unit_day;
Titanium.include('Const.js');
status_bg = Titanium.UI.createView({
  left: 5,
  top: 26,
  width: 310,
  height: 44,
  backgroundImage: '../images/UI/bar_base.png'
});
icon_star = Titanium.UI.createView({
  left: 8,
  top: 8,
  width: 28,
  height: 28,
  backgroundImage: '../images/star/yellow.png'
});
status_bg.add(icon_star);
icon_pt = Titanium.UI.createView({
  left: 190,
  top: 8,
  width: 28,
  height: 28,
  backgroundImage: '../images/UI/point_icon.png'
});
status_bg.add(icon_pt);
status_day = Titanium.UI.createLabel({
  left: 44,
  top: 11,
  width: 116,
  height: 21,
  text: '5days / a week',
  color: '#000000'
});
status_bg.add(status_day);
status_pt = Titanium.UI.createLabel({
  left: 226,
  top: 11,
  width: 116,
  height: 21,
  text: '100pt'
});
status_bg.add(status_pt);
win.add(status_bg);
status_title = Titanium.UI.createLabel({
  left: 5,
  top: 5,
  width: 100,
  height: 21,
  text: 'your record:',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 12
  }
});
win.add(status_title);
title_analysis = Titanium.UI.createLabel({
  left: 5,
  top: 78,
  width: 100,
  height: 21,
  text: 'analysis:',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 12
  }
});
win.add(title_analysis);
unit_day = Titanium.UI.createLabel({
  left: 3,
  top: 321,
  width: 48,
  height: 28,
  font: {
    fontSize: 12
  },
  text: '(days)'
});
win.add(unit_day);
button_share = Titanium.UI.createButton({
  left: 69,
  top: 337,
  width: 182,
  height: 28,
  font: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 15
  },
  color: '#324f85',
  backgroundImage: '../images/button/share1.png'
});
win.add(button_share);
button_star = Titanium.UI.createView({
  left: 229,
  top: 313,
  width: 47,
  height: 44,
  backgroundImage: '../images/button/bonus_star.png'
});
win.add(button_star);