// 安装mongodb nodejs driver
// 要安装mongodb nodejs的原生driver，可以通过npm，也可以通过github下载：
// npm install mongodb
// 连接到数据库
var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('foo', server);

db.open(function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
// 查询Get
db.open(function(err, db) {
    if(!err) {
        console.log("We are connected");
        db.collection('bar', function(err, collection){
            collection.find().toArray(function(error, bars){console.log(bars);});
        collection.find({a:1}).toArray(function(error, bars){console.log(bars);});
        collection.findOne({a: 1}, function(error, bar){console.log(bar)});
        });
    }
});
// 这里一旦用find获取到结果集之后，需要调用toArray方法，并传递回调函数，这个时候才能拿到真正的数据。第二个find语句则是查找所有a=1的文档。第三个find语句则是只找第一个满足条件的文档。具体更多的过滤条件可以参考官方的Query语句。这里有个有趣的事情需要注意，find本身并不执行查询，它只是返回一个Cursor实例，你可以遍历这个Cursor来查询数据。如下面的例子：
  // Cursors don't run their queries until you actually attempt to retrieve data
  // from them.

  // Find returns a Cursor, which is Enumerable. You can iterate:
  collection.find(function(err, cursor) {
    cursor.each(function(err, item) {
      if(item != null) console.dir(item);
    });
  });

  // You can turn it into an array
  collection.find(function(err, cursor) {
    cursor.toArray(function(err, items) {          
      console.log("count: " + items.length);
    });
  });
// 插入Insert
db.open(function(err, db) {
  if(!err) {
    db.collection('bar', function(err, collection) {
      var doc1 = {a: 1};
      var doc2 = {a: 2, b: 'b2'};
      var docs = [{a:3}, {a:4}];

      collection.insert(doc1);
      collection.insert(doc2, {safe:true}, function(err, result) {});
      collection.insert(docs, {safe:true}, function(err, result) {});
    });
  }
});
// 第一个insert和第二个insert的区别在于，
// 增加了一个option对象参数({safe:true})以及一个回调函数。
// MongoDB的insert/update/remove都是异步的，
// 也就是说发出insert命令之后，就不管数据库是否执行成功了。要想知道数据库是否执行成功，
// 需要再发出一个查询请求来获取连接（Connection）的最后一个错误状态。
// 为了简化这个过程，也就支持{safe:true}这个参数，
// 使得insert和错误状态查询能够一起执行,一旦设置这个参数，一定要增加回调函数作为第三个参数。
// 具体地，我们可以看下面地例子来理解这个{safe:true}的意义：
db.collection('bar', function(err, collection){
        collection.insert({a:996, _id:'1'}, function(error, bars){
        console.log('insert success without safe');
        console.log(error);
        console.log(bars);
        collection.insert({a:996, _id:'1'}, {safe:true}, function(error, bars){
            console.log('insert fail with safe and get error');
            console.log(error);
            console.log(bars);
            collection.insert({a:996, _id:'1'}, function(error, bars){
                console.log('insert fail without safe but no error');
                console.log(error);
                console.log(bars);
            });
        });
    });
});

// # output result
// [app.js] insert success without safe
// [app.js] null
// [app.js] [ { a: 996, _id: '1' } ]

// [app.js] insert fail with safe and get error
// [app.js] { [MongoError: E11000 duplicate key error index: foo.bar.$_id_  dup key: { : "1" }]
//         name: 'MongoError',
//         err: 'E11000 duplicate key error index: foo.bar.$_id_  dup key: { : "1" }',
//         code: 11000,
//         n: 0,
//         connectionId: 38,
//         ok: 1 }
// [app.js] undefined

// [app.js] insert fail without safe but no error
// [app.js] null
// [app.js] [ { a: 996, _id: '1' } ]
// 这里的_id是mongodb默认的主键，是不允许重复的。如果你传入了_id则以传入的值作为主键，如果没有传入则会自动生成。你可以看到，第一次insert，我们也不关心是不是真的插入了，幸运的是真的成功了，因为不存在_id为1的数据。第二次插入的时候，我们设置{safe:true}以确保一定插入成功，这是会报主键重复的错误。第三次同样的插入，但是不设置{safe:true}，这个时候发现并没有报错，而且回调函数还拿到了要插入的数据。是不是第三次插入成功了呢？不是的，其实正像第二次插入的一样，肯定是主键重复了，但是由于我们并没有要求返回最后的错误状态，所以mongodb drvier直接回调了我们传入的回调函数，并且设置error为null，bars为要插入的数据。总结一下，如果你要确保数据是否更新（insert/update/remove）成功必须要设置{safe:true}选项。
// 更新Update
collection.update({a:996}, {$push: {b:'b'}}, function(error, bars){});
collection.update({a:996}, {$set: {a:997}}, function(error, bars){});
// 注意，这里为了代码简单，我们没有设置{safe:true}。你可以看到update的第一个参数是条件，即对a＝996的文档进行更新。第二个参数则是表示要如何更新文档，譬如第一个update是增加一个属性b，且设置其值为字符串'b'；第二个update是修改a的值为997。可以看出，第二个参数是一个对象，其属性名是一个操作符，以$开头，值为一个对象。这些操作符除了这里的$push和$set，还有其它的$inc, $unset, $pushAll等等，具体可以参考这里。
// 删除Delete
collection.remove({a:997}, {safe:true}, function(error, count){
    console.log(error); 
    console.log(count);
    collection.remove();
});
// 这里第一个remove是删除a=997的所有文档。回调函数的第二个参数是表示相应删除的文档数量。第二个remove则是删除该collection中的所有文档。
// 高级
// 1. sort
// collection.find({}, {sort: [['created_at', 'desc'], ['body', 'asc']]})
// 其中'desc'也可以用-1表示，而'asc'可以用1表示。如果是只有一个sort列，也可以用下面的方式
// collection.find({}, {sort: {'created_at': -1}})
// 注意：这里用一个对象表示sort的时候，排序方向必须是1（升序）或者-1（降序）。可以说这是一个很垃圾的API设计。首先不应该用数组的数组来表示sort；而只用一列排序时只能用数字不能用字符串更加是API的不一致
// 2. limit
// collection.find({}, {limit: 10, skip:20})
// 这个可以用来做分页，表示获取从第20条（第1条记录序号为0）记录开始的10条记录.类似与Mysql的limit 20, 10.
// 3. count
// collection.count({}, function(err, count){...} )
// 第一个参数是query对象，可以省略。第二个参数是callback函数。