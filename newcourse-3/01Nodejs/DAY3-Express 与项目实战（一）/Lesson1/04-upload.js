//http://blog.csdn.net/devil13th/article/details/50404351

//引入express模块  
var express = require('express');  
//引入multer模块  
var multer = require ('multer');  
//设置上传的目录，  
//这里指定了一个临时目录（上传后的文件均保存到该目录下），  
//真正开发是一般加入path模块后使用path.join(__dirname,'temp');  
var upload = multer({ dest:  "/home/nodejs/multertest/temp" });  
var app = express();  
  
//处理http://127.0.0.1:3000请求，这个例子没有用到  
app.get('/', function(req, res){  
  res.send('please upload ... ');  
});  
  
  
//单位件上传   
//注意上传界面中的 <input type="file" name="avatar"/>中的name必须是下面代码中指定的名称  
app.post('/singleUpload', upload.single('avatar'), function (req, res, next) {  
  // req.file is the `avatar` file   
  // req.body will hold the text fields, if there were any   
  console.log(req.file);  
  console.log(req.body);  
    
  res.end("上传成功");  
});  
  
//多附件上传  
//注意上传界面中的 <input type="file" name="photos"/>中的name必须是下面代码中指定的名  
app.post('/mulUpload', upload.array('photos', 12), function (req, res, next) {  
  // req.files is array of `photos` files   
  // req.body will contain the text fields, if there were any   
  
  console.log(req.files);  
  console.log(req.body);  
  //res.end(req.file + "<br/><br/>" + req.body);  
  res.end("aaaaa");  
  
})  
  
app.listen(3000); 