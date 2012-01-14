var ICON, S, box_h, box_w, height_middle, height_profile, height_row, height_top, styles;
Titanium.include('Const.js');
S = Const;
ICON = S.ICON * 1.5;
box_h = ICON * 2 / 3;
box_w = ICON * 4 / 3;
height_top = S.MARGIN * 2 + ICON;
height_middle = S.MARGIN * 2 + S.ICON;
height_row = S.MARGIN * 2 + S.ICON * 5 / 3;
height_profile = S.MARGIN * 3 + S.ICON * 2;
styles = {
  row_top: {
    height: height_top,
    backgroundColor: S.rowColor,
    hasChild: true
  },
  owner: {
    top: S.MARGIN,
    left: S.MARGIN * 2 + ICON,
    height: ICON / 3,
    font: {
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    }
  },
  count_box: {
    top: ICON / 3 + S.MARGIN,
    left: S.MARGIN * 2 + ICON,
    width: box_w,
    height: box_h,
    borderRadius: 3,
    backgroundColor: '#555'
  },
  member_box: {
    top: ICON / 3 + S.MARGIN,
    left: S.MARGIN * 4 + ICON + box_w,
    width: box_w,
    height: box_h,
    borderRadius: 3,
    backgroundColor: '#555'
  },
  count_num: {
    top: S.MARGIN,
    left: 0,
    width: box_w,
    height: box_h / 2,
    textAlign: 'center',
    text: '1',
    color: '#fff',
    font: {
      fontSize: 15,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    }
  },
  count_text: {
    top: box_h / 2,
    left: 0,
    width: box_w,
    height: box_h / 2,
    textAlign: 'center',
    text: 'counts',
    font: {
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    }
  },
  base_black: {
    height: height_top,
    backgroundColor: S.rowColor_black,
    clickName: "top"
  },
  /* middle */
  base_gray: {
    height: height_middle,
    hasChild: true,
    backgroundColor: S.rowColor,
    clickName: 'middle'
  },
  pjt_name: {
    top: S.MARGIN,
    left: S.ICON + S.MARGIN * 2,
    height: S.ICON / 2,
    font: {
      fontSize: 14,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    width: S.Device.Width - S.ICON * 3 + S.MARGIN,
    clickName: 'middle'
  },
  /* listView */
  header: {
    height: 20,
    text: 'Timeline',
    backgroundColor: '#ddd'
  },
  header_text: {
    height: 20,
    text: 'Timeline'
  },
  /* row */
  row: {
    height: height_row,
    backgroundColor: S.rowColor,
    clickName: 'timeline'
  },
  counter: {
    top: S.MARGIN,
    left: S.MARGIN,
    width: S.ICON,
    height: S.ICON,
    clickName: 'counter'
  },
  counter_text: {
    text: '1',
    fontsize: 25,
    textAlign: 'center',
    clickName: 'counter'
  },
  star: {
    bottom: S.MARGIN,
    left: 0,
    width: S.ICON / 3,
    height: S.ICON / 3,
    backgroundImage: '../images/star.png'
  },
  message: {
    top: S.MARGIN,
    left: S.MARGIN * 2 + S.ICON,
    height: S.ICON * 2 / 3,
    width: 320 - (S.MARGIN * 3 + S.ICON),
    font: {
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    }
  },
  base_profile: {
    height: height_profile,
    backgroundColor: S.rowColor,
    clickName: 'middle'
  }
};