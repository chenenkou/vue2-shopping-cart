// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// 导入各个模块的初始状态和 mutations
import cart from './modules/cart'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  // 组合各个模块
  modules: {
    cart
  }
})
