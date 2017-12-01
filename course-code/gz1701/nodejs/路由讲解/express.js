//express 继承了 http 的方法和属性

var dkexpress = require('express');
var dkapp = dkexpress();

//url.pathname
dkapp.get('/login/:id/:name/:password', function(request, response){
	console.log('login');
	console.log(request.params);
	response.send();
})

dkapp.get('/register', function(request, response){
	console.log('register');
	response.send();
})

dkapp.get('/root', function(request, response){
	console.log('root');
	response.end();
})

dkapp.get('/', function(request, response){
	console.log('/');
	console.log(request);
	response.end();
})

dkapp.listen(888);