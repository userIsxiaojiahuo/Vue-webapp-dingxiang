const mutations = {
  CHANGEINPUTOK(state, data) {
    state.loginIsOK = data;
    console.log(data)
  },
  GETINFO(state, data) {
    state.isGetInfo = data;
  }
};
export default mutations
