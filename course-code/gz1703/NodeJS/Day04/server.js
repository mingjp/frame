/*
1、进入聊天室：输入昵称 => 点击连接 => 进行聊天室
2、客户端发信息：把信息推送到服务器 => 服务器接受到客户端推送的信息，然后向个每个在线的用户推送该信息
3、客户端接收信息：接收到来自服务端推送的信息，然后在每个客户端显示出来
*/

var socket = require('ws');
var socketServer = socket.Server;
//ws://localhost:1703
//wss://localhost:1703
//http://localhost:1703
//https://localhost:1703
var wsServer = new socketServer({port: 1703})

wsServer.on('connection', function(wss){
    wss.on('message', function(mess){
        wsServer.clients.forEach(function(element) {
            element.send(mess);
        });
    })
})