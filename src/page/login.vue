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
      <dxLoginOrRegister v-if="loginMode" @info="telCode">
        <template v-slot:register>
          <span class="title">手机号登录</span>
        </template>
      </dxLoginOrRegister>
      <!--账号密码登录-->
      <dxPassWordLogin v-if="!loginMode" @phonePass="phonePass">
        <template v-slot:register>
          <span class="title">账号密码登录</span>
        </template>
      </dxPassWordLogin>
      <div class="checkLogin" @click="checkLoginMode">用账号密码登录</div>
      <loginBtn v-slot:loginBtn @click.native="MsgLogin">登录</loginBtn>
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
  import login from '../assets/js/user.js'

  export default {
    name: "register",
    components: {
      dxLoginOrRegister, dxLoginTitle, loginBtn, dxPassWordLogin, dxProtocol
    },
    data() {
      return {
        loginMode: true,
        TEL: "",
        code: ""
      }
    },
    methods: {
      goBack() {
        common.goBack(this);
      },
      checkLoginMode() {
        this.loginMode = !this.loginMode;
      },
      MsgLogin() {
        if (this.loginMode) {
          login.loginOrRegister(this, {
            TEL: this.TEL,
            code: this.code
          });
        } else {
          console.log(this.phonePass());
          login.phonePassLogin(this, {
            TEL: this.TEL,
            code: this.code
          })
        }

      },
      telCode(val) {
        let {phone, msgCode} = val;
        this.TEL = phone;
        this.code = msgCode
      },
      phonePass(val) {
        let {tel, password} = val;
        this.TEL = tel;
        this.code = password
      }
    }
  }
</script>

<style src="../assets/css/login.css"></style>
