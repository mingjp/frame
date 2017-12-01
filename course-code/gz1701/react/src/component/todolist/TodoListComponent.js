// var React = require('react')
// require('./TodoList.scss')

import React from 'react'
import './TodoList.scss'

// var TodoListComponent = React.createClass({
//     render(){}
// })

// module.exports = TodoListComponent;


class TodoListComponent extends React.Component{
    state = {
        todoList: [],
        doneList: []
    }
    additem(event){
        if(event.keyCode == 13 && event.target.value){
            //添加
            let items = this.state.todoList || [];
            items.push(event.target.value);
            this.setState({todoList: items});
        }
    }
    done(index){
            let items = this.state.doneList || [];
            items.push(this.state.todoList[index]);
            this.setState({doneList: items});

            items = this.state.todoList || [];    
            items.splice(index, 1);
            this.setState({todoList: items});            
    }

    render(){
        let self = this
        return (
            <div>
                <input type="text" onKeyDown={this.additem.bind(this)}/>
                <h3>未完成</h3>
                {
                    this.state.todoList.map(function(item, index){
                        return <div className="item" onClick={this.done.bind(this, index)}>{item}</div>
                    }.bind(this))
                }
                <h3>已完成</h3>
                {
                    this.state.doneList.map(function(item, index){
                        return <div className="item">{item}</div>
                    }.bind(this))
                }                
            </div>
        )
    }
}

export default TodoListComponent