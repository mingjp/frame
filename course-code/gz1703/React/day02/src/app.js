var React = require('react');
var ReactDOM = require('react-dom');

var {Router, Route, Link, hashHistory, browserHistory, IndexRoute} = require('react-router');

var RootComponent = React.createClass({
    componentDidMount: function(){
        console.log(this);
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },
    routerWillLeave: function(){
        return '确定要离开吗？';
    },
    render: function(){
        return (
            <div>
                <h1>RootComponent</h1>
                <p><Link to="/component1">component1</Link></p>
                <p><Link to="/component2">component2</Link></p>
            </div>
        )
    }
})

var Component1 = React.createClass({
    render: function(){
        return (
            <h1>Component1</h1>
        );
    }
})

var Component2 = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Component2</h1>
                <p><Link to="/component2/component3">component3</Link></p>
                <p><Link to="/component2/component4">component4</Link></p>
                <div>{this.props.children}</div>
            </div>
        );
    }
})

var Component3 = React.createClass({
    render: function(){
        return (
            <h1>Component3</h1>
        );
    }
})

var Component4 = React.createClass({
    render: function(){
        return (
            <h1>Component4</h1>
        );
    }
})

var Component5 = React.createClass({
    render: function(){
        return (
            <h1>Component5</h1>
        );
    }
})

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}/>
        <Route path="/component1" component={Component1} onEnter={beforeEnter}/>
        <Route path="/component2" component={Component2}>
            <Route path="component3" component={Component3}/>
            <Route path="component4" component={Component4}/>
        </Route>
    </Router>,
    document.getElementById('div1')
)

function beforeEnter(nextState, replace, next){
    console.log(123);
    if(window.localStorage.getItem('name')){
        // /component1
        next();
    } else {
        // /component1
        // /
        replace('/');
        next();
    }
}