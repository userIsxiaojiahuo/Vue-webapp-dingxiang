const actions = {
  // 文本框
  protocol({commit}, data) {
    commit('CHANGEINPUTOK', data)
  },
  // 获取信息
  GetInfo({commit}, data) {
    commit('GETINFO', data)
  },
  // 登录弹出框
  isLoginPopup({commit}, data) {
    commit('LOGINPOPUP', data)
  }
};
export default actions
