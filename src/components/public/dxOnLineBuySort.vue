<template>
  <router-link to="OnLineBuyDrugList" tag="div" class="onLineBuySort">
    <div class="onLineBuySort-title">
      <span>{{commSort?commSort:buySortNavigation}}</span>
    </div>
    <slot></slot>
  </router-link>
</template>

<script>
  /*病情分类*/
  export default {
    name: "onLineBuySort",
    props: ["commSort", "buySortNavigation"]
  }
</script>

<style scoped>
  .onLineBuySort {
    width: 100%;
  }

  .onLineBuySort-title {
    width: 100%;
    height: 34px;
    margin: 32px 0;
    padding-left: 30px;
  }

  .onLineBuySort-title > span {
    font-size: 30px;
    color: #999999;
  }
</style>
