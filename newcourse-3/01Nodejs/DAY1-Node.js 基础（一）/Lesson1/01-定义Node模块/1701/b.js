//公有方法
//私有方法
//
//
function FunA(){
	 this.say = function(arg){
	 	console.log('FunA： ' + arg);
	 }
}


function funB(){
	var obj = {
		say: function(arg){
			console.log('funB：' + arg);
		}
	}

	return obj;
}
//一个 nodejs 的模块只能有一个 module.exports
// module.exports = FunA;

// module.exports = funB;
// var exports = {};
// 一个 nodejs 的模块可以有多个 exports 对象属性
exports.FunA = FunA;
exports.funB = funB;


// return exports;

// var obj = {name: 'dk'};
// obj = 1;

// console.log(obj)