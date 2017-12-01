var mongodb = require('mongodb');
var dbServer = new mongodb.Server('localhost',27017);
var db = new mongodb.Db('h5_1705',dbServer);
var apiResult = require('./ApiResult.js');
var obj = {
    insert:function(_collection,_data,_callback){
        db.open(function(error,db){
            if(error){
                _callback(apiResult(false,null,error));
                return false;
            }
            db.collection(_collection,function(error,collection){
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
    select: function(_collection, _condition, _callback){
        db.open(function(error, db){
            if(error){
                _callback({status: false, message: error});
            } else {
                db.collection(_collection, function(error, collection){
                    if(error){
                        _callback({status: false, message: error});
                    } else {
                        collection.find(_condition || {}).toArray(function(error, dataset){
                            if(error){
                                _callback({status: false, message: error});
                            } else {
                                _callback({status: true, data: dataset});
                            }
                        })
                    }
                })
            }
            db.close();
        })
    },
}
module.exports = obj;