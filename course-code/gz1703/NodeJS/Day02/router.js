//1、创建 web 服务
//2、路由规则
//3、获取参数
//4、用参数映射到对应的路由规则

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var mongodb = require('mongodb');

//路由规则
var r = {
    name: function(response, val){
        response.end('Hello ' + val);
        // response.end('[{name: "tom", age: 18}]')
        // document.getElementsByTagName('h1')[0].innerText = 'Hello ' + val;
    },
    password: function(response, val){
        console.log(val);
        response.end();
    },
    login: function(data){},
    register: function(data){}
}

http.createServer(function(request, response){
    if(request.method == 'GET'){
        var urlObj = url.parse(request.url, true);
        //{name: 'tom', passowrd: 18}
        console.log(urlObj.query);
        for(var key in urlObj.query){
            if(r[key] && typeof r[key] == 'function'){
                r[key](response, urlObj.query[key]);
            }
        }
    } else if(request.method == 'POST'){
        var postData = null;
        // request.on()
        //{username: 'admin', password: 'admin', type:'login'}
        request.addListener('data', function(_data){
            postData += _data;
        })

        request.addListener('end', function(){
            console.log(postData);
            if(r[postData.type] && typeof r[postData.type] == 'function'){
                r[postData.type](postData);
            }
            // if(postData.type == 'login'){
            //     //登录
            // } else if(postData.type == 'register'){
            //     //注册
            // }
        })



        fs.readFile('index.html', function(_data){
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(_data);
        })
    }
   
    
    // if(urlObj.query){
    //     var queryObj = querystring.parse(urlObj.query);
    //     console.log(queryObj);
    // }
    
    // response.end('Hello Router');
}).listen(1703);