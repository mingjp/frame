var http = require('http');
var router = require('./router/router.js');

http.createServer(function(request, response){
	router.newRegister(request, response);
}).listen(88);