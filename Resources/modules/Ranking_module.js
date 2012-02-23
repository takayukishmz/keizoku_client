var bars, color, graphSpace, passdNumOfDays, percents, week_id;
Titanium.include('Common_module.js');
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
tt.api = {};
(function() {
  tt.maxRatio = 0;
  tt.maxIndex = 0;
  tt.box_h = graphSpace.height / passdNumOfDays;
  tt.margin = (tt.box_h - 28) / 2;
  tt.api.getWeeklyTotalData = function() {
    info('tt.UI.update');
    return API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, function(json) {
      var total_data;
      total_data = json.weekly_total_data;
      tt.UI.createGraph(total_data);
    });
  };
  tt.api.updateWeeklyTotalData = function() {
    return API.callAPI('GET', 'getWeeklyTotalData', {
      week_id: week_id
    }, function(json) {
      var total_data;
      total_data = json.weekly_total_data;
      tt.UI.updateGraph(total_data);
    });
  };
  tt.UI.createGraph = function(data) {
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
    ratios = tt.module.calcRatio(data);
    for (i = 1; 1 <= passdNumOfDays ? i <= passdNumOfDays : i >= passdNumOfDays; 1 <= passdNumOfDays ? i++ : i--) {
      height = graphSpace.top + tt.margin * 2 * (i - 1) + tt.margin * i + 28 * (i - 1);
      width = graphSpace.width * (ratios[i - 1] / tt.maxRatio);
      bar = Titanium.UI.createView(styles.bar);
      bar.top = height;
      bar.backgroundColor = color[i - 1];
      day_num = Titanium.UI.createLabel(styles.day_num);
      day_num.text = i;
      day_num.top = height;
      per_num = Titanium.UI.createLabel(styles.per_num);
      per_num.top = height;
      per_num.text = ratios[i - 1] + "%";
      win.add(day_num);
      win.add(bar);
      win.add(per_num);
      bars.push(bar);
      percents.push(per_num);
      tt.module.move(bar, 0, width);
    }
  };
  tt.UI.updateGraph = function(data) {
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
    ratios = tt.module.calcRatio(data);
    for (i = 0, _ref = bars.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      percents[i].text = ratios[i] + "%";
      height = graphSpace.top + tt.margin * 2 * i + tt.margin * i + 28 * i;
      width = graphSpace.width * (ratios[i] / tt.maxRatio);
      tt.module.move(bars[i], 0, width);
    }
  };
  tt.module.calcRatio = function(data) {
    var i, ratio, ratios;
    ratios = [];
    for (i = 1; 1 <= passdNumOfDays ? i <= passdNumOfDays : i >= passdNumOfDays; 1 <= passdNumOfDays ? i++ : i--) {
      ratio = data["count_" + i] / data.num_all * 100;
      if (ratio > tt.maxRatio) {
        tt.maxRatio = ratio;
        tt.maxIndex = i;
      }
      ratios.push(ratio);
    }
    return ratios;
  };
})();