var BaseWindow, Comparison, UserResultPanel, WeeklyTotalGraph;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
WeeklyTotalGraph = require('ui/comparison/WeeklyTotalGraph').WeeklyTotalGraph;
UserResultPanel = require('ui/comparison/UserResultPanel').UserResultPanel;
BaseWindow = require('ui/common/BaseWindow').BaseWindow;
Comparison = (function() {
  __extends(Comparison, BaseWindow);
  function Comparison() {
    this.params = {
      title: "comparision"
    };
    Comparison.__super__.constructor.call(this, this.params);
    this.graph = new WeeklyTotalGraph();
    this.panel = new UserResultPanel();
    this.win.add(this.graph.view);
    this.win.add(this.panel);
    $.Util.setRightButton(this.win, this.graph.updateWeeklyTotalData);
    this.setEvent();
    return this.win;
  }
  Comparison.prototype.setEvent = function() {};
  return Comparison;
})();
exports.Comparison = Comparison;