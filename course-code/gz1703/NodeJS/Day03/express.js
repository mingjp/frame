// var http = require('http');
// var url = require('url');

// http.createServer(function(request, response){
//     var urlObj = url.parse(request.url, true);
//     response.write(JSON.stringify(urlObj));
//     response.end();
// }).listen(1703)

var express = require('express');
//专门针对路径的操作
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// var app = require('express')();

//调用一个中间件
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(request, response){
    response.send('root');
})

app.get('/getUsers', function(request, response){
    var username = request.query.username;
    var password = request.query.password;
    response.send(request.query)
})

app.post('/register', urlencodedParser, function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    response.send(request.body)
})

app.listen(1703);