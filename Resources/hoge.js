var ImageTab, Tab, TabGroup, Window, log, tab1, tab2, tab3, tabGroup;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
}, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
log = function(obj) {
  return Titanium.API.log(obj);
};
Titanium.UI.setBackgroundColor('#000');
TabGroup = (function() {
  function TabGroup() {
    this.tabGroup = Titanium.UI.createTabGroup();
    return this.tabGroup;
  }
  return TabGroup;
})();
Window = (function() {
  function Window(title) {
    this.title = title;
    return Titanium.UI.createWindow({
      title: this.title,
      backgroundColor: '#fff'
    });
  }
  return Window;
})();
Tab = (function() {
  function Tab(title, icon) {
    this.title = title;
    this.icon = icon;
    this.window = new Window(this.title);
    this.tab = Titanium.UI.createTab({
      icon: this.icon,
      title: this.title,
      window: this.window
    });
    this.createContents();
    return this.tab;
  }
  Tab.prototype.createContents = function() {
    var label;
    label = Titanium.UI.createLabel({
      color: '#999',
      text: 'I am Window on ' + this.title,
      font: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    });
    label.addEventListener('click', function() {
      alert('OK');
      return log('OK');
    });
    return this.window.add(label);
  };
  return Tab;
})();
tabGroup = new TabGroup();
tab1 = new Tab('Tab1', 'KS_nav_ui.png');
tabGroup.addTab(tab1);
tab2 = new Tab('Tab2', 'KS_nav_views.png');
tabGroup.addTab(tab2);
ImageTab = (function() {
  __extends(ImageTab, Tab);
  function ImageTab(title, icon) {
    this.title = title;
    this.icon = icon;
    ImageTab.__super__.constructor.apply(this, arguments);
    return this.tab;
  }
  ImageTab.prototype.createContents = function() {
    var images, imgs, key, value;
    images = {
      0: {
        name: 'appcelerator',
        image: 'http://gyazo.com/64ee108bc98ab4e6632c2ee183eb0288.png'
      },
      1: {
        name: 'Titanium',
        image: 'http://gyazo.com/d2d78ef02588f6c69a53147e06547a38.png'
      },
      2: {
        name: 'CoffeeScript',
        image: 'http://gyazo.com/a6cb876b91bcfa8f6580e7c7fd461868.png'
      },
      3: {
        name: 'Gyazo',
        image: 'http://gyazo.com/c86f9566d5fd2904b2929ad4b67347c7.png'
      }
    };
    imgs = [];
    for (key in images) {
      if (!__hasProp.call(images, key)) continue;
      value = images[key];
      imgs.push(value.image);
    }
    this.view = Titanium.UI.createCoverFlowView({
      images: imgs,
      backgroundColor: '#000'
    });
    this.view.addEventListener('click', __bind(function(e) {
      log("image clicked: " + e.index + ", selected is " + this.view.selected);
      return this.window.title = images[e.index].name;
    }, this));
    this.view.addEventListener('change', __bind(function(e) {
      return log("image changed: " + e.index + ", selected is " + this.view.selected);
    }, this));
    return this.window.add(this.view);
  };
  return ImageTab;
})();
tab3 = new ImageTab('CoverFlow', 'KS_nav_views.png');
tabGroup.addTab(tab3);
tabGroup.open();
log(tab3.view);
log(tab3.window.title);