var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function(request, response){
	var urlStr = request.url;
	var urlObj = url.parse(urlStr, true);
	if(urlObj.query.type && urlObj.query.type == 'img'){
		var content = fs.readFileSync('./001.jpg', 'binary');
		response.writeHead(200, {'Content-Type': 'image/jpeg'});
		response.write(content, 'binary');
		response.end("aa");		
		// response.end("bb");		
	} else if (urlObj.query.type && urlObj.query.type == 'info'){
		response.end('{name: "name", age: 18}');
	} else if (urlObj.query.type && urlObj.query.type == 'login'){
		// urlObj.query.username
		response.end('{status: false, message: "密码不正确"}');
	} else {
		response.end('请求参数错误');
	}
	// console.log(content);
	

}).listen('8080');

// fs.readFile('test.txt', function(err, data){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('异步读取：' + data);
// 	}
// })

// fs.writeFile('test22.txt', 'www.1000phone.com', function(err){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("写入成功");
// 	}
// })

// fs.appendFile('test22.txt', 'dk', function(err){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("追加成功");
// 	}
// })