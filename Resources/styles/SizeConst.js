var Const;
Const = {
  MARGIN: 5,
  ICON: 44,
  WIDTH: 320,
  HEIGHT: 480,
  USERNAME_H: 20,
  BOX_H: 20,
  BOX_W: 80,
  TITTLE_H:22,
  FONT: function() {
    if (Titanium.Platform.name === 'android') {
      return 14;
    } else {
      return 16;
    }
  }
};