var WeeklyTotalGraph, bars, color, graphSpace, passdNumOfDays, percents, week_id;
week_id = 1;
passdNumOfDays = 7;
color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
bars = [];
percents = [];
graphSpace = {
  top: 100,
  left: 35,
  width: 200,
  height: 220
};
WeeklyTotalGraph = (function() {
  WeeklyTotalGraph.maxRatio = 0;
  WeeklyTotalGraph.maxIndex = 0;
  WeeklyTotalGraph.box_h = graphSpace.height / passdNumOfDays;
  WeeklyTotalGraph.margin = (WeeklyTotalGraph.box_h - 28) / 2;
  function WeeklyTotalGraph() {
    this.win = Ti.UI.createWindow({
      title: 'graph'
    });
    return this.win;
  }
  WeeklyTotalGraph.getWeeklyTotalData = function() {
    info('tt.UI.update');
    return globals.API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, function(json) {
      var total_data;
      total_data = json.weekly_total_data;
      this.createGraph(total_data);
    });
  };
  WeeklyTotalGraph.updateWeeklyTotalData = function() {
    return globals.API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, function(json) {
      var total_data;
      total_data = json.weekly_total_data;
      this.updateGraph(total_data);
    });
  };
  WeeklyTotalGraph.createGraph = function(data) {
    var bar, day_num, height, i, per_num, ratios, width;
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
      this.win.add(day_num);
      this.win.add(bar);
      this.win.add(per_num);
      bars.push(bar);
      percents.push(per_num);
      this.move(bar, 0, width);
    }
  };
  WeeklyTotalGraph.updateGraph = function(data) {
    var height, i, ratios, width, _ref;
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
      percents[i].text = ratios[i] + "%";
      height = graphSpace.top + this.margin * 2 * i + this.margin * i + 28 * i;
      width = graphSpace.width * (ratios[i] / this.maxRatio);
      this.move(bars[i], 0, width);
    }
  };
  WeeklyTotalGraph.calcRatio = function(data) {
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