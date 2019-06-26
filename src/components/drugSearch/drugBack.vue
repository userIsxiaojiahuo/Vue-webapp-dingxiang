<template>
  <div class="drugBack">
    <img @click="back" src="./../../assets/img/home/ic_titlebar_back.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "drugBack",
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  img {
    width: 44px;
    height: 44px;
  }
</style>
