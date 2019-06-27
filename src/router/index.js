import Vue from "vue"
import Router from "vue-router"
import Diagonse from "../page/doctorDiagonse"
import Sort from "../page/departmentSort"
import SafeBeauty from "../page/safeBeauty"
import examine from "../page/examine"
import rule from "../page/rule"
import impotencePremature from "../page/impotencePremature"
import callEmergency from "../page/callEmergency"
import mine from "../page/mine"
import home from "../page/home"
import indexSearch from "../page/indexSearch"
import login from "../page/login"
import selectDeskList from "../page/selectDeskList"
import conPic from "../page/conPic"
import OnLineBuy from "../page/onLineBuy"
import OnLineBuyDrugList from "../page/onLineBuyDrugList"
import DrugDetails from "../page/drugDetails"
import Cart from "../page/cart"
import OrderFilling from "../page/orderFilling"
import AddressManagement from "../page/addressManagement"
import EditAddress from "../page/editAddress"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: home
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
      component: Sort,
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
      path: "/login",
      name: "login",
      component: login,
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
		  path:"/onLineBuy",
		  name:"onLineBuy",
		  component:OnLineBuy,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/buyDrugList",
		  name:"onLineBuyDrugList",
		  component:OnLineBuyDrugList,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/drugDetails",
		  name:"drugDetails",
		  component:DrugDetails,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/cart",
		  name:"cart",
		  component:Cart,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/orderFilling",
		  name:"orderFilling",
		  component:OrderFilling,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/addressManagement",
		  name:"addressManagement",
		  component:AddressManagement,
			meta: {
			  footerIsShow: false
			}
		},
		{
		  path:"/editAddress",
		  name:"editAddress",
		  component:EditAddress,
			meta: {
			  footerIsShow: false
			}
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
