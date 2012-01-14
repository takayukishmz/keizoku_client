var S, height_middle, height_top, styles;
Titanium.include('Const.js');
S = Const;
height_top = S.MARGIN * 2 + S.ICON;
height_middle = S.MARGIN * 2 + S.ICON;
styles = {
  base_top: {
    height: height_top,
    backgroundColor: '#505050'
  },
  base_middle: {
    height: height_middle,
    hasChild: true,
    backgroundColor: S.rowColor
  },
  row: {
    height: S.MARGIN * 2 + S.ICON * 4 / 3,
    backgroundColor: S.rowColor
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
  photo: {
    backgroundImage: '../images/user.png',
    top: S.MARGIN,
    left: S.MARGIN,
    width: S.ICON,
    height: S.ICON,
    clickName: 'photo'
  },
  info: {
    color: '#E9EDED',
    font: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    left: S.MARGIN * 2 + S.ICON,
    top: S.MARGIN,
    height: S.ICON,
    width: 320 - S.MARGIN * 2 - S.ICON,
    clickName: 'project_info',
    text: 'this space is for explaining this project.Lets join us!'
  },
  checkin: {
    backgroundColor: '#800818',
    borderRadius: 4,
    top: S.MARGIN * 2 + S.ICON,
    right: S.MARGIN,
    width: S.ICON,
    height: S.ICON,
    clickName: 'button'
  },
  checkin_text: {
    color: '#E9EDED',
    font: {
      fontSize: 20,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 0,
    top: 0,
    height: S.ICON,
    width: S.ICON,
    clickName: 'rank',
    text: 'join!',
    textAlign: 'center'
  },
  member: {
    backgroundColor: '#E9EDED',
    borderColor: '#464646',
    borderRadius: 2,
    top: S.MARGIN * 3 + S.ICON * 2,
    left: 0,
    width: 320. / 2,
    height: S.ICON,
    clickName: 'member'
  },
  member_text: {
    color: '#000',
    font: {
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 0,
    top: 0,
    height: S.ICON,
    width: 320. / 2,
    clickName: 'rank',
    text: 'member',
    textAlign: 'center'
  },
  activity: {
    backgroundColor: '#E9EDED',
    borderColor: '#464646',
    borderRadius: 2,
    top: S.MARGIN * 3 + S.ICON * 2,
    right: 0,
    width: 320. / 2,
    height: S.ICON,
    clickName: 'activity'
  },
  activity_text: {
    color: '#000',
    font: {
      fontSize: 12,
      fontWeight: 'normal',
      fontFamily: 'Arial'
    },
    left: 0,
    top: 0,
    height: S.ICON,
    width: 320. / 2,
    clickName: 'rank',
    text: 'activity',
    textAlign: 'center'
  }
};