import React, {Component} from 'react'
import LightAction from './LightAction'
import LightStore from './LightStore'


class LightComponent extends Component{
    state = {
        src: 'red'
    }
    change(event){
        LightAction(event.target.value)
    }
    componentDidMount(){
        LightStore.addEvent(function(){
            this.setState({src: LightStore.type})
        }.bind(this))
    }
    render(){
        //view
        return (
            <div>
                <input type="button"  value="red" onClick={this.change.bind(this)} />
                <input type="button"  value="green" onClick={this.change.bind(this)} />
                <input type="button"  value="yellow" onClick={this.change.bind(this)} />
                <img src={`./imgs/${this.state.src}.jpg`} alt="" />
            </div>
        )
    }
}

export default LightComponent