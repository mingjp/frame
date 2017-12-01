var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
  stats: config.devServer.stats,
  hot: true,
  publicPath: config.output.publicPath
});

server.listen(3000, 'localhost', function(err, result) {});

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/customer', function(req, res){
  res.send('customer page');
});
app.get('/admin', function(req, res){
  res.send('admin page');
});

var appServer = app.listen(888, function(){
	console.log(appServer.address());
})