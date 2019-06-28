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
  .onLineBuySortNavigation {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 18px;

  }

  .onLineBuySortNavigation > li {
    flex: 30.4%;
    max-width: 210px;
    max-height: 104px;
    background: #f7f7f7;
    border-radius: 10px;
    text-align: center;
    line-height: 104px;
    margin-bottom: 21px;
  }
</style>
