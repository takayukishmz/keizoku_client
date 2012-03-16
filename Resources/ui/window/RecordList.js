var BaseListView, RecordList;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
BaseListView = require('ui/common/BaseListView').BaseListView;
RecordList = (function() {
  __extends(RecordList, BaseListView);
  function RecordList(user_id) {
    this.user_id = user_id;
    this.createListView = __bind(this.createListView, this);
    this.apiURL = 'getTimeline';
    this.apiParams = {
      user_id: this.user_id
    };
    RecordList.__super__.constructor.call(this, {
      title: 'RecordList'
    });
    return this.win;
  }
  RecordList.prototype.createListView = function(report) {
    var icon, row, section, text;
    info('createListView');
    section = Ti.UI.createTableViewSection();
    info('createListView1');
    row = Titanium.UI.createTableViewRow(this.styles.row);
    row.report = report;
    info('createListView2');
    icon = Ti.UI.createView(this.styles.icon);
    text = Titanium.UI.createLabel(this.styles.title);
    info('createListView3');
    text.text = report.comment;
    row.add(icon);
    row.add(text);
    section.add(row);
    return section;
  };
  return RecordList;
})();
exports.RecordList = RecordList;