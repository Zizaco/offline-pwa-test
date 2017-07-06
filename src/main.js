import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'

Vue.use(VueRouter);

window.app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
