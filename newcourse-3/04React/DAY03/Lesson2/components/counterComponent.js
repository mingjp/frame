var React = require('react');
var redux = require('redux');
var counterReducer = require('../reducers/counterReducer.js');
var counterAction = require('../actions/conterAction.js');

//创建 store
//stroe 是对 reducer 的一种实现 
var store = redux.createStore(counterReducer);

// store.subscribe(function(){
// 	console.log(store.getState());
// })

// var dk = {};
// dk.createStore = function(_reducer){
// 	var obj = {};
// 	obj.state = null;
// 	obj.dispatch = function(_obj){
// 		obj.state = _reducer(obj.state || 0, _obj);
// 	}
// 	obj.getState = function(){
// 		return obj.state;
// 	}
// 	return obj;
// }

// var dkstore = dk.createStore(counterReducer)



var CounterComponent = React.createClass({
	getInitialState: function(){
		return {value: store.getState()}
	},
	increment: function(){
		store.dispatch(counterAction.increment());
		this.setState({value: store.getState()});
	},
	decrement: function(){
		store.dispatch(counterAction.decrement());
		this.setState({value: store.getState()});
	},
	render: function(){
	    return (
	      <p>
	        Clicked: {this.state.value} times
	        {' '}
	        <button onClick={this.increment}>+</button>
	        {' '}
	        <button onClick={this.decrement}>-</button>	        
	      </p>
	    )		
	}
})

module.exports = CounterComponent;