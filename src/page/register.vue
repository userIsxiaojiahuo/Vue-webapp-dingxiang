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
      <dxProtocol/>
    </div>
  </div>
</template>

<script>
  import login from '../assets/js/user.js'
  import loginBtn from '../components/public/loginBtn'
  import dxLoginOrRegister from '../components/public/dxLoginOrRegister'
  import registerHeader from '../components/login/registerHeader'
  import dxProtocol from '../components/login/dxProtocol'


  export default {
    name: "login",
    components: {
      loginBtn, dxLoginOrRegister, registerHeader, dxProtocol
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
        this.$axios({
          method: 'post',
          url: 'http://121.199.63.71:9006/login_code/',
          data: {
            TEL: this.TEL,
            code: this.code
          }
        }).then((returned) => {
          if (returned.status === 200) {
            if (returned.data.code === 200) {
              common.setCookie("token", returned.data.token, 1);
              this.$router.replace('/login')
            }
          }
        })
      }
    }
  }
</script>

<style src="../assets/css/register.css"></style>
