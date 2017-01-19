import Vue from 'vue'
import App from './App.vue'
import router from './router'
import resources from './resources'

/* eslint-disable no-new */
const app = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

export {app, router, resources}
