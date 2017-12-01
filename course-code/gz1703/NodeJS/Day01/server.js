var http = require('http');
var url = require('url');
var querystring = require('querystring');

//reqeust 请求体
//response 响应体
http.createServer(function(request, response){
    response.end('{status: true, mess: "1703"}');
}).listen(1703)

//http://localhost:1703