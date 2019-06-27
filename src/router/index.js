import Vue from "vue"
import Router from "vue-router"
import Illness from "../page/illness"
import IllnessTwo from "../page/illnessTwo"
import Particulars from "../page/particulars"
import Popularization from "../page/popularization"
import Classification from "../page/classification"
import AskDoctor from "../page/askDoctor"
import departDetails from "../page/departDetails"
import doctorInfo from "../page/doctorInfo"
import doctorResume from "../page/doctorResume"
import Diagonse from "../page/doctorDiagonse"
import departmentSort from "../page/departmentSort"
import SafeBeauty from "../page/safeBeauty"
import examine from "../page/examine"
import rule from "../page/rule"
import impotencePremature from "../page/impotencePremature"
import callEmergency from "../page/callEmergency"
import mine from "../page/mine"
import home from "../page/home"
import indexSearch from "../page/indexSearch"
import HospitalMessage from "../page/hospitalMessage"
import selectDeskList from "../page/selectDeskList"
import conPic from "../page/conPic"
import register from "../page/register"
import login from "../page/login"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: home
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta: {
        footerIsShow: true
      }
    },
    {
      path: "/mine",
      name: "mine",
      component: mine,
      meta: {
        footerIsShow: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: login,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/Diagonse",
      name: "Diagonse",
      component: Diagonse,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/departmentSort",
      name: "departmentSort",
      component: departmentSort,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/safeBeauty",
      name: "safeBeauty",
      component: SafeBeauty,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/examine",
      name: "examine",
      component: examine,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/rule",
      name: "rule",
      component: rule,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/impotencePremature",
      name: "impotencePremature",
      component: impotencePremature,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/callEmergency",
      name: "callEmergency",
      component: callEmergency,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/selectDeskList",
      name: "selectDeskList",
      component: selectDeskList,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/indexSearch",
      name: "indexSearch",
      component: indexSearch,
      meta: {
        footerIsShow: false
      }
    },

    {
      path: "/conPic",
      name: "conPic",
      component: conPic,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: register,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/Diagonse",
      name: "Diagonse",
      component: Diagonse,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/departmentSort",
      name: "departmentSort",
      component: departmentSort,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/safeBeauty",
      name: "safeBeauty",
      component: SafeBeauty,
      meta: {
        footerIsShow: false
      }
    }, {
      path: "/examine",
      name: "examine",
      component: examine,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/rule",
      name: "rule",
      component: rule,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/impotencePremature",
      name: "impotencePremature",
      component: impotencePremature,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/callEmergency",
      name: "callEmergency",
      component: callEmergency,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/home",
      name: "home",
      component: home,
      meta: {
        footerIsShow: true
      }
    },
    {
      path: "/mine",
      name: "mine",
      component: mine,
      meta: {
        footerIsShow: true
      }
    },
    {
      path: "/indexSearch",
      name: "indexSearch",
      component: indexSearch,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: login,
      meta: {
        footerIsShow: false
      }
    },
    {
      path: "/askDoctor",
      name: "AskDoctor",
      component: AskDoctor,
      children: []
    },
    {
      path: "/departDetails",
      name: "departDetails",
      component: departDetails
    },
    {
      path: "/doctorInfo",
      component: doctorInfo
    },
    {
      path: "/doctorResume",
      component: doctorResume
    },
    {
      path: "/hospitalMessage",
      component: HospitalMessage
    },
    {
      path: "/selectDeskList",
      component: selectDeskList
    },
    {
      path: "/conPic",
      component: conPic
    },
    {
      path: "/",
      name: "Illness",
      component: Illness
    },
    {
      path: "/illnessTwo",
      name: "IllnessTwo",
      component: IllnessTwo
    },
    {
      path: "/particulars",
      name: "Particulars",
      component: Particulars
    },
    {
      path: "/popularization",
      name: "Popularization",
      component: Popularization
    },
    {
      path: "/classification",
      name: "Classification",
      component: Classification
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
//       if (to.path === "/loginOrRegister") {
//         next()
//       } else {
//         next({
//           path: "/loginOrRegister"
//         })
//       }
//     }
//   } else {
//     next()
//   }
//   /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//   if (to.fullPath == "/loginOrRegister") {
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
