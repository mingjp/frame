var http = require('http');
var url = require('url');
var fs = require("fs");

//http://localhost:88/a/b/c/d/e?name=dk
//http://locahost:88/index.html
http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var realPath = __dirname +  pathname;
    //stream 流 
    //IO 流
    //二进制流	
    fs.readFile()
    console.log(realPath);
	response.end("1705");
}).listen(88)