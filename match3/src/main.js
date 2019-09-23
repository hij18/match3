import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import gameState from './store'

Vue.use(Vuex);

const store = new Vuex.Store(gameState);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
