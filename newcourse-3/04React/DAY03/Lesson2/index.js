var React = require('react');
var ReactDOM = require('react-dom');
var CounterComponent = require('./components/counterComponent.js');
ReactDOM.render(
  <CounterComponent />,
  document.getElementById('counter')
)

//redux => redux 的设计模式（工作原理）
//react-redux
var redux = require('redux');
var {Provider} = require('react-redux');
var lightReducer = require('./reducers/lightReducer.js');
var LightComponent = require('./containers/lightContainer.js');
// var LightComponent2 = require('./components/lightComponent.js');
var store = redux.createStore(lightReducer);

ReactDOM.render(
	<Provider store={store}>
		<LightComponent />
	</Provider>,
	document.getElementById('light')
)
