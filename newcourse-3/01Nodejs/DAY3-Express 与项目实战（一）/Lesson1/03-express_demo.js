var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
    // res.writeHead(200, {"Content-Type"})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var server = app.listen(888, function(){
	console.log('Server running on http://localhost:888');
});

app.use(express.static('public'));

app.get('/', function(request, response){
	response.send('Hello World');
});

app.get('/list_user', function(request, response){
	response.send('list_user');
});

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.query.first_name,//$_GET["first_name"]
       last_name:req.query.last_name//$_GET["last_name"]
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   // request.body => formdata = > {}
   response = {
       first_name:req.body.first_name,//$_POST["first_name"]
       last_name:req.body.last_name//$_POST["last_name"]
   };
   console.log(response);
   res.end(JSON.stringify(response));
});