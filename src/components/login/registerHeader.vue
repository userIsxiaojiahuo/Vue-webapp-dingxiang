<template>
  <div class="registerHeader">
    <div class="goBack" @click="goBack()">
      <img class="imgAuto" src="../../assets/img/loginOrRegister/goback.png" alt="">
    </div>
  </div>
</template>

<script>
  import common from '../../assets/js/common.js'

  /**
   * 注册返回（作用于找回密码）
   */
  export default {
    name: "registerHeader",
    methods: {
      goBack() {
        common.goBack(this);
      },
    }
  }
</script>

<style scoped>

  .registerHeader {
    height: 120px;
    display: flex;
    align-items: center;
    background: #fcfcfc;
  }

  .goBack {
    width: 32px;
    height: 32px;
    margin-left: 30px;
  }

</style>
