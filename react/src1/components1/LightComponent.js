/* 
* @Author: Marte
* @Date:   2017-11-09 17:02:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 21:33:50
*/

var React = require('react');
var LightAction = require('./LightAction.js')
import {connect} from 'rect-redux';
import * as LightAction from './LightAction'

var LightCompont = React.createClass({
    render:function(){
        return(
            <div>
                <p><img src={this.state.src}/></p>
                <input type="button" value="red"/>
                <input type="button" value="yellow"/>
                <input type="button" value="green"/>
            </div>
            )
    }
})

var stateColor = function(state){
    return {
        
        color:state.color
    }
}
export default connect(stateColor,LightAction)(LightComponent)