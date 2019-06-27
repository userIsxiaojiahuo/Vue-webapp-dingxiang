<template>
  <div class="selectDeskWrap">
    <p class="selectDeskTitle">{{selectDeskTitle}}</p>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "selectDeskTitle",
      props:["selectDeskTitle"]
    }
</script>

<style scoped>
  .selectDeskWrap {
    width: 100%;
    background: #fff;
    padding: 0 30px 0;
  }
  .selectDeskTitle {
    font-size: 36px;
    color: #323232;
    line-height: 124px;
    font-weight: bolder;
  }
</style>
