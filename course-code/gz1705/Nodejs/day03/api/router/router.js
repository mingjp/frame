//用户路由
//产品路由
//订单路由
//过滤器
//****
var url = require('url');
var querystring = require('querystring');
var apiResult = require('../ApiResult.js');

var userRouter = require('./user.js');

//所有路由映射表
var allRuter = Object.assign({}, userRouter);


//http://localhost:81/register
module.exports = {
	newRegister: function(request, response){

		// 允许跨域
		response.writeHead(200, {
			"Access-Control-Allow-Origin": "*", 
			"Content-type": "text/plain;charset=UTF-8",
			"Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
			"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
		});

		var urlString = request.url;
		var urlObj = url.parse(urlString, true);
		var pathname = urlObj.pathname;
		var postData = '';

		//当前请求的路径是否有配置路由映射
		//如果没有路由映射，则直接输出错误信息
		if(!allRuter[pathname]){
			response.end(apiResult(false, null, "请求路径错误"));
			return false;
		}	

		if(request.method == "POST"){
			request.addListener("data", function(_data){
				postData += _data;
			});

			request.addListener("end", function(){
				var postDataObj = querystring.parse(postData);
				allRuter[pathname](postDataObj, function(result){
					response.write((result));
					response.end();
				})
			})
		} else if(request.method == "GET") {
			var paramsObj = urlObj.query;
			if(typeof allRuter[pathname] == "function"){
				allRuter[pathname](paramsObj, function(result){
					response.write((result));
					response.end();				
				})
			} else {
				//路由不支持当前的访问方式
				if(!allRuter[pathname][request.method]){

				}

			}
				}
		}
	}
}
