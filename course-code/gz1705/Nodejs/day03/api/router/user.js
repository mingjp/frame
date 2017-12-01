var db = require('../DBHelper.js');

//路由映射表
//路由映射规则
var router = {
	"/register": function(_data, _callback){
		db.insert("user", _data, function(result){
			_callback(result);
			//{status: true, data: [], message}
		});
		//connect db
		//register
		//return result
	},
	"/login": function(){
		//connect db
		//login
		//return result
	},
	"/logout": {
		get: function(){
			//
		},
		post: function(){
			//
		}
	}
}

module.exports = router;


// module.exports = {
// 	Register: function(_pathname, _data, _callback){
// 		// /register
// 		if(router[_pathname]){
// 			router[_pathname](_data, function(result){
// 				_callback(result);
// 			});
// 		} else {
// 			_callback(false);
// 		}
// 	}
// };