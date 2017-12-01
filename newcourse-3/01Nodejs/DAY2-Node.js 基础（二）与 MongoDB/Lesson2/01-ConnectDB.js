//npm install mongodb --save-dev
var  mongodb = require('mongodb');
//联接 mongodb 服务器
var  server  = new mongodb.Server('localhost', 27017);
//指定要操作哪个数据库 => use  1000phone
var  db = new mongodb.Db('1000phone', server);

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        // 连接Collection（可以认为是mysql的table）
        // 第1种连接方式
        db.collection('product', function(err, collection){
            if(err){
                console.log(err);
            }else{
                var tmp1 = {id:'1',title:'hello',number:1};
                collection.insert(tmp1, function(err, result){
                    console.log(result);
                });               
                collection.insert(tmp1, function(err, result){
                    console.log(result);
                });                 
            }
        });
        
        // 第2种连接方式
        return false;
        db.createCollection('mycoll', function(err, collection){
            if(err){
                console.log(err);
            }else{
                //新增数据
                // var tmp1 = {id:'1',title:'hello',number:1};
       //          collection.insert(tmp1,{safe:true},function(err, result){
       //              console.log(result);
       //          }); 
                   //更新数据
                   // collection.update({title:'hello'}, {$set:{number:3}}, {safe:true}, function(err, result){
                   //     console.log(result);
                   // });
                   // 删除数据
                       // collection.remove({title:'hello'},{safe:true},function(err,result){
        //                   console.log(result);
        //               });

                // console.log(collection);
                // 查询数据
                var tmp1 = {title:'hello'};
                 var tmp2 = {title:'world'};
                 collection.insert([tmp1,tmp2],{safe:true},function(err,result){
                  console.log(result);
                 }); 
                 collection.find().toArray(function(err,docs){
                  console.log('find');
                  console.log(docs);
                 }); 
                 collection.findOne(function(err,doc){
                    console.log('findOne');
                    console.log(doc);
                 }); 
            }
            db.close();

        });
        // console.log('delete ...');
        // //删除Collection
        // db.dropCollection('mycoll',{safe:true},function(err,result){

  //           if(err){
                
        //         console.log('err:');
        //         console.log(err);
        //     }else{
        //         console.log('ok:');
        //         console.log(result);
        //     }
  //       }); 
    }else{
        console.log(err);
    }
});