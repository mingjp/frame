var http = require('http');
var url = require('url');
var querystring = require('querystring');

//通过 url 的路径或者参数遇敌到不同的功能实现 -- 路由
http.createServer(function(request, response){
	var urlObj = url.parse(request.url, true);
    response.writeHead(200, {
    	"Access-Control-Allow-Origin": "*", 
    	"Content-type": "text/plain;charset=UTF-8",
    	"Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
    	"Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",

    });

	//hard code
	if(urlObj.pathname == '/favicon.ico'){
		return false;
	}
	if(request.method == 'GET'){
		if(urlObj.pathname == '/login'){
			var result = login(urlObj.query.username, urlObj.query.password);
			var queryStr = "登陆成功" + querystring.stringify(urlObj.query);
			if(result){
				response.write(queryStr);
			} else {
				response.write("登陆失败");
			}
		} else if(urlObj.pathname == '/register'){
			var result = register(urlObj.query.username, urlObj.query.password, urlObj.query.tel, urlObj.query.mail);
			if(result){
				response.write("注册成功");
			} else {
				response.write("注册失败");
			}
		}
		 else {
			response.write("请求参数错误-");
		}
		response.end();
	} else if(request.method == 'POST'){
		var postData = '';
		request.addListener('data', function(_data){
			postData += _data;
		});

		request.addListener("end", function(){
			response.write(postData);
			response.end();
			console.log(postData);
		})
	}
	
}).listen(88);

var login = function(uesrname, password){
	//执行数据查找
	return true;
}

var register = function(username, password, tel, mail){
	//执行注册操作
	return false;
}