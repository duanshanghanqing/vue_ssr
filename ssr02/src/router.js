import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './components/Home.vue'
import Item from './components/Item.vue'
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/item/:id', component: Item }
    ]
  })
}
