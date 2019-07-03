<template>
  <div class="login">
    <div class="loginHeader">
      <div class="goBack" @click="goBack()">
        <img class="imgAuto" src="../assets/img/loginOrRegister/res_close.png" alt="">
      </div>
      <router-link to="/register" tag="div" class="registerBtn">注册</router-link>
    </div>
    <div class="LoginContent">
      <!--手机登录板块-->
      <dxLoginOrRegister v-if="loginMode">
        <template v-slot:register>
          <span class="title">手机号登录</span>
        </template>
      </dxLoginOrRegister>
      <!--账号密码登录-->
      <dxPassWordLogin v-if="!loginMode">
        <template v-slot:register>
          <span class="title">账号密码登录</span>
        </template>
      </dxPassWordLogin>
      <div class="checkLogin" @click="checkLoginMode">用账号密码登录</div>
      <loginBtn v-slot:loginBtn @click.native="MsgLogin">
        <span>登录</span>
      </loginBtn>
      <dxProtocol/>
    </div>
  </div>
</template>

<script>
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'
  import dxLoginTitle from '../components/public/dxLoginTitle'
  import loginBtn from '../components/public/loginBtn'
  import dxPassWordLogin from '../components/login/dxPassWordLogin'
  import dxProtocol from '../components/login/dxProtocol'
  import common from '../assets/js/common.js'
  import user from '../assets/js/user.js'

  export default {
    name: "register",
    components: {
      dxLoginOrRegister, dxLoginTitle, loginBtn, dxPassWordLogin, dxProtocol
    },
    data() {
      return {
        loginMode: true
      }
    },
    methods: {
      goBack() {
        common.goBack(this);
      },
      checkLoginMode() {
        this.loginMode = !this.loginMode
      },
      MsgLogin() {
        console.log(this.loginMode);
        // if (this.loginMode) {
        //   user.login(this,)
        // }
      }
    }
  }
</script>

<style src="../assets/css/login.css"></style>
