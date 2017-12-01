var React = require('react');
require('./TodoList.css')

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var TodoListComponent = React.createClass({
	getInitialState() {
		return {
			todoList: [],
			doneList: []
		}
	},

	addItem: function(event){
		if(event.keyCode == 13 && event.target.value){
			console.log(1)
			var items = this.state.todoList;
			items.push({name: event.target.value});
			this.setState({todoList: items});
		}
	},
	done: function(item, index, event){
		
		var items = this.state.doneList;
		items.push(this.state.todoList[index]);
		this.setState({doneList: items})
		
		items = this.state.todoList;
		items.splice(index, 1);
		this.setState({todoList: items});
	},
	render: function(){
		return (
			<div>
				<input type="text" onKeyDown={this.addItem}/>

				<h3>未完成</h3>
				<ReactCSSTransitionGroup transitionName="todolist" transitionEnterTimeout={600} transitionLeaveTimeout={300}>
					{
						this.state.todoList.map(function(item, index){
							return <div className="item" key={index} onClick={this.done.bind(this, item, index)}>{item.name}</div>
						}.bind(this))
					}
				</ReactCSSTransitionGroup>

				<h3>已完成</h3>
				<ReactCSSTransitionGroup transitionName="todolist" transitionEnterTimeout={600} transitionLeaveTimeout={300}>
					{
						this.state.doneList.map(function(item,index){
							return <div  className="item" key={index}>{item.name}</div>
						})
					}
				</ReactCSSTransitionGroup>								
			</div>

		
		)
	}
})	

module.exports = TodoListComponent;		