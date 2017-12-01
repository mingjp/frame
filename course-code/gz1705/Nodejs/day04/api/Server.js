var express = require('express');
var app = express();
// var router = require('./router/MainRouter.js');
var mongodb = require('mongodb');
var id = new mongodb.ObjectID.createFromHexString('59e5a77eaa1df747c8473677');
var dbServer = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('test1705candel', dbServer);

var MongoClient = mongodb.MongoClient;


app.get('/a', function(req, res){
	db.open(function(error, db){
		if(error){
			console.log({status: false, message: error});
		} else {
			db.collection("user", function(error, collection){
				if(error){
					console.log({status: false, message: error});
				} else {
					collection.insert({"username" : "888", "password" : "888", "email" : "888", "tel" : "888"}, function(error, result){
						console.log(error, result.ops);
						collection.remove({"_id": id}, function(error, result){
							console.log(error, result.result);
						})					
					});
				}
			})
		}
	})	
	res.send('123');
})

app.listen(88)



// router.Register(express);