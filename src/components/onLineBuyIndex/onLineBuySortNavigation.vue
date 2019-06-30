<template>
  <ul class="onLineBuySortNavigation">
    <li v-for="(item,index) in buySortNavigation" :key="index">{{item}}</li>
  </ul>
</template>

<script>
  /*病情分类导航列表*/
  export default {
    name: "onLineBuySortNavigation",
    props: ["buySortNavigation"]
  }
</script>

<style>
  
</style>
