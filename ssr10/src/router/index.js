import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../components/Home.vue'
import Item from '../components/Item.vue'
import Title from '../components/Title.vue'
import Foo from '../components/Foo.vue'
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/item/:id', component: Item },
      { path: '/title/:id', component: Title },
      { path: '/foo', Foo },
    ]
  })
}
