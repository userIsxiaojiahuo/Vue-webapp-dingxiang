<template>
  <div class="homeExplain">
    <div class="ExplainWrapper">
      <img class="imgAuto" :src="indexExplain" alt="">
    </div>
  </div>
</template>

<script>
  /**
   * 首页-广告说明位置
   */
  export default {
    name: "homeExplain",
    props: ['indexExplain']
  }
</script>

<style scoped>
  .homeExplain {
    width: 100%;
    padding-top: 24px;
  }

  .ExplainWrapper {
    width: 686px;
    height: 84px;
    margin: 0 auto 25px;
  }
</style>
