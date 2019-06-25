<template>
  <div class="homePageOne">
    <div class="indexPage">
      <span>6月22日</span>
      <h1>今日推荐</h1>
      <div class="homeArticleWrapper">
        <img class="imgAuto" src="../../assets/img/home/20190317165726_wVYP8.png" alt="">
        <h3>热门关注</h3>
      </div>
      <div class="homeArticleWrapper">
        <img class="imgAuto" src="../../assets/img/home/20190317165726_wVYP8.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homePageOne"
  }
</script>

<style scoped>
  .homePageOne {
    width: 100%;
    margin-bottom: 340px;
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
  }
</style>
