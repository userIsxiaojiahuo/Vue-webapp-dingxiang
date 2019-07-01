<template>
  <div class="diagonseList">
    <!--    轮播图-->
    <div class="swiper-container" id="diagonseBan">
      <div class="swiper-wrapper">
        <div class="swiper-slide diagonseImg" v-for="(item,index) in diagonseListBanner" :key="index">
          <img :src=item alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--    规则-->
    <div class="diagonseRule">
      <span><img src="../../assets/img/diagonseImg/ic_title.png" alt=""></span>
      <router-link to="rule" tag="span">规则</router-link>
    </div>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import Swiper from "swiper/dist/js/swiper.min"

  export default {
    name: "diagonseListBanner",
    props: ["diagonseListBanner"],
    mounted() {
      new Swiper("#diagonseBan", {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        autoplay: true,
      })
    }
  }
</script>

<style scoped>
  .diagonseList {
    width: 100%;
    position: relative;
  }

  .diagonseList {
    width: 100%;
  }

  img {
    display: inline-block;
  }

  .diagonseImg > img {
    width: 100%;
    height: 562px;
    border: none;
    vertical-align: top;
  }

  /deep/ .swiper-pagination-bullet-active {
    background-color: #ebebeb;
  }

  /deep/ .swiper-pagination-bullet {
    width: 20px;
    height: 4px;
    border-radius: 0;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
  }

  .diagonseRule {
    width: 110px;
    height: 56px;
    background: #d9d8d8;
    border-radius: 24px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9;
    font-size: 22px;
    color: #fefefe;
    line-height: 56px;
    text-align: center;
  }

  .diagonseRule > span > img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .diagonseList {
    width: 100%;
  }

  img {
    display: inline-block;
  }

  .diagonseImg > img {
    width: 100%;
    height: 562px;
    border: none;
    vertical-align: top;
  }

  /*.swiper-container .swiper-pagination {*/
  /*  color: red;*/
  /*  background: red;*/
  /*}*/
  .diagonseRule {
    width: 110px;
    height: 56px;
    background: #d9d8d8;
    border-radius: 24px;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9;
    font-size: 22px;
    color: #fefefe;
    line-height: 56px;
    text-align: center;
  }

  .diagonseRule > span > img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
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
