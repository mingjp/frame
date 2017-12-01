function FunA(){
    return 'Tom';
}

function FunB(){
    return 'Lucy';
}

//暴露，一个模块有且仅有一个 module.exports
// module.exports = FunA;

//对象 => 无序属性聚合，引用类型

exports.FunA = FunA;
exports.FunB = FunB;