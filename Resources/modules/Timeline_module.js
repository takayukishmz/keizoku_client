var rightBotton, tt;
tt = {};
tt.UI = {};
tt.api = {};
tt.module = {};
rightBotton = {};
Titanium.include('Common_module.js');
(function() {
  tt.SelectedIndex = 0;
  tt.SelectedRow = '';
  tt.Stat = {
    ISLIKE: 'isLike',
    NOLIKE: 'noLike'
  };
  tt.UI.loadTimeline = function() {
    var params;
    info(info(Ti.App.timeline_type));
    rightBotton.title = Ti.App.timeline_type;
    if (!Ti.App.timeline_type) {
      rightBotton.title = 'new';
    }
    params = {
      category: Ti.App.timeline_type,
      user_id: Ti.App.user_id
    };
    API.callAPI('GET', 'getTimeline', params, function(json) {
      var data, i, isLike, reports, _ref;
      Ti.App.timeline_type = '';
      info('get api response');
      reports = json.reports;
      data = [];
      isLike = false;
      if (reports[0]) {
        for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          info('create row:' + i);
          data.push(tt.UI.createListViewRow(reports[i], isLike, false));
        }
      }
      tt.UI.tableView.data = data;
    });
  };
  tt.module.execLike = function(report_id, user_id, unDo) {
    var api, params;
    api = unDo ? "cancelLike" : "execLike";
    params = {
      user_id: user_id,
      report_id: report_id
    };
    API.callAPI('GET', api, params, function(json) {
      var row;
      if (json.success) {
        info('message ' + json.message);
        switch (json.message) {
          case TEXT.ALREADY_LIKED:
            info(TEXT.ALREADY_LIKED);
            row = tt.UI.createListViewRow(tt.SelectedRow, 0, tt.Stat.ISLIKE);
            tt.UI.tableView.updateRow(tt.SelectedIndex, row);
            break;
          case TEXT.NOT_LIKE_YET:
            info(TEXT.NOT_LIKE_YET);
            row = tt.UI.createListViewRow(tt.SelectedRow, 0, tt.Stat.NOLIKE);
            tt.UI.tableView.updateRow(tt.SelectedIndex, row);
            break;
          default:
            info('OK! no error');
        }
      } else {
        alert('server error');
      }
    });
  };
  tt.UI.createRowContent = function(report) {
    var color, comment, commentBox, dayCnt, dot, icon, isComment, message, name, ribon, row, star, starID, star_shadow, time;
    row = Titanium.UI.createTableViewRow(styles.row);
    row.report = report;
    icon = Titanium.UI.createImageView({
      left: 5,
      top: 5,
      width: 33,
      height: 33,
      borderRadius: 3
    });
    icon.image = report.picture_url ? report.picture_url : '../images/' + Const.DEFALT.USER;
    row.add(icon);
    name = Titanium.UI.createLabel({
      left: 85,
      top: -1,
      width: 200,
      height: 44,
      color: S.FONTCOLOR,
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    name.text = report.nickname;
    row.add(name);
    star_shadow = Titanium.UI.createView({
      left: 34,
      top: 0,
      width: 44,
      height: 44,
      backgroundImage: '../images/star/shadow.png'
    });
    star = Titanium.UI.createView({
      left: 9,
      top: 9,
      width: 27,
      height: 27
    });
    starID = Number(report.day_first) ? report.color_id : 0;
    star.backgroundImage = "../images/star/" + starID + ".png";
    if (!starID) {
      dot = Titanium.UI.createView({
        left: 52,
        top: 15,
        width: 11,
        height: 11,
        backgroundImage: "../images/UI/dot.png"
      });
      row.add(dot);
    } else {
      star_shadow.add(star);
      row.add(star_shadow);
    }
    time = Titanium.UI.createLabel({
      left: 77,
      bottom: 5,
      width: 222,
      height: 17,
      text: '~ min ago',
      textAlign: 'left',
      color: "#999",
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    row.add(time);
    message = Titanium.UI.createLabel({
      color: S.FONTCOLOR,
      left: 86,
      top: 30,
      width: 200,
      height: 44,
      text: 'learned 15 min & get 15pt',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    row.add(message);
    isComment = 1;
    if (isComment) {
      commentBox = Titanium.UI.createView({
        left: 63,
        top: 70,
        width: 200,
        height: 33,
        backgroundImage: '../images/UI/commentBox.png'
      });
      comment = Titanium.UI.createLabel({
        left: 12,
        top: 6,
        width: 192,
        height: 21,
        color: '#4c4c4c',
        font: {
          fontFamily: 'Helvetica',
          fontSize: 12
        }
      });
      comment.text = report.comment;
      commentBox.add(comment);
      row.add(commentBox);
    }
    if (!isComment) {
      row.height -= 33;
    }
    color = Number(report.day_first) ? report.color_id : 0;
    ribon = Titanium.UI.createView({
      right: -10,
      top: 5,
      width: 69,
      height: 38,
      backgroundImage: '../images/UI/ribon' + color + '.png'
    });
    dayCnt = Titanium.UI.createLabel({
      left: 20,
      top: 6,
      width: 100,
      height: 21,
      text: '4days',
      color: '#4c4c4c',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    ribon.add(dayCnt);
    row.add(ribon);
    return row;
  };
  tt.UI.createLikeButton = function() {
    var button, like_cnt, like_star;
    button = Titanium.UI.createButton({
      right: 5,
      bottom: 5,
      width: 28,
      height: 28,
      font: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 15
      },
      color: '#324f85',
      backgroundImage: '../images/button/like_bg.png',
      clickName: 'likebutton'
    });
    like_star = Titanium.UI.createView({
      left: 4.5,
      top: 4.5,
      width: 19,
      height: 19,
      backgroundImage: '../images/star/like.png',
      clickName: 'star'
    });
    button.add(like_star);
    like_cnt = Titanium.UI.createLabel({
      left: 29.5,
      top: 4.5,
      width: 19,
      height: 19,
      text: "0",
      color: '#b3b3b3'
    });
    button.add(like_cnt);
    return button;
  };
  tt.module.switchLikeFlag = function(pushFlag, isLike, responseFlg) {
    if (responseFlg) {
      if (responseFlg === tt.Stat.ISLIKE) {
        return isLike = true;
      } else {
        return isLike = false;
      }
    } else if (!pushFlag && isLike) {
      return isLike = true;
    } else if (pushFlag && !isLike) {
      return isLike = true;
    } else if (pushFlag && isLike) {
      isLike = false;
      return isLike;
    }
  };
  tt.UI.createListViewRow = function(report, pushLikeButton, responseFlg) {
    var button, isLike, likeCnt, likeStar, row;
    isLike = tt.module.switchLikeFlag(pushLikeButton, report.isLike, responseFlg);
    report.isLike = isLike;
    if (pushLikeButton) {
      if (isLike) {
        report.likeCount = Number(report.likeCount) + 1;
      } else {
        report.likeCount = Number(report.likeCount) - 1;
      }
    }
    row = tt.UI.createRowContent(report);
    button = tt.UI.createLikeButton();
    likeStar = button.children[0];
    likeCnt = button.children[1];
    likeCnt.setText(Number(report.likeCount));
    if (isLike) {
      info('already liked');
      button.width = 53;
      button.backgroundImage = '../images/button/like_bg_on.png';
      likeStar.backgroundImage = '../images/star/like_on.png';
      likeCnt.setColor('e6e6e6');
    } else if (Number(likeCnt.text)) {
      info('has like');
      button.width = 53;
      button.backgroundImage = '../images/button/like_bg.png';
      likeStar.backgroundImage = '../images/star/like.png';
      likeCnt.setColor('#b3b3b3');
    } else {
      info('no like');
      likeCnt.setVisible(false);
      button.width = 28;
      button.backgroundImage = '../images/button/like_bg.png';
      likeStar.backgroundImage = '../images/star/like.png';
    }
    row.add(button);
    return row;
  };
  tt.UI.setCreateNewButton = function(callback) {
    var activity;
    if (Titanium.Platform.osname === 'android') {
      activity = Titanium.Android.currentActivity;
      if (activity) {
        return acitivity.onCreateOptionsMenu = function(e) {
          var menu, menuItem;
          menu = e.menu;
          menuItem = menu.add({
            title: "再読込"
          });
          menuItem.setIcon("dark_refresh.png");
          return menuItem.addEventListener("click", function(e) {
            return callback;
          });
        };
      }
    } else {
      rightBotton = Titanium.UI.createButton({
        title: 'new'
      });
      win.rightNavButton = rightBotton;
      rightBotton.addEventListener('click', function() {
        info('click right button:' + callback);
        callback();
      });
    }
  };
  tt.execSupport = function(e, pjt_id, user_id) {
    var params;
    params = {
      user_id: Ti.App.user_id,
      pjt_id: pjt_id,
      support_user_id: user_id
    };
    API.callAPI('GET', 'execSupport', params, function(json) {
      var support_success;
      support_success = 1;
      if (support_success) {
        alert('success');
        info(JSON.stringify(e));
        info(tt.UI.tableView.Data[0]);
        e.source.text = done;
        e.rowData.text = done;
      } else {
        alert('false');
      }
    });
  };
  tt.module.rowEventController = function(e) {
    var pushLikeButton, row, unDo;
    switch (e.source.clickName) {
      case 'star':
        info_obj(e.source.clickName);
        break;
      case 'likebutton':
        tt.SelectedIndex = e.index;
        tt.SelectedRow = e.rowData.report;
        pushLikeButton = true;
        row = tt.UI.createListViewRow(e.rowData.report, pushLikeButton);
        tt.UI.tableView.updateRow(e.index, row);
        info('#################');
        info_obj(row.report);
        unDo = e.rowData.report.isLike ? true : false;
        tt.module.execLike(e.rowData.report.report_id, Ti.App.user_id, unDo);
        break;
      case 'icon':
        info('icon ckicked');
        break;
      default:
        info('window open');
        Titanium.UI.currentTab.open(tt.UI.createUserHomeView(e.rowData.report.user_id, {
          animated: true
        }));
    }
  };
})();