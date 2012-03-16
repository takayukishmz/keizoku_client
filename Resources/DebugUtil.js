var info, info_obj, log;
info = function(msg) {
  Ti.API.info(msg);
};
log = function(key, msg) {
  Ti.API.info("< " + key + " >" + msg);
};
info_obj = function(obj) {
  Ti.API.info(JSON.stringify(obj));
};