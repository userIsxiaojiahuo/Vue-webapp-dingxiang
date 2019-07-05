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
        注册
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
        /*this.$axios({
          method: "post",
          url: 'http://121.199.63.71:9006/is_exist/',
          data: {
            phone: this.TEL
          }
        });*/
        this.$axios({
          method: 'post',
          url: 'http://121.199.63.71:9006/login_code/',
          data: {
            phone: this.TEL,
            input_code: this.code
          }
        }).then((returned) => {
          console.log(returned);
          if (returned.status === 200) {
            if (returned.data.code === 200) {
              this.common.setCookie("token", returned.data.token, 1);
              this.$router.replace({
                name: 'setPassWord',
                query: {
                  telNum: this.TEL
                }
              })
            } else if (returned.data.code === 400) {
              this.$toast({
                position: "bottom",
                message: "验证码错误"
              });
            }
          }
        })
      }
    }
  }
</script>

<style src="../assets/css/register.css"></style>
