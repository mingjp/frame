var db = require('./DBHelpr.js');

var router={
    "/register":function(_data,_callback){
        db.insert('user',_data,function(result){
            _callback(result);
        })
    },
    "/login":function(_data,_callback){
        db.find('user',_data,function(result){
            _callback(result);
        })
    }
}

module.exports = router;