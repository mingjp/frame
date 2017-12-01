import React from 'react'
import {connect} from 'react-redux'
import * as userAction from './userAction'

class UserComponent extends React.Component{
	componentDidMount(){
		this.props.init();
		
	}
	render(){
	console.log('commponent');
		// console.log(this.props)
		return(
				<div>
				<h1>react</h1>
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
                                return (
							<tr key={index}>
								{
									Object.keys(obj).map(function(key,i){
										return <td>{obj[key]}</td>
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

const userState = function(state){
	console.log(state)
	return{
		loading:state.loading,
		dataset:state.dataset || {}
	}
}
export default connect(userState,userAction)(UserComponent)