

exports.Facebook = () ->
	Ti.Facebook.appid = '203800316311425'
	Ti.Facebook.permissions = ['publish_stream','manage_friendlists']	
	
	@postWall = (msg) ->
		info 'start postWall'
		
		requestData = {
			access_token:Ti.Facebook.accessToken
		}

		if Ti.App.dryrun
			info 'dryrun share FB'
			info 'message:'+msg
			return

		Ti.Facebook.requestWithGraphPath 'me/feed',requestData,"POST",(e) ->
				info 'callback fb postWall'
				if e.success
					info 'post success.'+ e.result
					return
		return
	
	@getFriends = (msg) ->
		info 'start fb getFriends'
		info Ti.Facebook.accessToken
		requestData = {	
			access_token:Ti.Facebook.accessToken
		}
		# https://graph.facebook.com/me/friends
		# if Ti.App.dryrun
		# 	info 'dryrun getFriends FB'
		# 	return
		
		Ti.Facebook.requestWithGraphPath 'me/friends',requestData,"GET",(e) ->
				info 'callback fb getFriends'
				if e.success
					info 'post success.'+ e.result
					return
				else
					info 'not success'
		return
	
	@getProfile = (callback)->
		#run query, populate table view and open window
		query = "SELECT uid, name, pic_square, status,email FROM user WHERE uid = me()"
		# query +=  "where uid IN (SELECT uid2 FROM friend WHERE uid1 = " + Titanium.Facebook.uid + ")"
		# query += "order by last_name limit 20"
		Ti.API.info 'user id ' + Titanium.Facebook.uid
		Titanium.Facebook.request 'fql.query', {query: query},  (json)->
			if !json.success
				if r.error
					alert r.error
				else 
					alert "call was unsuccessful"
				
				return
			
			info_obj json
			callback json
			return
	return this