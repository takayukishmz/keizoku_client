var S, styles;
Titanium.include('Const.js');
S = Const;
styles = {
  text: {
    color: '#336699',
    height: 30,
    top: 5,
    left: 5,
    width: 250,
    hintText: 'hint',
    value: 'hoge',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE
  },
  time_content: {
    color: '#336699',
    height: 30,
    top: 5,
    left: 5,
    width: 250,
    hintText: 'hint',
    value: '15min',
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
    labels: TEXT.TERM_ARRAY
  },
  term_bar: {
    backgroundColor: '#336699',
    left: 0,
    style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height: 40,
    width: 300,
    index: 0
  },
  switch_tw: {
    value: false,
    top: 5,
    right: 5
  },
  switch_fb: {
    value: false,
    top: 5,
    right: 5
  }
};