/*
    1、创建人物：人物属性发送到服务器 => 服务器把人物推送到所有客户端 =>　客户端接收到服务端的人物属性，然后渲染出对应的人物
    2、人物移动：把人物的会标发送给服务器 => 服务器把接收的坐标推送给所有客户端 => 客户端接收到服务端的人物坐标，然后将人物进行移动
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(path.join(__dirname, '/')));
//{001:{}}
var onlinePerson = {};

//客户端连接
io.on('connection', function(client){
    client.on('serverLogin', function(_person){
        var _personObj = JSON.parse(_person);
        onlinePerson[_personObj.id] = _personObj;
        io.emit('clientCreatePerson', JSON.stringify(onlinePerson));
    })

    client.on('serverMove', function(_person){
        var _personObj = JSON.parse(_person);
        onlinePerson[_personObj.id] = _personObj;
        io.emit('clientMovePerson', _person);
    })
})

http.listen(1703);