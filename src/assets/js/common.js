// 回退
const goBack = (_this) => {
  if (window.history.length <= 1) {
    _this.$router.push({path: '/'});
    return false
  } else {
    _this.$router.back()
  }
};
//地图
const isLogin = function (_this, router) {
  if (getCookie('token')) {
    _this.$router.push(router)
  } else {
    _this.$store.dispatch("isLoginPopup", true);
  }
};
// 设置cookie
const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";//path=/是根路径
};
//获取cookie
const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) !== -1) return c.substring(name.length, c.length);
  }
  return "";
};

const removeCookie = (cname) => {
  setCookie(cname, ' ', -1);
};
export default {goBack, isLogin, setCookie, getCookie, removeCookie}
