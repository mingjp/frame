var React = require('react');

var TomCatComponent = React.createClass({
	getDefaultProps() {
		return {
			name: 'defalutProps'
		}
	},
	propTypes: {
		name: React.PropTypes.string.isRequired
	},
	render: function(){
		return <h1>Hello {this.props.name}</h1>;
	}
});

module.exports = TomCatComponent;