import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import io from 'socket.io-client'

import './main.css';

Vue.config.productionTip = false
Vue.prototype.$socket = io('http://localhost:5000');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
