var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var path = require('path');

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

// app.get("/index.html", function(request, response){
// 	var html = fs.readFile('./index.html')
// 	response.header("Content-Type", "text/html;charset=UTF-8");
// 	response.send("index.html");
// })

//express.static 指当前文档的静态目录
app.use(express.static(path.join(__dirname, '/')));

app.get("/admin", function(request, response){
	response.send("admin");
});

app.get("/student", function(request, response){

	response.send(request.query);
})

app.post("/student", urlencodedParser, function(request, response){
	// request.addListener("data", function(_data){
	// 	console.log(_data);
	// })
	// console.log(request);
	response.send(request.body);
})

app.listen(88);

// document.onclick = function(event){
// 	event.target
// }

// $(document).click(function(event){
// 	event.target
// })


// var http = require('http');
// http.createServer(function(request, response){
// 	var postData = '';
// 	request.addListener("data", function(_data){
// 		postData += _data;
		
// 	})
// 	request.addListener("end", function(){
// 		console.log(postData);
// 	})
// 	response.end("admin");
// }).listen(88)
