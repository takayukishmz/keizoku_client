var CheckinVew;
CheckinVew = {};
CheckinVew = {
  creatView: function(project) {
    var checkin, checkin_text, newWindow, view;
    alert("createCompleteWindow");
    newWindow = Ti.UI.createWindow({
      title: '~ project',
      backgroundColor: '#fff'
    });
    view = Titanium.UI.createView({
      top: 0,
      height: 480,
      backgroundColor: '#ccc'
    });
    view.add(Titanium.UI.createImageView({
      image: 'images/user.png',
      top: 8,
      left: 8,
      width: 72,
      height: 72
    }));
    view.add(Titanium.UI.createLabel({
      top: 8,
      left: 88,
      right: 8,
      height: 20,
      text: project.pjt_name
    }));
    view.add(Titanium.UI.createView({
      top: 36,
      left: 88,
      height: 44,
      right: 8,
      backgroundColor: '#fff'
    }));
    view.add(Titanium.UI.createLabel({
      top: 36,
      left: 88,
      right: 8,
      height: 44,
      text: project.result,
      textAlign: 'center',
      font: {
        fontSize: 20
      }
    }));
    checkin = Ti.UI.createView({
      backgroundColor: '#3DFF00',
      borderRadius: 4,
      top: 88,
      left: 8,
      width: 300,
      height: 40,
      clickName: 'button'
    });
    checkin_text = Ti.UI.createLabel({
      color: '#222',
      font: {
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Arial'
      },
      left: 0,
      top: 0,
      height: 40,
      width: 300,
      clickName: 'rank',
      text: 'check in ',
      textAlign: 'center'
    });
    checkin.addEventListener('click', function(e) {
      return Ti.API.info('click checkin');
    });
    checkin.add(checkin_text);
    view.add(checkin);
    return newWindow.add(view);
  }
};