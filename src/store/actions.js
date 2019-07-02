const actions = {
  protocol({commit}, data) {
    commit('CHANGEINPUTOK', data)
  },
  GetInfo({commit, start}, data) {
    commit('GETINFO', data)
  }
};
export default actions
