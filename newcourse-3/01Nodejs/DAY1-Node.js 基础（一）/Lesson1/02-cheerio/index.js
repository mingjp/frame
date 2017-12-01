var cheerio = require('cheerio');
var baidu = require('./baidu');

var url = 'http://www.baidu.com';

baidu.baidu(url, function(data){
	if(data){
		var $ = cheerio.load(data);
		$('a').each(function(i, e){
			console.log($(e).attr('href'));
		})
	} else {
		console.log('error');
	}
})