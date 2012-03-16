var BaseListView, SupportList;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseListView = require('ui/common/BaseListView').BaseListView;
SupportList = (function() {
  __extends(SupportList, BaseListView);
  SupportList.prototype.TYPE = {
    SUPPORTER: 'getSupporters',
    SUPPORTING: 'getSupportings'
  };
  function SupportList(user_id, type) {
    this.user_id = user_id;
    this.setEvent = __bind(this.setEvent, this);
    this.createListView = __bind(this.createListView, this);
    this.apiURL = (type = this.TYPE.SUPPORTING) ? this.TYPE.SUPPORTING : this.TYPE.SUPPORTER;
    this.apiParams = {
      user_id: this.user_id
    };
    SupportList.__super__.constructor.call(this, {
      title: 'RecordList'
    });
    return this.win;
  }
  SupportList.prototype.createListView = function(userData) {
    var icon, row, section, user;
    info_obj(userData);
    section = Ti.UI.createTableViewSection();
    info_obj(this.styles.row);
    row = Titanium.UI.createTableViewRow(this.styles.row);
    row.user = userData;
    icon = Ti.UI.createView(this.styles.icon);
    user = Titanium.UI.createLabel(this.styles.title);
    user.text = userData.nickname;
    row.add(icon);
    row.add(user);
    section.add(row);
    return section;
  };
  SupportList.prototype.setEvent = function() {
    return this.tableview.addEventListener('click', function(e) {
      info(JSON.stringify(e));
      return $.tabs.currentTab.open($.Util.createUserHomeView(e.rowData.user.support_user_id, {
        animated: true
      }));
    });
  };
  return SupportList;
})();
exports.SupportList = SupportList;