<template>
  <div class="home">
    <!--首页-头部-->
    <homeHeader class="homeHeader"/>
    <div class="homeContentWrapper">
      <!--首页-导航-->
      <homeNav :indexNav="indexNav"/>
      <!--首页-列表导航-->
      <homeItem :indexList="indexListNav"/>
      <!--首页-广告位置-->
      <homeExplain :indexExplain="indexExplain"/>
      <!--分割-->
      <homeSeparate/>
      <!--轮播图-->
      <homeSwiper :indexSwiper="indexSwiper"/>
      <!--分割-->
      <homeSeparate/>
      <!--科普文章-->
      <homePageOne/>
    </div>
  </div>
</template>

<script>
  import homeHeader from '../components/index/homeHeader'
  import homeNav from '../components/index/homeNav'
  import homeItem from '../components/index/homeItem'
  import homeExplain from '../components/index/homeExplain'
  import homeSeparate from '../components/index/homeSeparate'
  import homeSwiper from '../components/index/homeSwiper'
  import homePageOne from '../components/index/homePageOne'

  /**
   * 首页
   */
  export default {
    name: 'home',
    components: {
      homeHeader,
      homeNav,
      homeItem,
      homeExplain,
      homeSeparate,
      homeSwiper,
      homePageOne,
    },
    data() {
      return {

        indexNav: [
          {
            imgs: require('../assets/img/home/maxNav-1.png'),
            spanContent: '问医生',
            emContent: '按科室找医生',
            path: "/AskDoctor"
          },
          {
            imgs: require('../assets/img/home/maxNav-2.png'),
            spanContent: '名医义诊',
            emContent: '新人1元起',
            path: "/Diagonse"
          },
          {
            imgs: require('../assets/img/home/maxNav-3.png'),
            spanContent: '在线购药',
            emContent: '限时包邮',
            path: "/onLineBuy"
          }
        ],
        indexListNav: [
          {
            imgs: require('../assets/img/home/nav-1.png'),
            title: '电话急诊',
            path: "callEmergency"
          },
          {
            imgs: require('../assets/img/home/nav-2.png'),
            title: '成长测评',
            path: ""
          },
          {
            imgs: require('../assets/img/home/nav-3.png'),
            title: '查疾病',
            path: "/illness"
          },
          {
            imgs: require('../assets/img/home/nav-4.png'),
            title: '医师讲堂',
            path: ""
          },
          {
            imgs: require('../assets/img/home/nav-5.png'),
            title: '阳痿早泄',
            path: "/SafeBeauty"
          },
          {
            imgs: require('../assets/img/home/nav-6.png'),
            title: '安全变美',
            path: "/SafeBeauty"
          },
          {
            imgs: require('../assets/img/home/nav-7.png'),
            title: '急救大全',
            path: "/classification"
          },
          {
            imgs: require('../assets/img/home/nav-8.png'),
            title: '孕期管家',
            path: ""
          }
        ],
        indexExplain: require('../assets/img/home/im_trest_homepage.png'),
        indexSwiper: {
          indexSwiperImgs: [
            require("../assets/img/home/swiper1.jpg"),
            require("../assets/img/home/swiper1.jpg"),
            require("../assets/img/home/swiper1.jpg"),
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100%;
    overflow: hidden;
  }

  .homeContentWrapper {
    height: 100%;
    overflow-y: auto;
  }

</style>
