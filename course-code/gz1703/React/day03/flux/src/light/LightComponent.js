import React from 'react';
import ReactDOM from 'react-dom';
import lightAction from './LightAction';
import LightStore from './LightStore';

class LightComponent extends React.Component{
    state = {
        src: 'red'
    }

    change(event){
        //触发 action
        lightAction(event.target.value);
    }

    componentDidMount(){
        LightStore.addEvent(function(){
            this.setState({src: LightStore.type});
        }.bind(this))
    }

    render(){
        return (
            <div>
                <input type="button" value="red" onClick={this.change}/>
                <input type="button" value="green" onClick={this.change} />
                <input type="button" value="yellow"  onClick={this.change}/>
                <img src={'../img/' + this.state.src + 'jpg'} />
            </div>
        )
    }
}