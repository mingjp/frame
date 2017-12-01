function Food(){
	this.name = '水煮鱼';
	this.remark = '非常有名的一道菜';
}

Food.prototype.getName = function(){
	return this.name;
}

Food.prototype.setName = function(_name){
	this.name = _name;
}


function Play(){
	this.name = 'Game';
	this.remark = 'LOL';
}

Play.prototype.getName = function(){
	return this.name;
}

Play.prototype.setName = function(_name){
	this.name = _name;
}

// module.exports = Food;
// module.exports = Play;

exports.Food = Food;
exports.Play = Play;

module.exports = {Food: Food, Play: Play};