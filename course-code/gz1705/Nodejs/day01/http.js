var http = require('http');
var url = require('url');
// var querystring = require('querystring');

http.createServer(function(request, response){
	response.end("Hello 1000phone");

	//http://localhost:8080?name=dk&password=123456
	var urlString = request.url;
	var urlObj = url.parse(urlString, false);//{query:"?name=dk&password=123456"}
	//?name=dk&password=123456
	var queryStr = urlObj.query;
	//{name:'dk', password: 123456}
	var queryObj = querystring.parse(queryStr);

	// console.log(request.url);
	// var urlObj = url.parse(request.url, false);
	// var queryStr = urlObj.query;
	// console.log(urlObj);
	// console.log(querystring.parse(queryStr));
	

	// var urlObj = { 
	//   	protocol: 'http:',
	//     slashes: true,
	//     hostname: 'baidu.com',
	//     port: 80,
	//     hash: '#hash',
	//     search: '?query=string',
	//     path: '/nodejs?query=string'
	// }
	// var urlString = url.format(urlObj);
	// console.log(urlString);
	// response.end();
}).listen(8080);