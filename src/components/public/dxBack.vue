<template>
<div class="dbBack">
  <img src="../../assets/img/home/ic_titlebar_back.png" alt="" @click="back">
</div>
</template>

<script>
    export default {
        name: "dxBack",
      methods:{
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
