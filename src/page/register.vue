<template>
  <div class="register">
    <registerHeader/>
    <!--短信注册主体-->
    <div class="registerWrapper">
      <dxLoginOrRegister @info="telCode">
        <template v-slot:register>
          <span class="title">手机号注册</span>
        </template>
      </dxLoginOrRegister>
      <!--协议-->
      <loginBtn v-slot:loginBtn @click.native="registerBtn">
        <span>注册</span>
      </loginBtn>
    </div>

  </div>
</template>

<script>
  import login from '../assets/js/user.js'
  import loginBtn from '../components/public/loginBtn'
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'
  import registerHeader from '../components/login/registerHeader'
  import newVue from '../assets/js/newVue.js'

  export default {
    name: "login",
    components: {
      loginBtn, dxLoginOrRegister, registerHeader
    },
    data() {
      return {
        TEL: "",
        code: ""
      }
    },
    methods: {
      telCode(val) {
        let {phone, msgCode} = val;
        this.TEL = phone;
        this.code = msgCode
      },
      registerBtn() {
        login.loginOrRegister(this, {
          TEL: this.TEL,
          code: this.code
        });
      }
    }
  }
</script>

<style src="../assets/css/register.css"></style>
