var WeeklyTotalGraph, bars, color, graphSpace, passdNumOfDays, styles, week_id;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
styles = {
  bar: {
    left: 35,
    height: 28,
    width: 0,
    backgroundColor: '#345',
    borderRadius: 5
  },
  day_num: {
    left: 5,
    width: 28,
    height: 28,
    textAlign: 'center'
  },
  per_num: {
    right: 5,
    width: 35,
    height: 28,
    textAlign: "right"
  }
};
week_id = 0;
passdNumOfDays = 7;
color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
bars = [];
graphSpace = {
  top: 0,
  left: 35,
  width: 200,
  height: 220
};
WeeklyTotalGraph = (function() {
  function WeeklyTotalGraph() {
    this.calcRatio = __bind(this.calcRatio, this);
    this.updateGraph = __bind(this.updateGraph, this);
    this.updateWeeklyTotalData = __bind(this.updateWeeklyTotalData, this);
    this.getWeeklyTotalData = __bind(this.getWeeklyTotalData, this);    this.maxRatio = 0;
    this.maxIndex = 0;
    this.box_h = graphSpace.height / passdNumOfDays;
    this.margin = (this.box_h - 28) / 2;
    this.percents = [];
    this.view = Ti.UI.createView({
      title: 'graph',
      top: 100,
      left: 0,
      width: 320,
      height: 220
    });
    this.getWeeklyTotalData();
  }
  WeeklyTotalGraph.prototype.getWeeklyTotalData = function() {
    info('tt.UI.update');
    return $.API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, __bind(function(json) {
      this.createGraph();
    }, this));
  };
  WeeklyTotalGraph.prototype.updateWeeklyTotalData = function() {
    this.updateGraph();
    return $.API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, __bind(function(json) {
      var total_data;
      info('1');
      total_data = json.weekly_total_data;
      this.updateGraph(total_data);
    }, this));
  };
  WeeklyTotalGraph.prototype.createGraph = function(data) {
    var bar, day_num, height, i, per_num, ratios, width;
    info('createGraph');
    ratios = [];
    data = {
      "count_3": "5",
      "count_1": "5",
      "count_7": "10",
      "count_6": "30",
      "count_2": "30",
      "num_all": "100",
      "start_date": "1",
      "count_4": "15",
      "count_5": "5"
    };
    ratios = this.calcRatio(data);
    for (i = 1; 1 <= passdNumOfDays ? i <= passdNumOfDays : i >= passdNumOfDays; 1 <= passdNumOfDays ? i++ : i--) {
      height = graphSpace.top + this.margin * 2 * (i - 1) + this.margin * i + 28 * (i - 1);
      width = graphSpace.width * (ratios[i - 1] / this.maxRatio);
      bar = Titanium.UI.createView(styles.bar);
      bar.top = height;
      bar.backgroundColor = color[i - 1];
      day_num = Titanium.UI.createLabel(styles.day_num);
      day_num.text = i;
      day_num.top = height;
      per_num = Titanium.UI.createLabel(styles.per_num);
      per_num.top = height;
      per_num.text = ratios[i - 1] + "%";
      this.view.add(day_num);
      this.view.add(bar);
      this.view.add(per_num);
      bars.push(bar);
      this.percents.push(per_num);
      bar.width = width;
    }
  };
  WeeklyTotalGraph.prototype.updateGraph = function(data) {
    var height, i, ratios, width, _ref;
    info('updateGraph');
    ratios = [];
    data = {
      "count_3": "5",
      "count_1": "5",
      "count_7": "10",
      "count_6": "25",
      "count_2": "35",
      "num_all": "100",
      "start_date": "1",
      "count_4": "15",
      "count_5": "5"
    };
    ratios = this.calcRatio(data);
    for (i = 0, _ref = bars.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      this.percents[i].text = ratios[i] + "%";
      height = graphSpace.top + this.margin * 2 * i + this.margin * i + 28 * i;
      width = graphSpace.width * (ratios[i] / this.maxRatio);
    }
  };
  WeeklyTotalGraph.prototype.calcRatio = function(data) {
    var i, ratio, ratios;
    ratios = [];
    for (i = 1; 1 <= passdNumOfDays ? i <= passdNumOfDays : i >= passdNumOfDays; 1 <= passdNumOfDays ? i++ : i--) {
      ratio = data["count_" + i] / data.num_all * 100;
      if (ratio > this.maxRatio) {
        this.maxRatio = ratio;
        this.maxIndex = i;
      }
      ratios.push(ratio);
    }
    return ratios;
  };
  return WeeklyTotalGraph;
})();
exports.WeeklyTotalGraph = WeeklyTotalGraph;