Request ={}

Request =
	HOST:
		sakuraVPS:'http://49.212.124.181:5000/'
		# sakuraVPS:'http://sakura:5000/'
		localhost:'http://192.168.56.101:5000/'
	
	
	
	getRequestURL:(api,params) ->
		url = @HOST.sakuraVPS+ api + "?" + @parseParams params
		Ti.API.info 'HOST:'+ url
		return url
	
	# parse Params  
	# obj -> string
	parseParams:(params) ->
		query =''
		for key,value of params
		  query += key+'='+value+'&'
		Ti.API.info 'QUERY'+query
		queryString = query




