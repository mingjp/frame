var http = require('http');
var router = require('./router');

var server = http.createServer(function(request, response){
	router(request);
	response.end();
});

server.listen(888);

var app = require('express')();
app.get('/register.html', function(request, response){
	response.sendFile(__dirname + '/' + 'register.html');
})