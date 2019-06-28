// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import "lib-flexible/flexible"
import vuex from "vuex"
import axios from "axios"
import qs from "qs"
import "./assets/css/reset.css"

axios.defaults.withCredentials = true;
Vue.use(vuex);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


const store = new vuex.Store({
  //管理
});
new Vue({
  el: "#app",
  router,
  store,
  components: {App},
  template: "<App/>"
});

axios.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    const token = localStorage.getItem("token");
    if (config.method === "post") {
      // post请求时，处理数据
      token ? (config.headers.Authorization = token) : null;
      config.data = qs.stringify({
        ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
      })
    }
    return config
  },
  function (error) {
    loadinginstace.close();
    return Promise.reject(error)
  }
);
//添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
);
