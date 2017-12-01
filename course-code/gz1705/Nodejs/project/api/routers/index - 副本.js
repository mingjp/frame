var express = require('express');
var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../')));

app.use(cookie());
app.use(session({
    secret: 'hubwiz app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	resave: false,
	saveUninitialized: true    
}))

var filter = function(req, res, next){
	console.log(123);
	// res.send('aa');
	next('123');
}

// app.use(express)

module.exports = {
	start: function(port){
		app.all('*', function(req, res, next) {
		    // res.writeHead(200, {"Content-Type"})
		    res.header("Access-Control-Allow-Origin", "*");
		    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		    res.header("X-Powered-By",' 3.2.1')
		    if(req.method=="OPTIONS") {
		      	res.sendStatus(200);/*让options请求快速返回*/
		    } else{
		      	next();
		    }
		});
		
		app.post('/post', function(request, response){
			request.session.name = "123";
			response.send(request.session.name);
		})

		app.post('/getsession', function(request, response){
			console.log(request.session)
			response.send(request.session.name);
		})		

		app.get('/set', function(request, response){
			request.session.name = "set";
			response.send(request.session.name);
		})

		app.get('/get', filter, function(request, response){
			console.log("get", request.session.name)
			response.send(request.session.name);
		})		

		app.post('/auth', function(req, res, next) {
			var user = {
				username: req.body.name
			}
			var token = jwt.sign(user, 'secret', {
			    'expiresIn': 1440 // 设置过期时间
			});

			// json格式返回token
			res.send({
			    success: true,
			    message: 'Enjoy your token!',
			    token: token
			});			
		});

		app.post('/token', function(req, res){
			var token = req.body.token || req.query.token || req.headers['authorization'];
			console.log(req.headers);
			if (token) {
				jwt.verify(token, 'secret', function(err, decoded) {
					if (err) {
						return res.send({ success: false, message: err.message });
					} else {
						// 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
						console.log('decoded', decoded);
						res.send(decoded);
					}					
				})
			} else {
				res.send('ss');
			}
		})

		// app.use(express.static(__dirname + '/'));	
		app.listen(port);


	}
}