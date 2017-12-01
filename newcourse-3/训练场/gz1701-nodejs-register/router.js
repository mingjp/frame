var url = require('url');
var db = require('./db');
var qs = require('querystring');
//造轮子
var router = {
	'favicon': function(){},
	'login': function(){},
	'register': function(request){
		//注册的方法
		var postData = '';
        request.addListener("data", function (data) {
            postData += data;
        });
        request.addListener("end", function () {
            var query = qs.parse(postData);
			if(db.exists(query, 'name')){
				//已存在 
			}         
        });		
	}
}

var filter = function(request){
	var pathname = url.parse(request.url, true).pathname;
	//过滤 pathname，响应对应的方法
	if(router[pathname.replace('/', '')]){
		router[pathname.replace('/', '')](request);
	}
}

module.exports = filter;