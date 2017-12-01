//开户 websocket 服务
var ws = require('ws');
var Server = ws.Server;
var wss = new Server({
	port: 88
})

//当客户端有用户连接到服务端的时候会触发
wss.on('connection', function(socket){
	console.log('有新用户上线');
	
	//当客户端发送消息时触发
	socket.on('message', function(mess){
		// var obj = JSON.parse(mess);
		console.log(mess);

		//向所有已联接的客户端推送消息
		socket.send(mess);
	})

	//当客户端断开连接的时候触发
	socket.on('close', function(){

	})
})

// 加载 websocket 模块
// var ws = require('ws');
//实例化一个 websocket
// var wss = new ws.Server({server: '10.3.135.73/', port: 88});