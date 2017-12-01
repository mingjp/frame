/* 
* @Author: Marte
* @Date:   2017-11-09 17:53:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 21:33:51
*/

import {createStore} from 'redux'
import LightReducer from './LightReducer'

var store = createStore(LightReducer);
export default store