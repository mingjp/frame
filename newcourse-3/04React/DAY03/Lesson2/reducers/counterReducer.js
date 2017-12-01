var {INCREMENT_COUNTER, DECREMENT_COUNTER} = require('../constants/counterConstant.js');

module.exports = function(state, action){
	switch(action.type){
		case INCREMENT_COUNTER:
			state += 1;
			break;
		case DECREMENT_COUNTER:
			state -= 1;
			break;
		default:
			state = 0;
	}
	return state;
}