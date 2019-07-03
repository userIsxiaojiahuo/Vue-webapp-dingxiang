const mutations = {
  // 文本验证
  CHANGEINPUTOK(state, data) {
    state.loginIsOK = data;
  },
  // 获取数据动态图
  GETINFO(state, data) {
    state.isGetInfo = data;
  },
  LOGINPOPUP(state, data) {
    state.loginPopups = data
  }
};
export default mutations
