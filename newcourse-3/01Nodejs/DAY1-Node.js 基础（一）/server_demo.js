// 在 node.js 里面，require 引入的所有 js 都叫 “模块”
var http = require('http');

//调用 http 模块的创建服务方法
//reuest 请求头（请求体）
//response 响应体
var server = http.createServer(function(request, response){
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	// response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World');
	// response.end();
	// console.log('1701');
});

server.listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');