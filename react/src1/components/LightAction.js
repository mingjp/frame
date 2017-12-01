/* 
* @Author: Marte
* @Date:   2017-11-09 11:46:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 12:07:24
*/
var LightDispatcher = require('./LightDisptcher.js');
module.exports = function(type){
    LightDispatcher.dispatch(type);
}