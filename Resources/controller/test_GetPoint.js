var item, l29, l30, l32, l33, l35, l36, message, point_base, point_number, point_title, share_base, share_number, share_title, title, view28, view31, view34, win;
win = Titanium.UI.currentWindow;
Titanium.include('../Util.js');
Titanium.include('../lib/ServerAPI.js');
Titanium.include('../styles/GetPoint_style.js');
Titanium.include('../modules/GetPoint_module.js');
title = Titanium.UI.createLabel({
  left: 20,
  top: 7,
  width: 80,
  height: 21,
  text: 'Good Job!',
  color: '#000000'
});
win.add(title);
message = Titanium.UI.createLabel({
  left: 20,
  top: 122,
  width: 262,
  height: 21,
  text: '2 times today. you get yellow star.'
});
win.add(message);
point_base = Titanium.UI.createView({
  left: 5,
  top: 147,
  width: 310,
  height: 33,
  backgroundImage: '../images/UI/bar_black.png'
});
point_title = Titanium.UI.createLabel({
  left: 14,
  top: 4,
  width: 46,
  height: 21,
  text: 'points',
  color: "fff"
});
point_base.add(point_title);
point_number = Titanium.UI.createLabel({
  left: 257,
  top: 4,
  width: 42,
  height: 21,
  text: '15pt',
  color: "fff"
});
point_base.add(point_number);
win.add(point_base);
view28 = Titanium.UI.createView({
  left: 5,
  top: 185,
  width: 310,
  height: 33,
  backgroundImage: '../images/UI/bar_white.png'
});
l29 = Titanium.UI.createLabel({
  left: 14,
  top: 4,
  width: 46,
  height: 21,
  text: 'points'
});
view28.add(l29);
l30 = Titanium.UI.createLabel({
  left: 257,
  top: 4,
  width: 42,
  height: 21,
  text: '15pt'
});
view28.add(l30);
win.add(view28);
view31 = Titanium.UI.createView({
  left: 5,
  top: 220,
  width: 310,
  height: 33,
  backgroundImage: '../images/UI/bar_white.png'
});
l32 = Titanium.UI.createLabel({
  left: 14,
  top: 4,
  width: 46,
  height: 21,
  text: 'points'
});
view31.add(l32);
l33 = Titanium.UI.createLabel({
  left: 257,
  top: 4,
  width: 42,
  height: 21,
  text: '15pt'
});
view31.add(l33);
win.add(view31);
view34 = Titanium.UI.createView({
  left: 5,
  top: 255,
  width: 310,
  height: 33,
  backgroundImage: '../images/UI/bar_white.png'
});
l35 = Titanium.UI.createLabel({
  left: 14,
  top: 4,
  width: 46,
  height: 21,
  text: 'points'
});
view34.add(l35);
l36 = Titanium.UI.createLabel({
  left: 257,
  top: 4,
  width: 42,
  height: 21,
  text: '15pt'
});
view34.add(l36);
win.add(view34);
share_base = Titanium.UI.createView({
  left: 5,
  top: 293,
  width: 310,
  height: 33,
  backgroundImage: '../images/UI/bar_black.png'
});
share_title = Titanium.UI.createLabel({
  left: 14,
  top: 4,
  width: 46,
  height: 21,
  text: 'points',
  color: "fff"
});
share_base.add(share_title);
share_number = Titanium.UI.createLabel({
  left: 257,
  top: 4,
  width: 42,
  height: 21,
  text: '15pt',
  color: "fff"
});
share_base.add(share_number);
win.add(share_base);
item = Titanium.UI.createView({
  left: 116,
  top: 33,
  width: 88,
  height: 88,
  backgroundColor: '#007cff'
});
win.add(item);