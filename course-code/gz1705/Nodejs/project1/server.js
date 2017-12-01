// var multer = require('multer');
var path = require('path');
// var upload = multer({dest: path.join(__dirname, "upload")});

var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({
	secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
	name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
	cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
	resave: false,
	saveUninitialized: true,	
}))

var bodyParser = require('body-parser');
var body = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, '/')));

app.post('/login', body, function(reqeust, response){
	//操作数据库
	console.log(reqeust.body);
	var username = reqeust.body.username;
	var password = reqeust.body.password;
	reqeust.session.user = {username: username, password: password};
	response.send("ok");
})

app.get('/setsession', function(reqeust, response){
	// reqeust.session.name = reqeust.query.username;
	response.send(reqeust.session.user);
})

app.get('/getsession', function(reqeust, response){
	console.log(reqeust.session);
	response.send(reqeust.session.user);
})

app.get('/delsession', function(reqeust, response){
	delete reqeust.session.user;
	console.log(reqeust.session);
	response.send(reqeust.session.user);
})


app.post('/products', function(reqeust, response){
	if(reqeust.session.name){
		db.save('..')
	} else {
		response.send("当用用户没有登陆");
	}
})

app.listen(88);