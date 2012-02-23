var S, header_height, row_height, styles;
Titanium.include('Const.js');
S = Const;
header_height = S.MARGIN * 2 + 22;
row_height = 133;
styles = {
  header_height: header_height,
  bonus_box: {
    top: S.MARGIN,
    left: S.MARGIN,
    width: 300,
    height: 22,
    backgroundColor: '#333',
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#999'
  },
  bonusbar: {
    top: 4,
    left: 4,
    width: 200,
    height: 16,
    backgroundColor: S.barColor
  },
  header: {
    height: S.ICON * 3 / 4,
    opacity: 0.8
  },
  counter: {
    top: 0,
    left: S.MARGIN,
    backgroundImage: '../images/star/red.png',
    width: S.ICON * 3 / 4,
    height: S.ICON * 3 / 4,
    clickName: 'counter'
  },
  counter_text: {
    text: '1',
    fontsize: 25,
    width: S.ICON * 3 / 4,
    height: S.ICON * 3 / 4,
    textAlign: 'center',
    clickName: 'counter',
    color: '#222'
  },
  title: {
    backgroundcolor: '#fff',
    top: 0,
    left: S.MARGIN + S.ICON * 3 / 4,
    height: S.ICON * 3 / 4,
    width: 'auto',
    clickName: 'user',
    text: ''
  },
  title_text: {
    color: S.FONTCOLOR,
    font: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: 0,
    left: 0,
    height: S.ICON * 3 / 4,
    width: 'auto',
    clickName: 'title_text',
    text: ''
  },
  /* row */
  row: {
    height: row_height,
    backgroundColor: S.rowColor,
    backgroundImage: '../images/UI/' + Const.ROWBACKGROUND,
    selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
  },
  view: {
    height: header_height,
    width: S.WIDTH,
    top: 0,
    clickName: 'view',
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
  icon: {
    top: S.MARGIN,
    left: S.MARGIN,
    width: S.ICON * 3 / 4,
    height: S.ICON * 3 / 4,
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
  user: {
    color: S.FONTCOLOR,
    font: {
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: S.MARGIN,
    left: S.MARGIN * 3 / 2 + S.ICON,
    height: 22,
    width: 100,
    clickName: 'user',
    text: 'name'
  },
  comment: {
    backgroundcolor: '#ddd',
    top: S.MARGIN + S.ICON * 3 / 4,
    left: S.MARGIN * 3 / 2 + S.ICON,
    height: 30,
    width: 200,
    clickName: 'user',
    text: ''
  },
  comment_text: {
    color: S.FONTCOLOR,
    font: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    top: 1,
    left: 1,
    height: 20,
    width: 190,
    clickName: 'comment_text',
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