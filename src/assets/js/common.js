// 回退
const goBack = (_this) => {
  if (window.history.length <= 1) {
    _this.$router.push({path: '/'});
    return false
  } else {
    _this.$router.go(-1)
  }
};
export default {goBack}
