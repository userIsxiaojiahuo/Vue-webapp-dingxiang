<template>
  <div class="dxShareBtn">
    <div class="iconWrapper">
      <img class="imgAuto" src="../../assets/img/public/start.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dxShareBtn",
  }
</script>

<style scoped>
  .dxShareBtn {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    margin-right: 40px;
  }

  .iconWrapper {
    width: 38px;
    height: 38px;
    display: flex;
  }
</style>
