var React = require('react');

var AppComponent = React.createClass({
	render() {
		return <div>Hello App</div>;
	}
});

var AppComponent1 = {};

var AppComponent2 = {};

// module.exports = AppComponent;
exports.DK1 = AppComponent;
exports.DK2 = AppComponent1;
exports.DK3 = AppComponent2;