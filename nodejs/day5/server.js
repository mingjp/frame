var SocketServer = require('ws').Server;
var ws = new SocketServer({
	port:8080
})

ws.on('connection', function(client){
	console.log('connection')
	client.on("message",function(_data){
		var data = JSON.parse(_data)
		console.log(_data);
		// client.send(_data);
		ws.broadcast(data)
		
	})
})

ws.broadcast = function broadcast(_data) {  
    ws.clients.forEach(function(client) { 
        client.send(JSON.stringify(_data))
    });  
}; 