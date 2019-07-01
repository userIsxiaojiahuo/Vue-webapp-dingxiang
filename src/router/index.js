import Vue from "vue"
import Router from "vue-router"
import Illness from "../page/illness"
import IllnessTwo from "../page/illnessSearch"
import particulars from "../page/particulars"
import Popularization from "../page/popularization"
import classification from "../page/classification"
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
import phoneNumber from "../page/phoneNumber"
import replacePhone from "../page/replacePhone"
import doctorSearch from "../page/doctorSearch"
import hospitalSearch from "../page/hospitalSearch"
import drugSearch from "../page/drugSearch"
import patientInformation from "../page/patientInformation"
import addInformation from "../page/addInformation"
import register from "../page/register"
import login from "../page/login"
import OnLineBuy from "../page/onLineBuy"
import OnLineBuyDrugList from "../page/onLineBuyDrugList"
import DrugDetails from "../page/drugDetails"
import Cart from "../page/cart"
import OrderFilling from "../page/orderFilling"
import AddressManagement from "../page/addressManagement"
import EditAddress from "../page/editAddress"
import securiteyCode from "../page/securiteyCode"
import setAbout from "../page/setAbout"
import setAmendname from "../page/setAmendname"
import setRecommend from "../page/setRecommend"
import setting from "../page/setting"

Vue.use(Router);

const router = new Router({
        mode: "history",
        routes:
            [
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
                    path: "/register",
                    name: "register",
                    component: register,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/Illness",
                    name: "Illness",
                    component: Illness,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/IllnessTwo",
                    name: "IllnessTwo",
                    component: IllnessTwo,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/Particulars",
                    name: "Particulars",
                    component: particulars,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/Popularization",
                    name: "Popularization",
                    component: Popularization,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/classification",
                    name: "classification",
                    component: classification,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/departDetails",
                    name: "departDetails",
                    component: departDetails,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/doctorInfo",
                    name: "doctorInfo",
                    component: doctorInfo,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/doctorResume",
                    name: "doctorResume",
                    component: doctorResume,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/AskDoctor",
                    name: "AskDoctor",
                    component: AskDoctor,
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
                    path: "/doctorDiagonse",
                    component: departmentSort,
                },
                {
                    path: "/safeBeauty",
                    name: "SafeBeauty",
                    component: SafeBeauty,
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
                    path: "/indexSearch",
                    name: "indexSearch",
                    component: indexSearch,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/HospitalMessage",
                    name: "HospitalMessage",
                    component: HospitalMessage,
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
                    path: "/selectDeskList",
                    name: "selectDeskList",
                    component: selectDeskList,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/OnLineBuy",
                    name: "OnLineBuy",
                    component: OnLineBuy,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/OnLineBuyDrugList",
                    name: "OnLineBuyDrugList",
                    component: OnLineBuyDrugList,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/DrugDetails",
                    name: "DrugDetails",
                    component: DrugDetails,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/Cart",
                    name: "Cart",
                    component: Cart,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/phoneNumber",
                    name: "phoneNumber",
                },
                {
                    path: "/OrderFilling",
                    name: "OrderFilling",
                    component: OrderFilling,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/replacePhone",
                    name: "replacePhone",
                    component: replacePhone,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/AddressManagement",
                    name: "AddressManagement",
                    component: AddressManagement,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/EditAddress",
                    name: "EditAddress",
                    component: EditAddress,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/doctorSearch",
                    name: "doctorSearch",
                    component: doctorSearch,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/hospitalSearch",
                    name: "hospitalSearch",
                    component: hospitalSearch,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/drugSearch",
                    name: "drugSearch",
                    component: drugSearch,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/patientInformation",
                    component: patientInformation
                },
                {
                    path: "/addInformation",
                    component: addInformation
                },
                {

                    path: "/patientInformation",
                    name: "patientInformation",
                    component: patientInformation,
                    meta: {
                        footerIsShow: false
                    },
                },
                {
                    path: "/addInformation",
                    name: "addInformation",
                    component: addInformation,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/securiteyCode",
                    name: "securiteyCode",
                    component: securiteyCode,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/replacePhone",
                    name: "replacePhone",
                    component: replacePhone,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/phoneNumber",
                    name: "phoneNumber",
                    component: phoneNumber,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/setAbout",
                    name: "setAbout",
                    component: setAbout,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/setRecommend",
                    name: "setRecommend",
                    component: setRecommend,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/setAmendname",
                    name: "setAmendname",
                    component: setAmendname,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "/setting",
                    name: "setting",
                    component: setting,
                    meta: {
                        footerIsShow: false
                    }
                },
                {
                    path: "**",
                    redirect: home
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
