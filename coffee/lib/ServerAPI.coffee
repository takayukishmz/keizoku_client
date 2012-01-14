Titanium.include 'ServerConst.js'

API ={}			
API.callAPI = (method,requestType, params, callbackOnLoad) ->
    Ti.API.info 'API:method=' + method
    Ti.API.info 'API:requestType=' + requestType
    Ti.API.info 'API:params=' + JSON.stringify params
    Ti.API.info 'API:callback=' + callbackOnLoad

    if Titanium.Network.online == false
      	alert('オフラインなのでデータを取得できません。')
      	return
    url = Request.getRequestURL requestType, params
    xhr = Titanium.Network.createHTTPClient()
    xhr.open(method, url, false);
    xhr.onload = () ->
    	json =　JSON.parse xhr.responseText
    	Ti.API.info 'requestType:'+requestType+'\n'+'responseText:'+xhr.responseText
    	# callbackOnLoad xhr.staatus, json  
    	callbackOnLoad json 
    	return
    xhr.onerror = (error) ->
    		alert error
    		return
    if method == 'POST'
		
    	xhr.send params
    	return
    else
      xhr.send()
      return
    
