var item, message, point_base, point_number, point_title, share_base, share_number, share_title, styles, title;
Titanium.include('Const.js');
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
    backgroundImage: '../images/UI/bar_black.png'
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
    backgroundImage: '../images/UI/bar_white.png'
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
    backgroundImage: '../images/UI/bar_black.png'
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
    backgroundImage: '../images/star/yellow.png'
  }
};
title = Titanium.UI.createLabel(styles.title);
win.add(title);
message = Titanium.UI.createLabel(styles.message);
win.add(message);
point_base = Titanium.UI.createView(styles.point_base);
point_title = Titanium.UI.createLabel(styles.point_title);
point_base.add(point_title);
point_number = Titanium.UI.createLabel(styles.point_number);
point_base.add(point_number);
win.add(point_base);
share_base = Titanium.UI.createView(styles.share_base);
share_title = Titanium.UI.createLabel(styles.share_title);
share_base.add(share_title);
share_number = Titanium.UI.createLabel(styles.share_number);
share_base.add(share_number);
win.add(share_base);
item = Titanium.UI.createView(styles.item);
win.add(item);