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

<style>
  
</style>
