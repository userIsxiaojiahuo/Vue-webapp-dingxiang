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
import hospitalMap from "../page/hospitalMap"
import myAttention from "../components/mine/myAttention"
import myCollect from "../components/mine/myCollect"
import myInquiry from "../components/mine/myInquiry"
import myPrescription from "../components/mine/myPrescription"
import myDrugOrders from "../components/mine/myDrugOrders"
import setIdentity from "../page/setIdentity"
import findPassword from "../components/login/findPassword"
import phoneFind from "../components/login/phoneFind"
import setPassWord from "../components/login/setPassWord"
import firstSetPass from "../components/login/firstSetPass"
import common from "../assets/js/common.js"

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
          footerIsShow: true,
          keepAlive: true
        }
      },
      {
        path: "/mine",
        name: "mine",
        component: mine,
        meta: {
          footerIsShow: true,
          keepAlive: true
        }
      },
      {
        path: "/login",
        name: "login",
        component: login,
      },
      {
        path: "/register",
        name: "register",
        component: register,
      },
      {
        path: "/Illness",
        name: "Illness",
        component: Illness,
      },
      {
        path: "/IllnessTwo",
        name: "IllnessTwo",
        component: IllnessTwo,
      },
      {
        path: "/Popularization",
        name: "Popularization",
        component: Popularization,
      },
      {
        path: "/classification",
        name: "classification",
        component: classification,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "/departDetails",
        name: "departDetails",
        component: departDetails,
      },
      {
        path: "/doctorInfo",
        name: "doctorInfo",
        component: doctorInfo,
      },
      {
        path: "/doctorResume",
        name: "doctorResume",
        component: doctorResume,
      },
      {
        path: "/AskDoctor",
        name: "AskDoctor",
        component: AskDoctor,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "/Diagonse",
        name: "Diagonse",
        component: Diagonse,
      },
      {
        path: "/doctorDiagonse",
        name: "doctorDiagonse",
        component: departmentSort,
      },
      {
        path: "/safeBeauty",
        name: "SafeBeauty",
        component: SafeBeauty,
      },
      {
        path: "/departmentSort",
        name: "departmentSort",
        component: departmentSort,
      },
      {
        path: "/examine",
        name: "examine",
        component: examine,
      },
      {
        path: "/rule",
        name: "rule",
        component: rule,
      },
      {
        path: "/impotencePremature",
        name: "impotencePremature",
        component: impotencePremature,
      },
      {
        path: "/callEmergency",
        name: "callEmergency",
        component: callEmergency,
      },
      {
        path: "/indexSearch",
        name: "indexSearch",
        component: indexSearch,
      },
      {
        path: "/HospitalMessage",
        name: "HospitalMessage",
        component: HospitalMessage,
      },
      {
        path: "/conPic",
        name: "conPic",
        component: conPic,
      },
      {
        path: "/selectDeskList",
        name: "selectDeskList",
        component: selectDeskList,
      },
      {
        path: "/OnLineBuy",
        name: "OnLineBuy",
        component: OnLineBuy,
      },
      {
        path: "/OnLineBuyDrugList",
        name: "OnLineBuyDrugList",
        component: OnLineBuyDrugList,
      },
      {
        path: "/DrugDetails",
        name: "DrugDetails",
        component: DrugDetails,
      },
      {
        path: "/Cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: "/phoneNumber",
        name: "phoneNumber",
        component: phoneNumber
      },
      {
        path: "/OrderFilling",
        name: "OrderFilling",
        component: OrderFilling,
      },
      {
        path: "/replacePhone",
        name: "replacePhone",
        component: replacePhone,
      },
      {
        path: "/securiteyCode",
        name: "securiteyCode",
        component: securiteyCode,
      },
      {
        path: "/AddressManagement",
        name: "AddressManagement",
        component: AddressManagement,
      },
      {
        path: "/EditAddress",
        name: "EditAddress",
        component: EditAddress,
      },
      {
        path: "/doctorSearch",
        name: "doctorSearch",
        component: doctorSearch,
      },
      {
        path: "/hospitalSearch",
        name: "hospitalSearch",
        component: hospitalSearch,
      },
      {
        path: "/drugSearch",
        name: "drugSearch",
        component: drugSearch,
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
        path: "/setRecommend",
        name: "setRecommend",
        component: setRecommend,
      },
      {
        path: "/setAmendname",
        name: "setAmendname",
        component: setAmendname,
      },
      {
        path: "/setting",
        name: "setting",
        component: setting,
      },
      {
        path: "/particulars",
        name: "/particulars",
        component: particulars,
      },
      {
        path: "/setAbout",
        name: "setAbout",
        component: setAbout,
      },
      {
        path: "/myAttention",
        name: "myAttention",
        component: myAttention
      },
      {
        path: "/myCollect",
        name: "myCollect",
        component: myCollect
      },
      {
        path: "/myInquiry",
        name: "myInquiry",
        component: myInquiry,
        meta: {
          auth: true
        }
      },
      {
        path: "/myPrescription",
        name: "myPrescription",
        component: myPrescription
      },
      {
        path: "/myDrugOrders",
        name: "myDrugOrders",
        component: myDrugOrders
      },
      {
        path: "/hospitalMap",
        name: "hospitalMap",
        component: hospitalMap
      },
      {
        path: "/setIdentity",
        name: "setIdentity",
        component: setIdentity
      },
      {
        path: "/findPassword",
        name: "findPassword",
        component: findPassword
      },
      {
        path: "/setPassWord",
        name: "setPassWord",
        component: setPassWord
      },
      {
        path: "/firstSetPass",
        name: "firstSetPass",
        component: firstSetPass
      },
      {
        path: "/phoneFind",
        name: "phoneFind",
        component: phoneFind
      },
      {
        path: "**",
        redirect: home
      }
    ]
});


// 路由守卫

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断该路由是否需要登录权限
    if (common.getCookie("token")) {
      //判断本地是否存在token
      next()
    } else {
      if (to.path === "/login") {
        next()
      } else {
        next({
          path: "/login"
        })
      }
    }
  } else {
    next()
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath === "/loginOrRegister") {
    if (common.getCookie("token")) {
      next({
        path: from.fullPath
      })
    } else {
      next()
    }
  }
});

//改变title值
// router.beforeEach((to, form, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

export default router
