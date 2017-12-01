var React = require('react');
var lightAction = require('../actions/lightAction.js');
var lightStore = require('../stores/lightStore.js');

var LightComponent = React.createClass({
	getInitialState: function(){
		return {
			src: ''
		}
	},
	redHandler: function(){
		lightAction('red');
	},
	greenHandler: function(){
		lightAction('green');
	},
	yellowHandler: function(){
		lightAction('yellow');
	},	
	componentDidMount: function(){
		lightStore.addEvent(function(){
			this.setState({src: lightStore.src});
		}.bind(this));
	},	
	render: function(){
		return (
			<div>
				<img src={this.state.src} />
				<br/>
				<input type="button" onClick={this.redHandler} value="red"/>
				<input type="button" onClick={this.greenHandler} value="green"/>
				<input type="button" onClick={this.yellowHandler} value="yellow"/>
			</div>
		)
	}
})

module.exports = LightComponent;