var Const, STYLE;
Titanium.include('../TextConst.js');
Const = {
  COLOR_MAIN: '#ddd',
  rowColor: "#f6f6f6",
  rowColor_black: "#505050",
  backgroundColor: '#fff',
  barColor: '#00ff11',
  barImage: '../images/titlebar_red.png',
  MARGIN: 5,
  ICON: 44,
  WIDTH: 320,
  HEIGHT: 480,
  USERNAME_H: 20,
  BOX_H: 20,
  BOX_W: 80,
  Device: {
    Width: 320,
    Height: 480
  },
  TITTLE_H: 20,
  FONT: function() {
    if (Titanium.Platform.name === 'android') {
      return 14;
    } else {
      return 16;
    }
  }
};
STYLE = {
  BIGPHOTO: {
    top: Const.MARGIN,
    left: Const.MARGIN,
    width: Const.ICON * 1.5,
    height: Const.ICON * 1.5,
    backgroundImage: '../images/user.png',
    clickName: 'bigphoto',
    borderRadius: 4
  },
  PHOTO: {
    top: Const.MARGIN,
    left: Const.MARGIN,
    width: Const.ICON,
    height: Const.ICON,
    backgroundImage: '',
    clickName: 'photo',
    borderRadius: 4
  },
  MINIPHOTO: {
    top: Const.MARGIN,
    left: Const.MARGIN,
    width: Const.ICON / 2,
    height: Const.ICON / 2,
    backgroundImage: '',
    clickName: 'miniphoto',
    borderRadius: 4
  },
  BIGSTAR: {
    top: Const.MARGIN,
    left: 0,
    width: Const.ICON,
    height: Const.ICON,
    backgroundImage: '../images/star.png',
    clickName: 'bigstar'
  }
};
win.backgroundImage = '../images/UI/base_pink.png';
win.barColor = Const.COLOR_MAIN;