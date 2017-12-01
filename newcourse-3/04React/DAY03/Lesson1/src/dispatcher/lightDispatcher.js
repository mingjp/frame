var flux = require('flux');
var lightDispatcher = new flux.Dispatcher();
var lightStore = require('../stores/lightStore.js');

lightDispatcher.register(function(type){
	switch(type){
		case 'red':
			//发起改变
			lightStore.changeRed();
			//将改变映射 view
			lightStore.lightChanage();	
			break;
		case 'green':
			lightStore.changeGreen();
			lightStore.lightChanage();		
			break;
		default:
			lightStore.changeYellow();
			lightStore.lightChanage();
	}
})

module.exports = lightDispatcher;