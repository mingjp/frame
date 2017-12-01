var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

var onlinePersons = {};

//connection 事件是 socket 本身的事件
io.on('connection', function(client){
	console.log('connection');
	//_args => {count: 产生多少组数据, max: 最大数值}
	//{count: 12, max: 200} = > [10 ,20 ...]
	client.on('serverMessage', function(_args){
		var obj = JSON.parse(_args);
		setInterval(function(){
			var _array = [];
			for(var i = 1; i <= obj.count; i++){
				_array.push(parseInt(Math() * obj.max) + 1);
			}
			io.emit('clientMessage', JSON.stringify(_array));
		}, 5000)
	})
})

http.listen(88);