var BaseListView, Notice;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseListView = require('ui/common/BaseListView').BaseListView;
Notice = (function() {
  __extends(Notice, BaseListView);
  function Notice() {
    this.setEvent = __bind(this.setEvent, this);
    this.createListView = __bind(this.createListView, this);    this.apiURL = 'getNotice';
    this.apiParams = {
      user_id: Ti.App.user_id
    };
    Notice.__super__.constructor.call(this, {
      title: 'Notice'
    });
    return this.win;
  }
  Notice.prototype.createListView = function(notice) {
    var icon, message, row, section;
    log('createListView');
    section = Ti.UI.createTableViewSection();
    row = Titanium.UI.createTableViewRow(this.styles.row);
    icon = Ti.UI.createImageView(this.styles.icon);
    message = Titanium.UI.createLabel(this.styles.title);
    row.notice = notice;
    icon.image = notice.picture_url;
    notice.type = "support";
    switch (notice.type) {
      case 'share':
        message.text = setTT('NOTICE_SHARE', [notice.nickname, notice.point]);
        message.clickName = 'share';
        row.clickName = 'share';
        break;
      case 'support':
        message.text = setTT('NOTICE_SUPPORT', [notice.nickname]);
        message.clickName = 'support';
        row.clickName = 'support';
        break;
      case 'like':
        message.text = 'like your puroject:' + notice.pjt_name;
    }
    row.add(icon);
    row.add(message);
    section.add(row);
    return section;
  };
  Notice.prototype.setEvent = function() {
    return this.tableview.addEventListener('click', __bind(function(e) {
      info(JSON.stringify(e));
      info('table event');
      switch (e.source.clickName) {
        case 'share':
          info('share');
          break;
        case 'support':
          info('support');
          $.tabs.currentTab.open($.Util.createUserHomeView(e.rowData.notice.user_id, {
            animated: true
          }));
          break;
        default:
          info('else');
      }
    }, this));
  };
  return Notice;
})();
exports.Notice = Notice;