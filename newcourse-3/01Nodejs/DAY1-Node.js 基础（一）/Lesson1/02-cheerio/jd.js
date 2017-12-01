var express = require('express');
var app = new express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function(req, res){
	console.log(1);
	request('http://www.jd.com', function(error, response, body){
		if(!error && response.statusCode == 200){
			var $ = cheerio.load(body);
			res.end('a');
		}
	})
});

var server = app.listen(3000, function(){
	console.log('Listening at 3000');
});