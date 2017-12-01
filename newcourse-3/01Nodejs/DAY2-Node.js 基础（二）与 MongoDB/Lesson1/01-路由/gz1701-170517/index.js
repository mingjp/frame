/*
	路由的必备要素：
	第一：要开启服务
	第二：要有请求的地址（url）
	第三：配置路由映射表（规则）
 */
var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	//第二步
	var urlStr = request.url;
	var urlObj = url.parse(urlStr, true);
	console.log(urlObj);
	//通过请求的 url 映射到对应的方法，这种行为叫做路由
	if(urlStr.indexOf('sam') > -1){
		response.write('{"name": "sam", age: 18}');
	} else if(urlStr.indexOf('tom') > -1){
		response.write('{"name": "tom", age: 28}');
	} else {
		response.write('404');
	}
	response.end();
}).listen(8888);