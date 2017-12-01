var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: 3306,
  database: '1000phone'
});


module.exports = {
	select: function(tsql, callback){
		pool.query(tsql, function(error, rows){
			callback(rows);
		})
	}
}