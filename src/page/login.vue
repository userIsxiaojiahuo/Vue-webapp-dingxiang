<template>
  <div class="login">
    <div class="loginHeader">
      <div class="goBack" @click="goBack()">
        <img class="imgAuto" src="../assets/img/loginOrRegister/res_close.png" alt="">
      </div>
      <router-link to="/register" tag="div" class="register">注册</router-link>
    </div>
    <div class="LoginContent">
      <dxLoginOrRegister>
        <template v-slot:register>
          <span class="title">手机号注册登录</span>
        </template>
        <template v-slot:login>
          <div class="checkLogin">用账号密码登录？</div>
        </template>
      </dxLoginOrRegister>
      <loginBtn v-slot:loginBtn>
        <span>登录</span>
      </loginBtn>
    </div>
  </div>
</template>

<script>
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'
  import dxLoginTitle from '../components/public/dxLoginTitle'
  import loginBtn from '../components/public/loginBtn'

  const login = require('../assets/js/login');

  export default {
    name: "register",
    components: {
      dxLoginOrRegister, dxLoginTitle, loginBtn
    }, methods: {
      goBack() {
        login.goBack(this);
      }
    }
  }
</script>

<style src="../assets/css/login.css"></style>
