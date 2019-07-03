<template>
  <div class="loginUnder">
    <div class="loginBtn">
      <button class="btn" :disabled="!$store.state.loginIsOK">
        <slot name="loginBtn"></slot>
      </button>
      <div class="userAgreement">
        <div class="agreementIcon" @click="changeShow()">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/mobile-muli-checked.png" alt="" v-if="show">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/mobile-muli-unchecked.png" alt="" v-if="!show">
        </div>
        <p class="agreementTxt">同意丁香医生用户协议</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginBtn",
    data() {
      return {
        show: true,
      }
    },
    methods: {
      changeShow() {
        this.show = !this.show;
        this.$store.dispatch('protocol', this.show)
      },
    }
  }
</script>

<style scoped>
  .loginUnder {
    padding: 40px;
  }

  .btn {
    width: 100%;
    height: 90px;
    background: #28b7a3;
    border-radius: 3px;
    border: 0;
    font-size: 30px;
    color: white;
  }

  button[disabled] {
    background: #90d8d2;
  }

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
