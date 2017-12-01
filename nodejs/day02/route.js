var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/html;charset=utf-8'})
    var urlObj = url.parse(request.url, true);
    


    if(urlObj.pathname == '/favicon.ico'){
        return false;
    }

    if(request.method == 'GET'){
        if(urlObj.pathname == '/login'){console.log(urlObj);
            var result=login(urlObj.query.username,urlObj.query.password);
            var queryStr='登陆成功' + querystring.stringify(urlObj.query);
            if(result){
                response.write(queryStr);
            }else{
                response.write('登录失败');
            }

        }else if(urlObj.pathname == '/register'){
            var result = register(urlObj.query.username,urlObj.query.password);
            if(result){
                response.write('注册成功');
            }else{
                response.write('注册失败');
            }
        }else{
            response.write('请求参数错误')
        }
        response.end();

    }else if(request.method == 'POST'){
        var postData = '';
        request.addListener('data',function(_data){
            postData += _data;
        });
        request.addListener('end',function(){
            response.write(postData);
            response.end();
        });

    }
}).listen(86);

var login=function(username,password){
    return true;
}

var register=function(username,password){
    return true;
}