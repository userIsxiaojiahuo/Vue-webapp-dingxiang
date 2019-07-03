<template>
  <div class="userAgreement">
    <div class="agreementIcon" @click="changeShow()">
      <img class="imgAuto" src="../../assets/img/loginOrRegister/mobile-muli-checked.png" alt="" v-if="show">
      <img class="imgAuto" src="../../assets/img/loginOrRegister/mobile-muli-unchecked.png" alt="" v-if="!show">
    </div>
    <p class="agreementTxt">同意丁香医生用户协议</p>
  </div>
</template>

<script>
  import newVue from '../../assets/js/newVue.js'

  /**
   * 协议
   */
  export default {
    name: "dxProtocol",
    data() {
      return {
        show: true
      }
    },
    methods: {
      changeShow() {
        this.show = !this.show;
        newVue.$emit('protocolOK', this.show)
      }
    }
  }
</script>

<style scoped>
  .userAgreement {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
  }

  .agreementIcon {
    width: 60px;
    height: 60px;
  }

  .agreementTxt {
    color: #28b7a3;
    text-decoration: underline;
  }
</style>
