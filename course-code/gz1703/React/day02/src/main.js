var React = require('react');
var ReactDOM = require('react-dom');

var {Router, Route, Link, hashHistory, browserHistory} = require('react-router');

var RootComponent = React.createClass({
    render: function(){
        return (
            <div>
                <h1>RootComponent</h1>
                <p><Link to="/component1/dk">component1</Link></p>
            </div>
        )
    }
})

var Component1 = React.createClass({
    render: function(){
        console.log(this);
        return (
            <div>
                <h1>Component1</h1>
                <h2>{this.props.params.name}</h2>
            </div>
        )
    }
})

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent} />
        <Route path="/component1(/:name)" component={Component1} />
    </Router>,
    document.getElementById('div1')
);