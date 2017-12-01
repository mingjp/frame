/* 
* @Author: Marte
* @Date:   2017-11-09 17:46:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 21:33:50
*/

export default function LightReducer(state,action){
    switch(action.type){
        case 'r':
            state.color = 'red';
        case 'y':
            state.color = 'yellow';
        default:
            state.color = 'green';
    }
}