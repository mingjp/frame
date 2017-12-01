var {CHANGE_GREEN, CHANGE_YELLOW, CHANGE_RED} = require('../constants/lightConstant');

exports.changeGreen = function(){
	return {type: CHANGE_GREEN};
}

exports.changeYellow = function(){
	return {type: CHANGE_YELLOW};
}

exports.changeRed = function(){
	return {type: CHANGE_RED};
}