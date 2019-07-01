<template>
  <div class="register">
    <div class="registerHeader">
      <div class="goBack" @click="goBack()">
        <img class="imgAuto" src="../assets/img/loginOrRegister/goback.png" alt="">
      </div>
    </div>
    <!--短信注册主体-->
    <div class="registerWrapper">
      <dxLoginOrRegister>
        <template v-slot:register>
          <span class="title">手机号注册</span>
        </template>
      </dxLoginOrRegister>
      <!--协议-->
      <loginBtn v-slot:loginBtn>
        <span>注册</span>
      </loginBtn>
    </div>

  </div>
</template>

<script>
  import login from '../assets/js/user.js'
  import common from '../assets/js/common.js'
  import loginBtn from '../components/public/loginBtn'
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'

  export default {
    name: "login",
    components: {
      loginBtn, dxLoginOrRegister
    },
    methods: {
      goBack() {
        common.goBack(this);
      }
    }
  }
</script>

<style src="../assets/css/register.css"></style>
