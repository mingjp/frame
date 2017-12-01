var React = require('react');
var ReactDOM = require('react-dom');
var TomCatComponent = require('./component/TomComponent.jsx');
ReactDOM.render(<TomCatComponent/>, document.getElementById('div2'));



// var DK1 = require('./component/AppComponent.jsx').DK1;
// var DK2 = require('./component/AppComponent.jsx').DK2;
// var DK3 = require('./component/AppComponent.jsx').DK3;

// var DK = require('./component/AppComponent.jsx');
// var DK1 = DK.DK1;
// var DK2 = DK.DK2;
// var DK3 = DK.DK3;

var {DK1, DK2, DK3} = require('./component/AppComponent.jsx');

ReactDOM.render(<DK1/>, document.getElementById('div1'));


var AppComponent = React.createClass({
	render() {
		return <div>Hello App</div>;
	}
});
ReactDOM.render(<AppComponent/>, document.getElementById('div1'));