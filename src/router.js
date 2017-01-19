import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import list from './components/list.vue'
import add from './components/add.vue'
import index from './components/index.vue'

export default new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/list', component: list},
    { path: '/add', component: add}
  ]
})
