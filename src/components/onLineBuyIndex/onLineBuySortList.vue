<template>
  <ul class="onLineBuySortList">
    <Router-link to="/OnLineBuyDrugList" tag="li" v-for="(item,index) in buySort" :key="index">
      <img :src="item.pic"/>
      <span class="onLineBuy-nav-title">{{item.name}}</span>
    </Router-link>
  </ul>
</template>

<script>
  /*病情分类nav列表*/
  export default {
    name: "onLineBuySortList",
    props: ["buySort"]
  }
</script>

<style scoped>
  .onLineBuySortList {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .onLineBuySortList > li {
    padding: 0 9px;
    text-align: center;
    max-width: 108px;
    max-height: 158px;
    margin-right: 0.74rem;
  }

  .onLineBuySortList > li:nth-of-type(4n) {
    margin-right: 0;
  }

  .onLineBuySortList > li > img {
    width: 100%;
  }

  .onLineBuy-nav-title {
    display: inline-block;
    margin-top: 19px;
  }
</style>
