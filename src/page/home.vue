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
