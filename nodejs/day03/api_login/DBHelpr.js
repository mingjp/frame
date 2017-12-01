var mongodb = require('mongodb');
var dbServer = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('h5_1705', dbServer);
var apiResult = require('./ApiResult.js');
// console.log(apiResult);
var obj = {
    insert: function(_collection, _data, _callback){
        db.open(function(error, db){
            if(error){
                _callback(apiResult(false, null, error));
                return false;
            }
            db.collection(_collection, function(error, collection){
                if(error){
                    _callback(apiResult(false, null, error));
                    return false;                   
                }
                collection.insert(_data);
                _callback(apiResult(true));
                db.close();
            })
        })
    },
    find: function(_collection, _data, _callback){
        db.open(function(error, db){
            if(error){
                _callback(apiResult(false, null, error));
                return false;
            }
            db.collection(_collection, function(error, collection){
                if(error){
                    _callback(apiResult(false, null, error));
                    return false;                   
                }
                console.log(_data.username);

                collection.find().toArray(function(err , items){
                    console.log(items.length);
                    for(var i = 0;i<items.length;i++){
                        if(items[i].username == _data.username && items[i].password == _data.password){
                        // _callback(apiResult(true));
                        console.log('登录成功');
                    }else{
                         // _callback(apiResult(false, null, error));
                        console.log('失败');
                    }
                    }
                    
                    console.log(items);
                    db.close();
                });

                // if(collection.find(_data).pretty()){
                //     alert('登录成功');
                // }else{alert('失败');}
                // _callback(apiResult(true));
                db.close();
            })
        })
    },
    delete: function(collection, data, callback){},
    update: function(collection, data, callback){}
}

module.exports = obj;