var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(request,response){
  
    var urlObj = url.parse(request.url,true)
    console.log(urlObj);
    if(urlObj.query.type == 'img'){
        var contents = fs.readFileSync('./001.jpg','binary');
        // http.createServer(function(request,response){
            response.writeHead(200,{'Content-Type':'image/jpeg'});
            response.write(content,'binary');
            response.end();
        // })
    }else if(urlObj.query.type == 'info'){
        response.end('{name: "name", age: 18}');
    
    }
    // response.end();
}).listen('8082');