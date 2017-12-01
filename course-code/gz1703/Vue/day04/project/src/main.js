import Vue from 'vue'
// import App from './App.vue'
import lightComponent from './components/light2/light.vue'

import Vuex from 'vuex'
import light from './components/light2/light'
import count from './components/light2/count'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Vuex);
Vue.use(ElementUI)
console.log(light)
const store = new Vuex.Store({
  modules: {
    aa: light,
    BB: count
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(lightComponent)
})
