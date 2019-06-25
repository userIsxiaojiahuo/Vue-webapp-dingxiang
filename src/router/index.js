import Vue from "vue"
import Router from "vue-router"
import Diagonse from "../page/doctorDiagonse"
import Sort from "../page/departmentSort"
import SafeBeauty from "../page/safeBeauty"
import examine from "../page/examine"
import rule from "../page/rule"
import impotencePremature from "../page/impotencePremature"
import callEmergency from "../page/callEmergency"

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Diagonse",
      component: Diagonse,
    },
    {
      path: "/departmentSort",
      name: "departmentSort",
      component: Sort
    },
    {
      path: "/safeBeauty",
      name: "safeBeauty",
      component: SafeBeauty
    }, {
      path: "/examine",
      name: "examine",
      component: examine
    },
    {
      path: "/rule",
      name: "rule",
      component: rule
    },
    {
      path: "/impotencePremature",
      name: "impotencePremature",
      component: impotencePremature
    },
    {
      path: "/callEmergency",
      name: "callEmergency",
      component: callEmergency
    }
  ]
});

// 路由守卫

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     // 判断该路由是否需要登录权限
//     if (localStorage.getItem("token")) {
//       //判断本地是否存在token
//       next()
//     } else {
//       if (to.path === "/login") {
//         next()
//       } else {
//         next({
//           path: "/login"
//         })
//       }
//     }
//   } else {
//     next()
//   }
//   /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//   if (to.fullPath == "/login") {
//     if (localStorage.getItem("token")) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })

// //改变title值
// router.beforeEach((to, form, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

export default router
