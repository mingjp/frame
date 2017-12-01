 var bodyparser = require('body-parser');
 var urlencode = bodyparser.urlencoded({extended: false});
 var db = require('./DBHelper.js');
 // console.log(bodyParser);
 module.exports = {
    Register:function(app){
        
        app.post('/Register', function(req, res){
            db.insert('user', req.body, function(result){
                // console.log(result);
                res.send({state: true});
            })
        })
    }
 }