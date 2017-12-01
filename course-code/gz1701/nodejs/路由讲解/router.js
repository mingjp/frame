//开启服务
var http = require('http');
var url = require('url');

var login = function(){
	console.log('login');
}

var register = function(){
	console.log('register');
}

var root = function(){
	console.log('root')
}

//request => 客户端发起的请求，也就是客户端的信息
//response => 针对客户端的请求作出相应的回应，也就是服务端的信息
http.createServer(function(request, response){
	//等同于window.location.href
	//pathname
	var urlstr = request.url;
	var urlobj = url.parse(urlstr, true);
	// if(urlobj.query.type == 'login'){
	// 	login();
	// } else if(urlobj.query.type == 'register'){
	// 	register();
	// } else {
	// 	root();
	// }
	if(urlobj.pathname == '/login'){
		login();
		//response.end({sate: false, message: })
	} else if(urlobj.pathname == '/register'){
		register()
	} else{
		root();
	}
	response.end();
}).listen(888);