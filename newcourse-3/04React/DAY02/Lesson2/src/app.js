var React = require('react');
var ReactDOM = require('react-dom');

var MoveComponent = require('./component/MoveComponent.jsx');
var MoveTypeComponent = require('./component/MoveTypeComponent.jsx');
var MoveChinessComponent = require('./component/MoveChinessComponent.jsx');
var MoveUSAComponent = require('./component/MoveUSAComponent.jsx');

var MusicComponentCopy = require('./component/MusicComponent.jsx');

var ReactRouter = require("react-router");
var {Router, Route, hashHistory, Link, IndexRoute, browserHistory} = ReactRouter;


//index
// var RootComponent = React.createClass({
// 	render() {
// 		return (
// 			<div>
// 				<h1>index</h1>
// 				<ul>
// 				  	<li><Link to="/move">电影1</Link></li>
// 				  	<li><Link to="/music">音乐2</Link></li>
// 				</ul>
// 			</div>
// 		);
// 	}
// });


// ReactDOM.render(
// 	(<Router history={hashHistory}>
// 		<Route path="/" component={RootComponent}/>
// 		<Route path="/move" component={MoveComponent}/>
// 		<Route path="/music" component={MusicComponentCopy}/>
// 	</Router>)
// 	, document.getElementById('content')
// );

// 路由嵌套
var RootComponent = React.createClass({
    componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route, 
        this.routerWillLeave
      )
    },

    routerWillLeave(nextLocation) {
    	return true
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      // return '确认要离开？';
    },	
	render() {
		return (
			<div>
				<h1>index</h1>
				<ul>
				  	<li><Link to="/move">电影</Link></li>
				  	<li><Link to="/music">音乐</Link></li>
				</ul>
			</div>
		);
	}
});

//xxoo.com
//index.html
//xxoo.com/#/move
//xxoo.com/#/move/usa
////xxoo.com/#/move/chiness
ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={RootComponent}/>
		<Route path="/move" component={MoveComponent}>
			<IndexRoute component={MoveTypeComponent}/>
			<Route path="chiness" component={MoveChinessComponent} />
			<Route path="usa" component={MoveUSAComponent} />
		</Route>
		<Route path="/music" component={MusicComponentCopy} onEnter={enterMusicFun}/>
	</Router>)
	, document.getElementById('content')
);

function enterMusicFun(nextState, replace, next){
	console.log(123)
	// $.ajax(//是否有登陆，或者是否有权限)
	// replace('/');
	next();
}