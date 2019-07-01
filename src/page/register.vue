<template>
  <div class="register">
    <div class="registerHeader">
      <div class="goBack" @click="goBack()">
        <img class="imgAuto" src="../assets/img/loginOrRegister/goback.png" alt="">
      </div>
    </div>
    <!--短信注册主体-->
    <dx-login-or-register/>
    <!--协议-->
    <loginBtn v-slot:loginBtn>
      <span>注册</span>
    </loginBtn>
  </div>
</template>

<script>
  const login = require('../assets/js/login');
  import loginBtn from '../components/public/loginBtn'
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'

  export default {
    name: "login",
    components: {
      loginBtn, dxLoginOrRegister
    },
    methods: {
      goBack() {
        login.goBack(this);
      }
    }
  }
</script>

<style src="../assets/css/register.css"></style>
