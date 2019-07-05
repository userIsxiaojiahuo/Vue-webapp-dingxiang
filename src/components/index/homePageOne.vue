<template>
  <div class="homePageOne">
    <div class="indexPage">
      <span>{{obj.recommend_time}}</span>
      <router-link :to="'/Popularization?home_id='+item.id" tag="div" class="homeArticleWrapper" v-for="(item,index) in obj.recommend_info" :key="index">
        <img class="imgAuto" :src="item.title_img" alt="">
        <h3>{{item.art_class}}</h3>
        <div class="InfoTitle">{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homePageOne",
    props:['obj']
  }
</script>

<style scoped>
  .homePageOne {
    width: 100%;
  }

  .indexPage {
    width: 690px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .homePageOne span {
    color: #9d9d9d;
    font-size: 22px;
  }

  .homePageOne p {
    font-size: 48px;
    color: #333333;
  }

  .homePageOne .homeArticleWrapper {
    width: 690px;
    height: 520px;
    margin-top: 60px;
    border-radius: 32px;
    overflow: hidden;
    position: relative;
    box-shadow: 5px 5px 20px #999999;
  }
  .homeArticleWrapper img{
    background-size: cover!important;
  }
  h3{
    position: absolute;
    top: 20px;
    left: 10px;
    color: #999999;
    font-size: 24px;
    padding: 0 20px;
  }
  .InfoTitle{
    position: absolute;
    top: 80px;
    left: 10px;
    font-size: 36px;
    padding: 0 20px;
  }
</style>
