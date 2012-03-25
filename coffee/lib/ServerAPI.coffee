Titanium.include 'lib/ServerConst.js'
Titanium.include 'lib/ActivityIndicator.js'

API ={}


class API  
	costructor : () ->
	callAPI :(method,requestType, params, callbackOnLoad) ->
		indicator.show()
		Ti.API.info 'API:method=' + method
		Ti.API.info 'API:requestType=' + requestType
		Ti.API.info 'API:params=' + JSON.stringify params
		Ti.API.info 'API:callback=' + callbackOnLoad
	
		if Titanium.Network.online == false
		  	alert('オフラインなのでデータを取得できません。')
		  	return
		
		url = Request.getRequestURL requestType, params
		xhr = Titanium.Network.createHTTPClient()
		
		xhr.onreadystatechange = (e) ->
			info 'onreadystatechange'
			info_obj e
			return 
			
		xhr.ondatastream = (e) ->
			info 'ondatastream'
			info_obj e
			return
			
		xhr.onsendstream = (e) ->
			info 'onsendstream'
			info_obj e
			return
		
		xhr.open(method, url, false)
		
			
		xhr.onload = ()->
			info 'onload'
			indicator.hide()
			json =　JSON.parse xhr.responseText
			#update cache data
			# @filter(json)
			
			Ti.API.info 'requestType:'+requestType+'\n'+'responseText:'+xhr.responseText
			# callbackOnLoad xhr.staatus, json  
			callbackOnLoad json 
			return
		
		xhr.onerror = (error) ->
				indicator.hide()
				alert TEXT.ERROR_MESSAGE.SERVER
				info_obj error
	
				return
		if method == 'POST'
			
			xhr.send params
			return
		else
		  xhr.send()
		  return
	
	filter : (json) ->
		Ti.API.info 'hoge'
		if json.profile 
			Ti.App.user = json.profile
		return
	


exports.API = API