<template>
  <div class="onLineSearch-input">
    <img :src="onLineSearch.pic">
    <span>{{onLineSearch.title}}</span>
  </div>
</template>

<script>
  /* 药品列表顶部搜索框 */
  export default {
    name: "onLineBuyListHeaber",
    props: ["onLineSearch"]
  }
</script>

<style>
  
</style>
