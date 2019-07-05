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
        code: "",
        isMask: false
      }
    },
    mounted() {

    },
    methods: {
      goBack() {
        common.goBack(this);
      },
      checkLoginMode() {
        this.loginMode = !this.loginMode;
        console.log(this.loginMode);
      },
      MsgLogin() {
        this.isMask = true;
        if (this.loginMode) {
          // 手机号验证码登录
          this.$axios({
            method: "post",
            url: 'http://121.199.63.71:9006/login_code/',
            data: {
              phone: this.TEL,
              input_code: this.code
            }
          }).then((returned) => {
            if (returned.status === 200) {
              if (returned.data.code === 200) {
                common.setCookie("token", returned.data.token, 1);
                this.$router.replace('/mine')
              } else if (returned.data.code === 400) {
                this.$toast({
                  position: "bottom",
                  message: "验证码错误"
                });
              }
            }
          })
        } else {
          console.log(123456);
          console.log({
            phone: this.TEL,
            auth_str: this.code
          });
          // 手机号密码登录

          this.$axios({
            method: 'post',
            url: 'http://121.199.63.71:9006/login_str/',
            data: {
              phone: this.TEL,
              auth_str: this.code
            }
          }).then((returned) => {

            if (returned.status === 200) {

              if (returned.data.code === 200) {
                common.setCookie("token", returned.data.token, 1);
                this.$toast.loading({
                  mask: true,
                  message: '登录中...',
                  duration: 1000,
                  onClose: () => {
                    this.$router.replace('/mine')
                  }
                });
              }
            }
          })
        }

      },
      // 手机验证码登录
      telCode(val) {
        let {phone, msgCode} = val;
        this.TEL = phone;
        this.code = msgCode
      },
      // 手机密码登录
      phonePass(val) {
        let {tel, password} = val;
        this.TEL = tel;
        this.code = password
      }
    }
  }
</script>

<style src="../assets/css/login.css"></style>
