<template>
  <div class="homeSwiper">
    <div class="swiper-container" ref="homeBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in indexSwiper.banner" :key="index">
          <img class="imgAuto" :src="item" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';

  /**
   * 首页-轮播图
   */
  export default {
    name: "homeSwiper",
    props: ['indexSwiper'],
    data() {
      return {}
    },
    mounted() {
      new Swiper(this.$refs.homeBanner, {
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
      })
    }
  }
</script>

<style scoped>
  .homeSwiper {
    width: 100%;
    padding: 30px 0;
  }

  .swiper-container {
    width: 689px;
    height: 200px;
    margin: 0 auto;

  }

  .indexSwiper img {
    width: 689px;
    height: 200px;
  }

  /deep/ .swiper-pagination-bullet {
    width: 20px;
    height: 4px;
    border-radius: 0;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }

  /deep/ .swiper-pagination-bullet-active {
    background-color: #ebebeb;
  }
</style>
