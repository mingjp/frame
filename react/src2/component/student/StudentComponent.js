/* 
* @Author: Marte
* @Date:   2017-11-10 11:14:23
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-10 11:35:41
*/

import React from 'react'
import {connect} from 'react-redux'
import * as StudentAction from './StudentAction'


class StudentComponent extends React.Component{
	componentDidMount(){
		this.props.init()
	}
    render(){
   		console.log(123)
        return(
            <div>
            	<h1>{this.props.loading + ''}</h1>
                <table>
                    <thead>
                        <tr>
                       {
                            Object.keys(this.props.dataset.data ? this.props.dataset.data[0] : {}).map(function(key, idx){
                            	
                    
                                return <th key={'th' + idx}>{key}</th>
                            })
                        }
                        </tr>
                    </thead>

                 	<tbody>
                        {
                        	
                        		
                        		(this.props.dataset.data || []).map(function(obj, index){ 	
                                return(
                                    <tr key={index}>
                                        {
                                            Object.keys(obj).map(function(key, i){

                                                return <td key={i}>{obj[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                                
                        	})
                            
                           }
               
                       
                    </tbody>
                </table>
            </div>
            )
    }
}

var stateChange = function(state){

	return{
		loading:state.loading,
		dataset:state.dataset || {}
	}
}

export default connect(stateChange,StudentAction)(StudentComponent)