import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from './components/index.vue'
import list from './components/list.vue'
import view from './components/view.vue'
import add from './components/add.vue'


export default new VueRouter({
  routes: [
    { path: '/', component: index },
    { path: '/list', component: list, name: 'list'},
    { path: '/view/:id', component: view, name: 'view'},
    { path: '/add', component: add, name: 'add'},
    { path: '/edit', component: add, name: 'edit'},
  ]
})
