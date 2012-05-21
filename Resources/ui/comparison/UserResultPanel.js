var UserResultPanel;
UserResultPanel = (function() {
  function UserResultPanel() {
    this.view = Ti.UI.createView({
      width: 320
    });
    this.status_bg = Titanium.UI.createView({
      left: 5,
      top: 5,
      width: 310,
      height: 20,
      backgroundImage: 'images/UI/title_bg.png'
    });
    this.icon_star = Titanium.UI.createView({
      left: 8,
      top: 34,
      width: 28,
      height: 28,
      backgroundImage: 'images/star/4.png'
    });
    this.view.add(this.icon_star);
    this.icon_pt = Titanium.UI.createView({
      left: 190,
      top: 34,
      width: 28,
      height: 28,
      backgroundImage: 'images/UI/point_icon.png'
    });
    this.view.add(this.icon_pt);
    this.status_day = Titanium.UI.createLabel({
      left: 44,
      top: 37,
      width: 116,
      height: 21,
      text: '5days / a week',
      color: Const.FONTCOLOR
    });
    this.view.add(this.status_day);
    this.status_pt = Titanium.UI.createLabel({
      left: 226,
      top: 37,
      width: 116,
      height: 21,
      text: '100pt',
      color: Const.FONTCOLOR
    });
    this.view.add(this.status_pt);
    this.view.add(this.status_bg);
    this.status_title = Titanium.UI.createLabel({
      left: 8,
      top: 5,
      width: 100,
      height: 21,
      color: Const.FONTCOLOR,
      text: 'your record:',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 14
      }
    });
    this.view.add(this.status_title);
    this.analysis_bg = Titanium.UI.createView({
      left: 5,
      top: 78,
      width: 310,
      height: 20,
      backgroundImage: 'images/UI/title_bg.png'
    });
    this.view.add(this.analysis_bg);
    this.title_analysis = Titanium.UI.createLabel({
      left: 8,
      top: 78,
      width: 100,
      height: 21,
      color: Const.FONTCOLOR,
      text: 'analysis:',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 14
      }
    });
    this.view.add(this.title_analysis);
    this.unit_day = Titanium.UI.createLabel({
      left: 3,
      top: 321,
      width: 48,
      height: 28,
      color: Const.FONTCOLOR,
      font: {
        fontSize: 12
      },
      text: '(days)'
    });
    this.view.add(this.unit_day);
    this.button_share = Titanium.UI.createButton({
      left: 69,
      top: 337,
      width: 182,
      height: 28,
      font: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 15
      },
      color: '#324f85',
      backgroundImage: 'images/button/share1.png'
    });
    this.view.add(this.button_share);
    this.button_star = Titanium.UI.createView({
      left: 229,
      top: 313,
      width: 47,
      height: 44,
      backgroundImage: 'images/button/bonus_star.png'
    });
    this.view.add(this.button_star);
    return this.view;
  }
  return UserResultPanel;
})();
exports.UserResultPanel = UserResultPanel;