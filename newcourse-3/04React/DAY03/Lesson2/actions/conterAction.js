var {INCREMENT_COUNTER, DECREMENT_COUNTER} = require('../constants/counterConstant.js');

//增加
exports.increment = function(){
	return {
		type: INCREMENT_COUNTER
	}
}

exports.decrement = function(){
	return {
		type: DECREMENT_COUNTER
	}
}