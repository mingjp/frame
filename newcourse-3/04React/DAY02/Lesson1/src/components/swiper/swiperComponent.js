var React = require('react');
var $ = require('jquery');
var styles = require('./swiperComponent.css');

var SwiperComponent = React.createClass({
	getInitialState: function() {
		return {swiperSlide: []};
	},
	componentDidMount: function() {
		$.getJSON('./data.json', function(_response){
			var _state = this.state || {};
			_state.swiperSlide = _response;
			_state.index = 1;
			this.setState(_state);
			this.timer = window.setInterval(function(){
				this.refs.slideUL.style.WebkitTransform = "translateX(" + _state.index * this.props.width * -1 + "px)";
				_state.index += 1;
				if(_state.index >= 4){
					_state.index = 1;
				}
				// this.setState(_state);
			}.bind(this), 3000);
		}.bind(this));	
	},
	componentWillUnmount: function(){
		console.log(3);
	},
	render:function() {
		// var slides = [];
		// this.state.swiperSlide.forEach(function(item, index){
		// 	slides.push(<li style={{width: this.props.width}}><img src={item} /></li>);
		// }.bind(this));

		// return (
		// 	<div className="swiperContent" style={{width: this.props.width}}>
		// 		<ul style={{width: this.state.swiperSlide.length * this.props.width}} ref="slideUL">{slides}</ul>
		// 	</div>
		// );

		return (
			<div className="swiperContent" style={{width: this.props.width}}>
				<ul style={{width: this.state.swiperSlide.length * this.props.width}} ref="slideUL">{
					this.state.swiperSlide.map(function(e, i){
						return <li style={{width: this.props.width}}><img src={e} /></li>
					}.bind(this))						
				}</ul>
			</div>
		);

	
	}
});

module.exports = SwiperComponent;