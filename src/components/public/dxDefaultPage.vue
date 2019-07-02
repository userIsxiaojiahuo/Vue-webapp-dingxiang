<template>
  <div class="dxDefaultPage">
    <div class="logoWrapper">
      <slot name="DefaultPageLogo"></slot>
      <div class="dxDefaultTxt">{{DefaultPageTxt.txt}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dxDefaultPage",
    props: ['DefaultPageTxt']
  }
</script>

<style scoped>
  .dxDefaultPage {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
  }

  .logoWrapper {
    width: 227px;
    height: 233px;
    transform: translateY(-50%);
  }

  .dxDefaultTxt {
    text-align: center;
    font-size: 26px;
    margin-top: 40px;
    color: #666666;
  }
</style>
