var url = require('url');
var queryString = require('querystring');
var userRouter = require("./user.js");

var apiResult = require('./ApiResult.js');
module.exports = {
    newRegister: function(request,response){
        //允许跨域
        response.writeHead(200,{
            "Access-Control-Allow-Origin":"*",
            "Content-type":"text/plain;charset=UTF-8",
            "Access-Control-Allow-Headers":"Contetn-Type,Content-Length,Authorization,Accept,X-Requested-With",
            "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
        });

        var urlString = request.url;
        var urlObj = url.parse(urlString,true);
        var pathname = urlObj.pathname;
        var postData = '';

        if(!userRouter[pathname]){
            response.end();
        }

        if(request.method == 'POST'){
            request.addListener("data",function(_data){
                postData += _data;
            });
            request.addListener("end",function(){
                var postDataObj = queryString.parse(postData);
                userRouter[pathname](postDataObj, function(result){
                    response.write(result);
                    response.end();
                })
               
            })
        }else if(request.method == 'GET'){
            var pramObj = urlObj.query;
            if(typeof userRouter[pathname] == 'function'){
                userRouter[pathname](pramObj,function(result){
                    response.write(result);
                    response.end();
                })
            }
        }
        
    }

}