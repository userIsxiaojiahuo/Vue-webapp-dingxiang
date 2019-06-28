<template>
  <div class="onLineBuyFoot">
    <div class="onLineBuyFoot-left">
      <slot></slot>
    </div>
    <router-link :to="onLineBuyFoot.path" tag="div" class="onLineBuyFoot-btu">{{onLineBuyFoot.title}}</router-link>
  </div>
</template>

<script>
  /* 药品列表底部购物车和购买按钮 */
  export default {
    name: "onLineBuyFoot",
    props: ["onLineBuyFoot"]
  }
</script>

<style scoped>
  .onLineBuyFoot {
    width: 100%;
    height: 98px;
    border-top: 1px solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: white;
  }

  .onLineBuyFoot-left {
    flex: 71.2%;
    min-width: 71.2%;
    height: 100%;
    padding-left: 30px;
  }

  .onLineBuyFoot-btu {
    flex: 28.8%;
    min-width: 28.8%;
    height: 100%;
    background: #28b7a3;;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 98px;
  }
</style>
