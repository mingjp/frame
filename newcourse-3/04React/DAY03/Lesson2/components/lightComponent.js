var React = require('react');

var LightComponent = React.createClass({
	render: function() {
		console.log(this.props)
		return(
			<div>
				<img style={{width: '50px'}} src={'./imgs/' + this.props.color + '.jpg'} />
				<br/>
				<button onClick={this.props.changeRed}>red</button>
				<button onClick={this.props.changeGreen}>Green</button>
				<button onClick={this.props.changeYellow}>Yellow</button>
			</div>
		)
	}
})

module.exports = LightComponent;