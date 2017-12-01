var http = require('http');
var url = require('url');
var querystring = require('querystring');

var mongodb = require('mongodb');
//连接数据库服务器
var server = new mongodb.Server('localhost', 27017);
//指定要操作的 db
var db = new mongodb.Db('1000phone', server);

var rule = {
    register: function(request){
        var postdata = '';
        request.on('data', function(_data){
            postdata += _data;
        })

        request.on('end', function(){
            console.log(querystring.parse(postdata));
            //注册业务逻辑
            db.open(function(error, db){
                db.collection('users', function(error, collection){
                    collection.insert(querystring.parse(postdata), function(error, result){
                        // if(!error){
                        //     response.end('')
                        // }
                    });
                })
                db.close();
            })
        })
    },
    login: function(){}
}

http.createServer(function(request, response){
    var urlObj = url.parse(request.url, true);
    for(var key in urlObj.query){
        if(rule[urlObj.query[key]] && typeof rule[urlObj.query[key]] == 'function'){
            rule[urlObj.query[key]](request);
        }
    }
    
    response.end();
}).listen(1703)