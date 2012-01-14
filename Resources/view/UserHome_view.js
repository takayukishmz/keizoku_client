var S, header_height, styles;
Titanium.include('SizeConst.js');
S = Const;
header_height = 75;
styles = {
  view: {
    height: header_height,
    width: S.WIDTH,
    top: 0,
    borderRadius: 0,
    backgroundGradient: {
      type: 'linear',
      colors: [
        {
          color: '#d4d4d4',
          position: 0.0
        }, {
          color: '#c4c4c4',
          position: 0.50
        }, {
          color: '#e4e4e4',
          position: 1.0
        }
      ]
    }
  },
  photo: {
    backgroundImage: 'images/user.png',
    top: S.MARGIN,
    left: S.MARGIN,
    width: S.ICON,
    height: S.ICON,
    clickName: 'photo'
  },
  user: {
    color: '#576996',
    font: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    left: S.MARGIN * 2 + S.ICON,
    top: S.MARGIN,
    height: S.USERNAME_H,
    width: S.BOX_W,
    clickName: 'user',
    text: 'user name'
  },
  point: {
    backgroundColor: '#fff',
    top: S.MARGIN + S.USERNAME_H,
    left: S.MARGIN * 2 + S.ICON,
    width: S.BOX_W,
    clickName: 'calendar',
    height: S.BOX_H
  },
  point_cnt: {
    color: '#222',
    font: {
      fontSize: fontSize,
      fontWeight: 'normal'
    },
    fontFamily: 'Arial',
    left: 0,
    top: 0,
    height: S.BOX_H,
    width: S.BOX_W,
    clickName: 'point',
    textAlign: 'center',
    text: '10pt'
  },
  day: {
    backgroundColor: '#fff',
    top: S.MARGIN + S.USERNAME_H,
    left: S.MARGIN * 3 + S.ICON + S.BOX_W,
    width: S.BOX_W,
    clickName: 'calendar',
    height: S.BOX_H
  },
  day_cnt: {
    color: '#222',
    font: {
      fontSize: fontSize,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 0,
    top: 0,
    height: S.BOX_H,
    width: S.BOX_W,
    textAlign: 'center',
    clickName: 'point',
    text: '12 days'
  },
  support: {
    backgroundColor: '#fff',
    top: S.MARGIN + S.USERNAME_H,
    left: S.MARGIN * 4 + S.ICON + S.BOX_W * 2,
    width: S.BOX_W,
    clickName: 'calendar',
    height: S.BOX_H
  },
  support_cnt: {
    color: '#222',
    font: {
      fontSize: fontSize,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 0,
    top: 0,
    height: S.BOX_H,
    width: S.BOX_W,
    textAlign: 'center',
    clickName: 'Support',
    text: '10/33'
  },
  title: {
    top: 8,
    left: 64,
    height: 16
  },
  info: {
    top: 32,
    left: 64,
    width: '256',
    height: 'auto'
  },
  icon: {
    top: 8,
    left: 8,
    width: '48',
    height: '48'
  },
  row_height: 100
};