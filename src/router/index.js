import Vue from "vue"
import Router from "vue-router"
import Illness from "../page/illness"
import IllnessTwo from "../page/illnessTwo"
import Particulars from "../page/particulars"
import Popularization from "../page/popularization"
import Classification from "../page/classification"
Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Illness",
      component:Illness
    },
    {
      path: "/illnessTwo",
      name: "IllnessTwo",
      component: IllnessTwo
    },
    {
      path: "/particulars",
      name: "Particulars",
      component:Particulars
    },
    {
      path: "/popularization",
      name: "Popularization",
      component:Popularization
    },
    {
      path:"/classification",
      name: "Classification",
      component:Classification
    }
  ]
})

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
