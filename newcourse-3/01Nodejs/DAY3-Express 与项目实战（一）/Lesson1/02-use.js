var express = require('express');
var path = require('path');
var app = express();

//express.static 指当前文档的静态目录
app.use(express.static(path.join(__dirname, '/')));

var server = app.listen(888, function(){
	console.log(path.join(__dirname, '/'));
	console.log(server.address());
})