var express = require('express');
var app = express();
var path = require('path');
var db = require('./db');

//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/register', urlencodedParser, function(request, response){
	db.exists('account', request.body, 'name', function(result){
		console.log(result);
		if(result){
			response.send('{state: false, message: "用户名已存在"}');
		} else {
			db.save('account', request.body); 	
			response.send('{state: true}');
		}
	})
})

app.use(express.static(path.join(__dirname, '/')));

app.listen(888)