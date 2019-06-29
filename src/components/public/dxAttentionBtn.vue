<template>
  <div class="dxAttentionBtn">
    <div class="iconWrapper">
      <img class="imgAuto" src="../../assets/images/askdoctor/ic_titlebar_share.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dxAttentionBtn",
  }
</script>

<style scoped>
  .dxAttentionBtn {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .iconWrapper {
    width: 38px;
    height: 38px;
    display: flex;
  }
</style>
