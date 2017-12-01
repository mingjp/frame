/* 
* @Author: Marte
* @Date:   2017-11-09 11:32:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 12:57:48
*/

var React = require('react');
var LightAction = require('./LightAction.js');
var LightStore = require('./LightStore.js');

var LightComponent = React.createClass({
    getInitialState:function(){
        return {
            src:''
        }
    },
    change:function(event){
        var type = event.target.value;
        LightAction(type);
    },
    componentDidMount: function(){
        this.setState({src: LightStore.src});
        LightStore.changeEvent = function(){
            this.setState({src: LightStore.src});
        }.bind(this);
    },
    render:function(){
        return(
            <div>
                <p><img src={this.state.src}/></p>
                <input type="button" value="red" onClick={this.change}/>
                <input type="button" value="yellow" onClick={this.change}/>
                <input type="button" value="green" onClick={this.change}/>
            </div>
            )
    }
})

module.exports = LightComponent;