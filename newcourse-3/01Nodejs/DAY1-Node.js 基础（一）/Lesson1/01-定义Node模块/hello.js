//a.js
function hello(){
	console.log('Hello World');
}

function hello1(){
	console.log('Hollo World 1');
}


//导出模块，把模块接口公开出去，或者说是把模块接口暴露出去
exports.say = hello;

// var exports = {};
// exports.say = hello;
// return exports

// function funA(){
// 	return {
// 		say: function(){
// 			console.log('say');
// 		}
// 	};
// }

// var jQuery = funA();
// jQuery.say();

// exports.say1 = hello1;


//---------------------

//b.js
//引入模块
//(./) => 相对路径的引入方式
var jQuery = require('./hello');
console.log(hello);
使用模块

jQuery.say();
hello.say1();
