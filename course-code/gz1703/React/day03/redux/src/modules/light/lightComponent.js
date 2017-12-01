import React from 'react';
import {connect} from 'react-redux';
import * as lightActions from './lightAction';
import './light.scss';

class LightComponent extends React.Component{
    render(){
        return (
            <div>
                <img src={'./src/static/images/' + this.props.color + '.jpg'}/>
                <br />
                <input type="button" value="red" onClick={this.props.changeRed}/>
                <input type="button" value="green" onClick={this.props.changeGreen} />
                <input type="button" value="yellow" onClick={this.props.changeYellow} />
            </div>
        )
    }
}

const mapStateToPorps = state => ({
    color: state.color
})

// props => action & state
export default connect(mapStateToPorps, lightActions)(LightComponent);