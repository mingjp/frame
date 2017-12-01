var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./component/AppComponent.jsx');
var AppComponentCopy = require('./component/AppComponentCopy.jsx');
var ReactRouter = require("react-router");
var { Router, Route, hashHistory, Link } = ReactRouter;
//diff 算法
//
var RootComponent = React.createClass({
	render() {
	  return (<div>
	    <ul role="nav">
	      <li><Link to="/app">copy</Link></li>
	      <li><Link to="/copy">copy</Link></li>
	    </ul>
	  </div>);
	}
});

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={RootComponent}/>
		<Route path="/app" component={AppComponent}/>
		<Route path="/copy" component={AppComponentCopy}/>
	</Router>)
	, document.getElementById('content')
);