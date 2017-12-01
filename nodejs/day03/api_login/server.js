var http = require('http');
var router = require('./router.js');
http.createServer(function(request,response){
    router.newRegister(request,response);
}).listen(8086);