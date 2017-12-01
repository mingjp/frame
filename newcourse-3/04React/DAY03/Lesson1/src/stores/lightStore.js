var events = require('events');
var emitter = events.EventEmitter;
var assign = require('object-assign');

module.exports = assign({}, emitter.prototype, {
	src: '',
	changeRed: function(){
		this.src = './imgs/red.jpg';
	},
	changeGreen: function(){
		this.src = './imgs/green.jpg';
	},
	changeYellow: function(){
		this.src = './imgs/yellow.jpg';
	},
	lightChanage: function(){
		this.emit('change');
	},
	addEvent: function(_callback){
		this.on('change', _callback);
	}
});
//事件绑定
// event.on('eventnmae', function(){})
// //
// event.emit('eventname')