var S, header_height, row_height, styles;
Titanium.include('Const.js');
S = Const;
header_height = 0;
row_height = S.ICON + S.MARGIN * 4;
styles = {
  header_height: header_height,
  /* row */
  row: {
    height: row_height,
    hasChild: true,
    backgroundColor: S.rowColor
  },
  view: {
    height: header_height,
    width: S.WIDTH,
    top: 0,
    clickName: 'view',
    borderRadius: 0
  },
  icon: {
    backgroundImage: '../images/user.png',
    top: S.MARGIN * 2,
    left: S.MARGIN,
    width: S.ICON,
    height: S.ICON,
    borderRadius: 4,
    clickName: 'icon'
  },
  support: {
    backgroundcolor: '#fff',
    bottom: S.MARGIN,
    left: S.MARGIN * 2 + S.ICON,
    height: S.TITTLE_H,
    width: 200,
    clickName: 'user',
    text: ''
  },
  support_text: {
    color: 'gray',
    font: {
      fontSize: 11,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: 1,
    left: 1,
    height: S.TITTLE_H - 2,
    width: 190,
    clickName: 'support_text',
    text: 'supporter:5'
  },
  developer: {
    color: '#555',
    font: {
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: S.MARGIN,
    left: S.MARGIN * 2 + S.ICON,
    height: 22,
    width: 100,
    clickName: 'user',
    text: 'name'
  },
  title: {
    color: '#555',
    font: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: S.MARGIN * 2 + 11,
    left: S.MARGIN * 2 + S.ICON,
    height: 22,
    width: 190,
    clickName: 'title',
    text: ''
  },
  support_button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    bottom: S.MARGIN,
    right: S.MARGIN,
    width: 44,
    height: 22,
    clickName: 'button'
  },
  support_button_text: {
    color: '#fff',
    font: {
      fontSize: 9,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 1,
    top: 1,
    height: 20,
    width: 42,
    clickName: 'support_text',
    text: 'support',
    textAlign: 'center'
  }
};