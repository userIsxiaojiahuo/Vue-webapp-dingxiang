// 导入内容
import Vue from "vue"
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters'
import mutations from './mutations.js'
import actions from './actions.js'
// 使用vuex
Vue.use(Vuex);
//注册引入的模块
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
//导出
export default store

