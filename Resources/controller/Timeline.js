var BaseWindow, LikeButton, Timeline, styles;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
Ti.API.info('timeline.js');
/* const */
Ti.App.timeline_type = '';
Ti.App.update_tl = true;
/* UI */
LikeButton = require('ui/LikeButton').LikeButton;
styles = require('styles/Timeline_style').styles;
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
Timeline = (function() {
  __extends(Timeline, BaseWindow);
  Timeline.prototype.Stat = {
    ISLIKE: 'isLike',
    NOLIKE: 'noLike'
  };
  function Timeline() {
    this.rowEventController = __bind(this.rowEventController, this);
    this.createListViewRow = __bind(this.createListViewRow, this);
    this.loadTimeline = __bind(this.loadTimeline, this);
    this.setEvent = __bind(this.setEvent, this);    this.SelectedIndex = 0;
    this.SelectedRow = '';
    this.rowData = [];
    Timeline.__super__.constructor.call(this, {
      title: 'timeline'
    });
    return this.win;
  }
  Timeline.prototype.setView = function() {
    this.view = Ti.UI.createView();
    this.view.backgroundImage = Const.BACKGROUND;
    this.tableview = Titanium.UI.createTableView({
      backgroundColor: 'transparent'
    });
    this.view.add(this.tableview);
    return this.win.add(this.view);
  };
  Timeline.prototype.setButton = function() {
    return $.Util.setRightButton(this.win, function() {
      var w;
      if (Ti.App.selectDialog_flg) {
        return;
      }
      Ti.App.selectDialog_flg = true;
      w = Titanium.UI.createWindow({
        backgroundColor: '#336699',
        borderWidth: 2,
        borderColor: '#999',
        height: 400,
        width: 300,
        borderRadius: 5,
        opacity: 0.92,
        url: '../controller/SelectTimeline.js'
      });
      $.Util.create2DMatrixDialog(w);
    }, {
      title: 'Filter',
      width: 10,
      height: 10,
      color: 'black'
    });
  };
  Timeline.prototype.setEvent = function() {
    /* call API */
    var lastDistance;
    this.win.addEventListener('focus', __bind(function() {
      info('focus - Timeline');
      if (Ti.App.update_tl) {
        Ti.App.update_tl = false;
        alert('focus');
        return this.loadTimeline();
      }
    }, this));
    /* eventListener */
    this.tableview.addEventListener('click', __bind(function(e) {
      info(JSON.stringify(e));
      info('timeline -- table event');
      this.rowEventController(e);
    }, this));
    lastDistance = 0;
    return this.view.addEventListener('scroll', __bind(function(e) {
      var distance, height, offset, theEnd, total;
      offset = e.contentOffset.y;
      height = e.size.height;
      total = offset + height;
      theEnd = e.contentSize.height;
      distance = theEnd - total;
      if (distance < lastDistance) {
        return info_obj(e);
      }
    }, this));
  };
  Timeline.prototype.loadTimeline = function() {
    var params;
    params = {
      user_id: Ti.App.user_id,
      top_report_id: 100000000000,
      top_date: 100000000000,
      bottom_report_id: 1,
      bottom_date: 1
    };
    $.API.callAPI('GET', 'getTimeline', params, __bind(function(json) {
      var data, i, isLike, reports, _ref;
      Ti.App.timeline_type = '';
      info('get api response');
      reports = json.lists;
      data = [];
      isLike = false;
      if (reports[0]) {
        for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          info('create row:' + i);
          this.rowData.push(reports[i]);
          info('rowData ' + this.rowData.length);
          data.push(this.createListViewRow(reports[i], isLike, false));
        }
      }
      this.tableview.data = data;
    }, this));
  };
  Timeline.prototype.insertAfter = function() {
    var params;
    info('#------------------ INSERT AFTER ------------------#');
    params = {
      user_id: Ti.App.user_id,
      top_report_id: 100000000000,
      top_date: 100000000000,
      bottom_report_id: 1,
      bottom_date: 1
    };
    $.API.callAPI('GET', 'getTimeline', params, __bind(function(json) {
      var i, index, isLike, reports, row, _ref;
      Ti.App.timeline_type = '';
      info('get api response');
      reports = json.lists;
      isLike = false;
      if (reports[0]) {
        for (i = 0, _ref = reports.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          index = this.rowData.length;
          row = this.createListViewRow(reports[i], isLike, false);
          this.tableview.insertRowAfter(index - 1, row, {
            animationStyle: Titanium.UI.iPhone.RowAnimationStyle.DOWN
          });
        }
      }
    }, this));
  };
  Timeline.prototype.execLike = function(report_id, user_id, unDo) {
    var api, params;
    info('--------------------execLike--------------------');
    api = unDo ? "cancelLike" : "execLike";
    params = {
      user_id: user_id,
      report_id: report_id
    };
    $.API.callAPI('GET', api, params, function(json) {
      var row;
      if (json.success) {
        info('message ' + json.message);
        switch (json.message) {
          case TEXT.ALREADY_LIKED:
            info(TEXT.ALREADY_LIKED);
            row = this.createListViewRow(this.SelectedRow, 0, this.Stat.ISLIKE);
            this.tableview.updateRow(this.SelectedIndex, row);
            break;
          case TEXT.NOT_LIKE_YET:
            info(TEXT.NOT_LIKE_YET);
            row = this.createListViewRow(this.SelectedRow, 0, this.Stat.NOLIKE);
            this.tableview.updateRow(this.SelectedIndex, row);
            break;
          default:
            info('OK! no error');
        }
      } else {
        alert('server error');
      }
    });
  };
  Timeline.prototype.createRowContent = function(report) {
    var color, comment, commentBox, dayCnt, dot, icon, isComment, message, name, ribon, row, star, starID, star_shadow, time;
    info('createRowContent');
    row = Titanium.UI.createTableViewRow(styles.row);
    row.report = report;
    icon = Titanium.UI.createImageView({
      left: 5,
      top: 5,
      width: 33,
      height: 33,
      borderRadius: 3
    });
    icon.image = report.picture_url ? report.picture_url : 'images/' + Const.DEFALT.USER;
    row.add(icon);
    name = Titanium.UI.createLabel({
      left: 85,
      top: -1,
      width: 200,
      height: 44,
      color: Const.FONTCOLOR,
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
      backgroundImage: 'images/star/shadow.png'
    });
    star = Titanium.UI.createView({
      left: 9,
      top: 9,
      width: 27,
      height: 27
    });
    starID = Number(report.day_first) ? report.color_id : 0;
    star.backgroundImage = "images/star/" + starID + ".png";
    if (!starID) {
      dot = Titanium.UI.createView({
        left: 52,
        top: 15,
        width: 11,
        height: 11,
        backgroundImage: "images/UI/dot.png"
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
      color: Const.FONTCOLOR,
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
        backgroundImage: 'images/UI/commentbox.png'
      });
      comment = Titanium.UI.createLabel({
        left: 15,
        top: 4,
        width: 190,
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
    color = Number(report.day_first) ? report.color_id : 3;
    ribon = Titanium.UI.createView({
      right: -10,
      top: 5,
      width: 64,
      height: 32,
      backgroundImage: 'images/UI/ribon/' + color + '.png'
    });
    dayCnt = Titanium.UI.createLabel({
      left: 12,
      top: 4,
      width: 100,
      height: 24,
      text: '4 days',
      color: '#fff',
      font: {
        fontFamily: 'Helvetica',
        fontSize: 12
      }
    });
    ribon.add(dayCnt);
    row.add(ribon);
    return row;
  };
  Timeline.prototype.createListViewRow = function(report, pushLikeButton, responseFlg) {
    var isLike, likeButton, row;
    info('createListViewRow');
    likeButton = new LikeButton();
    isLike = likeButton.calcLikeFlag(pushLikeButton, report.isLike, responseFlg);
    report.isLike = isLike;
    if (pushLikeButton) {
      if (isLike) {
        report.likeCount = Number(report.likeCount) + 1;
      } else {
        report.likeCount = Number(report.likeCount) - 1;
      }
    }
    likeButton.likeCnt.setText(Number(report.likeCount));
    likeButton.switchView(isLike);
    row = this.createRowContent(report);
    row.add(likeButton.button);
    return row;
  };
  Timeline.prototype.rowEventController = function(e) {
    var pushLikeButton, row, unDo;
    switch (e.source.clickName) {
      case 'likebutton':
        this.SelectedIndex = e.index;
        this.SelectedRow = e.rowData.report;
        pushLikeButton = true;
        row = this.createListViewRow(e.rowData.report, pushLikeButton);
        this.tableview.updateRow(e.index, row);
        unDo = e.rowData.report.isLike ? true : false;
        return this.execLike(e.rowData.report.report_id, Ti.App.user_id, unDo);
      case 'icon':
        return info('icon ckicked');
      default:
        info('window open');
        return $.tabs.currentTab.open($.Util.createUserHomeView(e.rowData.report.user_id, {
          animated: true
        }));
    }
  };
  return Timeline;
})();
exports.Timeline = Timeline;