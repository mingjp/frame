import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import Vuex from 'vuex'

import Home from './components/home/home'
import Goods from './components/goodslist/goodslist'

Vue.use(Vuex)

var store = new Vuex.Store({
  modules: {
    Home,
    Goods
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})