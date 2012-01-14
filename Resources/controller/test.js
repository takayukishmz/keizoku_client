var button_checkin, challenge_count, challenge_text, checkin_question, checkin_text, day_count, day_text, icon, name, score_count, score_text, star0, star0_text, star1, star1_text, star2, star2_text, star3, star3_text, star4, star4_text, star5, star5_text, star6, star6_text, status_base, view32, view33, view34, week_base, week_title, win;
win = Titanium.UI.currentWindow;
win.backgroundImage = '../images/UI/base_pink.png';
win.barColor = '#1e8dd7ff';
Titanium.include('../Util.js');
Titanium.include('../modules/CheckIn_module.js');
Titanium.include('../styles/CheckIn_style.js');
icon = Titanium.UI.createView({
  left: 5,
  top: 5,
  width: 44,
  height: 44,
  backgroundImage: '../images/user.png'
});
win.add(icon);
name = Titanium.UI.createLabel({
  left: 57,
  top: 16,
  width: 62,
  height: 21,
  text: 'person1',
  color: '#000000'
});
win.add(name);
checkin_question = Titanium.UI.createLabel({
  left: 5,
  top: 237,
  width: 114,
  height: 21,
  text: 'Did you learn?'
});
win.add(checkin_question);
status_base = Titanium.UI.createView({
  left: 5,
  top: 57,
  width: 310,
  height: 79,
  backgroundImage: '../images/UI/status_base.png'
});
day_text = Titanium.UI.createLabel({
  left: 30,
  top: 47,
  width: 42,
  height: 21,
  text: 'days'
});
status_base.add(day_text);
day_count = Titanium.UI.createLabel({
  left: 30,
  top: 10,
  width: 42,
  height: 21,
  text: '15'
});
status_base.add(day_count);
score_count = Titanium.UI.createLabel({
  left: 134,
  top: 10,
  width: 42,
  height: 21,
  text: '100'
});
status_base.add(score_count);
challenge_count = Titanium.UI.createLabel({
  left: 237,
  top: 10,
  width: 42,
  height: 21,
  text: '20'
});
status_base.add(challenge_count);
score_text = Titanium.UI.createLabel({
  left: 133,
  top: 47,
  width: 45,
  height: 21,
  text: 'Score'
});
status_base.add(score_text);
challenge_text = Titanium.UI.createLabel({
  left: 220,
  top: 47,
  width: 77,
  height: 21,
  text: 'Challenge'
});
status_base.add(challenge_text);
view32 = Titanium.UI.createView({
  left: 9,
  top: 39,
  width: 83,
  height: 6,
  backgroundColor: '#007cff'
});
status_base.add(view32);
view33 = Titanium.UI.createView({
  left: 113,
  top: 39,
  width: 83,
  height: 6,
  backgroundColor: '#007cff'
});
status_base.add(view33);
view34 = Titanium.UI.createView({
  left: 216,
  top: 39,
  width: 83,
  height: 6,
  backgroundColor: '#007cff'
});
status_base.add(view34);
win.add(status_base);
week_base = Titanium.UI.createButton({
  left: 5,
  top: 152,
  width: 310,
  height: 63,
  backgroundImage: '../images/UI/week_base.png'
});
week_title = Titanium.UI.createLabel({
  left: 5,
  top: 0,
  width: 114,
  height: 20,
  text: 'This Week:',
  color: '#999',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 12
  }
});
week_base.add(week_title);
star0_text = Titanium.UI.createLabel({
  left: 36,
  top: 41,
  width: 26,
  height: 22,
  text: 'Mon',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star0_text);
star1_text = Titanium.UI.createLabel({
  left: 71,
  top: 41,
  width: 26,
  height: 22,
  text: 'Tues',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star1_text);
star2_text = Titanium.UI.createLabel({
  left: 105,
  top: 41,
  width: 26,
  height: 22,
  text: 'Wed',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star2_text);
star3_text = Titanium.UI.createLabel({
  left: 139,
  top: 41,
  width: 26,
  height: 22,
  text: 'Thurs',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star3_text);
star4_text = Titanium.UI.createLabel({
  left: 176,
  top: 41,
  width: 26,
  height: 22,
  text: 'Fri',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star4_text);
star5_text = Titanium.UI.createLabel({
  left: 210,
  top: 41,
  width: 26,
  height: 22,
  text: 'Sat',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star5_text);
star6_text = Titanium.UI.createLabel({
  left: 246,
  top: 41,
  width: 26,
  height: 22,
  text: 'Sun',
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
week_base.add(star6_text);
star0 = Titanium.UI.createView({
  left: 36,
  top: 17,
  width: 26,
  height: 26,
  backgroundImage: '../images/star/red.png'
});
week_base.add(star0);
star1 = Titanium.UI.createView({
  left: 71,
  top: 17,
  width: 26,
  height: 26
});
week_base.add(star1);
star2 = Titanium.UI.createView({
  left: 105,
  top: 17,
  width: 26,
  height: 26,
  backgroundImage: '../images/star/yellow.png'
});
week_base.add(star2);
star3 = Titanium.UI.createView({
  left: 139,
  top: 17,
  width: 26,
  height: 26,
  backgroundImage: '../images/star/aqua.png'
});
week_base.add(star3);
star4 = Titanium.UI.createView({
  left: 175,
  top: 17,
  width: 26,
  height: 26
});
week_base.add(star4);
star5 = Titanium.UI.createView({
  left: 210,
  top: 17,
  width: 26,
  height: 26
});
week_base.add(star5);
star6 = Titanium.UI.createView({
  left: 246,
  top: 17,
  width: 26,
  height: 26,
  backgroundImage: '../images/star/green.png'
});
week_base.add(star6);
win.add(week_base);
button_checkin = Titanium.UI.createButton({
  left: 10,
  top: 266,
  width: 300,
  height: 63,
  font: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 15
  },
  color: '#324f85',
  backgroundImage: '../images/button/checkin4.png'
});
button_checkin.addEventListener('click', function(e) {
  Ti.API.info('click checkin');
  tt.UI.createNewProjectView();
});
checkin_text = Titanium.UI.createLabel({
  left: 0,
  top: 22,
  width: 300,
  height: 22,
  text: 'Check in & Get Star!',
  color: "#fff",
  textAlign: 'center',
  font: {
    fontFamily: 'Helvetica',
    fontSize: 24
  }
});
week_base.add(star4_text);
button_checkin.add(checkin_text);
win.add(button_checkin);