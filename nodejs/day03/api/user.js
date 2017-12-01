// var db = require('./DBHelpr.js');
var url = require('url');

var urlObj = { 
    firstname: 'dk',
    url: 'http://dk-lan.com',
    lastname: 'tom',
    passowrd: '123456' 
}
var urlString = url.format(urlObj);
console.log(urlString);
console.log(22)
// var router={
//     "/register":function(_data,_callback){
//         db.select('user',{},function(result){
//             _callback(result);
//         })
//     },
//     "/login":function(){

//     }
// }

// module.exports = router;