<template>
  <router-link to="/drugSearch" tag="div" class="onLineBuyListHeaber-input">
    <img :src="onLineSearch.pic">
    <span>{{onLineSearch.title}}</span>
  </router-link>
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
