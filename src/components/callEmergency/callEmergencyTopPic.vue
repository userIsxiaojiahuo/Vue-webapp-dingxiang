<template>
  <div class="callEmergencyPic">
    <img :src="callEmergencyTopPic" alt="">
  </div>
</template>

<script>
  export default {
    name: "callEmergencyTopPic",
    props: ["callEmergencyTopPic"]
  }
</script>

<style scoped>
  .callEmergencyPic {
    width: 100%;
    height: 272px;
  }
  .callEmergencyPic > img {
    width: 100%;
    height: 100%;
  }
</style>
