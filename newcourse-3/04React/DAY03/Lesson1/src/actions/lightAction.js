var lightDispatcher = require('../dispatcher/lightDispatcher.js');

module.exports = function(type){
	lightDispatcher.dispatch(type);
}