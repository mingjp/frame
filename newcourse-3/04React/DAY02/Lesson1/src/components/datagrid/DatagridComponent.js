var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var DatagridComponent = React.createClass({
	getDefaultProps() {
		return {
			columns: []
		}
	},
	getInitialState: function() {
		return {
			data: []
		}
	},
	componentWillMount() {
		console.log(1);

	},
	componentDidMount() {
		console.log(3);
		$.get(this.props.api, function(_response){
			console.log(4);
			this.setState({data: _response.data});
		}.bind(this))		
	},
	componentWillUpdate(nextProps, nextState) {
		console.log(5);
	},
	componentDidUpdate(prevProps, prevState) {
		console.log(6);
	},
	render: function(){
		console.log(2);
		for(var key in this.state.data[0]){
			this.props.columns.push(key);
		}
		return (
			<table>
				<thead>

				
					<tr>
						{
							this.props.columns.map(function(index, elem) {
								return <th name={index} key={index}>{index}</th>;
							})							
						}
					</tr>
				</thead>
			</table>
		)
	}
});

module.exports = DatagridComponent;