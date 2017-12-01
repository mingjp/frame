var db = require('../DBHelper.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
	Register: function(app){
		app.post("/register", urlencode, function(request, response){
			db.select("user", {username: request.body.username}, function(result){
				if(!result.status){
					response.send(result);
				} else if(result.data.length > 0) {
					response.send({status: false, message: "当前用户已存在"});
				} else {
					db.insert("user", request.body, function(result){
						response.send(result);
					})
				}
			})
		})

		app.post("/login", function(request, response){
			//db
			response.send("aa"):
		})
	}
}