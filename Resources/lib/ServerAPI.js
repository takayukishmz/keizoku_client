var API;
Titanium.include('ServerConst.js');
API = {};
API.callAPI = function(method, requestType, params, callbackOnLoad) {
  var url, xhr;
  Ti.API.info('API:method=' + method);
  Ti.API.info('API:requestType=' + requestType);
  Ti.API.info('API:params=' + JSON.stringify(params));
  Ti.API.info('API:callback=' + callbackOnLoad);
  if (Titanium.Network.online === false) {
    alert('オフラインなのでデータを取得できません。');
    return;
  }
  url = Request.getRequestURL(requestType, params);
  xhr = Titanium.Network.createHTTPClient();
  xhr.open(method, url, false);
  xhr.onload = function() {
    var json;
    json = 　JSON.parse(xhr.responseText);
    Ti.API.info('requestType:' + requestType + '\n' + 'responseText:' + xhr.responseText);
    callbackOnLoad(json);
  };
  xhr.onerror = function(error) {
    alert(error);
  };
  if (method === 'POST') {
    xhr.send(params);
  } else {
    xhr.send();
  }
};