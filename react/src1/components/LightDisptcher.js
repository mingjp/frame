/* 
* @Author: Marte
* @Date:   2017-11-09 11:49:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 11:57:08
*/

var flux = require('flux');
var LightDispatcher = new flux.Dispatcher();
var LightStore = require('./LightStore.js');

LightDispatcher.register(function(type){
    LightStore.change(type);
})

module.exports = LightDispatcher;