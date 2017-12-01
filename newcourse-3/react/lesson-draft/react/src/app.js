var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./component/AppComponent.jsx');
var AppComponentCopy = require('./component/AppComponentCopy.jsx');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory  } = ReactRouter;
//diff 算法
ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={AppComponent}/>
		<Route path="/copy" component={AppComponentCopy}/>
	</Router>)
	, document.getElementById('content')
);