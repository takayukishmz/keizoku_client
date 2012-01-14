var S, base_height, base_width, styles;
Titanium.include('Const.js');
S = Const;
base_height = 44;
base_width = 232;
styles = {
  case1: {
    top: 0,
    left: 0,
    width: base_width,
    height: base_height,
    text: 'やることが決まっている方は'
  },
  gocreate: {
    top: base_height + S.MARGIN,
    left: base_height,
    width: base_width,
    height: base_height,
    borderRadius: 2,
    title: '作成する',
    clickName: 'gocreate'
  },
  case2: {
    top: (base_height + S.MARGIN) * 2,
    left: 0,
    width: 200,
    height: base_height,
    text: '他の人のをマネする方は'
  },
  gojoin: {
    top: (base_height + S.MARGIN) * 3,
    left: base_height,
    width: base_width,
    height: base_height,
    borderRadius: 2,
    title: '参加する',
    clickName: 'gojoin'
  },
  case3: {
    top: (base_height + S.MARGIN) * 4,
    left: 0,
    width: base_width,
    height: base_height,
    text: 'アプリからの方は'
  },
  goapp: {
    top: (base_height + S.MARGIN) * 5,
    left: base_height,
    width: base_width,
    height: base_height,
    borderRadius: 2,
    title: 'アプリから探す',
    clickName: 'goapp'
  }
};