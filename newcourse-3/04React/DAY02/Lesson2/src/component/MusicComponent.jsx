var React = require('react');

var AppComponentCopy = React.createClass({
	render() {
		// console.log(this.props);
		return <div style={{color: "red"}}>音乐{this.props.params.id}</div>;
	}
});

module.exports = AppComponentCopy;