import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'

Vue.use(Vuex)


export function createStore() {
  return new Vuex.Store({
    // strict: true, //严格模式
    state: {
      //
    },
    mutations: {
      //
    },
    actions: {
      //
    },
    modules: {
      user

    },
  })
}
