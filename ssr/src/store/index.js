import Vue from 'vue'
import Vuex from 'vuex'

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { fetchItem, getrecommend } from '../api'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {},
      commends: []
    },
    actions: {
      fetchItem({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      },
      getRecommend({ commit }) {
        return getrecommend().then((res) => {
          if (res.status === 200) {
            commit('setCommends', res.data)
          }
        })
      }
    },
    mutations: {
      setItem(state, { id, item }) {
        Vue.set(state.items, id, item)
      },
      setCommends(state, list) {
        console.log(list)
        state.commends = list
        // Vue.set(state.commends, list)
      }
    }
  })
}
