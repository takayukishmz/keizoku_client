var BaseWindow, LikeButton, Timeline, TimelineListView, UserResultPanel, WeeklyTotalGraph, styles;
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
TimelineListView = require('ui/timeline/Timeline').Timeline;
WeeklyTotalGraph = require('ui/comparison/WeeklyTotalGraph').WeeklyTotalGraph;
UserResultPanel = require('ui/comparison/UserResultPanel').UserResultPanel;
Timeline = (function() {
  __extends(Timeline, BaseWindow);
  Timeline._selectedMenuIndex = -1;
  function Timeline() {
    this.setTitle = __bind(this.setTitle, this);
    this.setEvent = __bind(this.setEvent, this);
    this.setView = __bind(this.setView, this);    Timeline.__super__.constructor.call(this, {
      title: 'timeline'
    });
    this.timeline = new TimelineListView();
    this.graph = new WeeklyTotalGraph();
    this.panel = new UserResultPanel();
    this.win.add(this.timeline.getNodeView());
    this.win.add(this.graph.view);
    this.win.add(this.panel);
    this.graph.view.setVisible(false);
    this.panel.setVisible(false);
    return this.win;
  }
  Timeline.prototype.setView = function() {
    return this.setTitle();
  };
  Timeline.prototype.setEvent = function() {
    /* call API */    this.win.addEventListener('focus', __bind(function() {
      info('focus - Timeline');
      if (Ti.App.update_tl) {
        Ti.App.update_tl = false;
        this.timeline.loadTimeline();
      }
    }, this));
    return this.buttonBar.addEventListener('click', __bind(function(e) {
      this._selectedMenuIndex = e.index;
      if (e.index === 0) {
        this.timeline.getNodeView().setVisible(true);
        this.panel.setVisible(false);
        this.graph.view.setVisible(false);
      } else if (e.index === 1) {
        this.timeline.getNodeView().setVisible(false);
        this.panel.setVisible(true);
        this.graph.view.setVisible(true);
      }
    }, this));
  };
  Timeline.prototype.setTitle = function() {
    this.buttonBar = Ti.UI.createButtonBar({
      labels: ['タイムライン', '比較'],
      backgroundColor: Const.BUTTONBARCOLOR,
      top: 3,
      style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
      height: 25,
      width: 200
    });
    this.win.titleControl = this.buttonBar;
  };
  return Timeline;
})();
exports.Timeline = Timeline;