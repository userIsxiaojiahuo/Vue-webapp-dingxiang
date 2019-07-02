<template>
  <div class="findPassword">
    <registerHeader/>
    <div class="findPassWordCont">
      <div class="findTitle">
        <span class="title">账号密码登录</span>
      </div>
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_user.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input loginInput" autocomplete="off" type="text" maxlength="13"
                 placeholder="手机号/邮箱/用户名"
                 v-model="phoneNumber"
          >
        </div>
      </div>
    </div>
    <div class="registerBtn">
      <button :disabled="phoneNumber.length<=0" @click="VerifyPhone">下一步</button>
    </div>
  </div>
</template>

<script>
  import registerHeader from '../../components/login/registerHeader'

  export default {
    name: "findPassword",
    components: {
      registerHeader
    },
    data() {
      return {
        phoneNumber: ""
      }
    },
    methods: {
      // 发送验证码
      VerifyPhone() {
        // this.$router.push('/phoneFind?phone=' + this.phoneNumber);
        this.$router.replace  ({
          path: 'phoneFind',
          query: {
            telNum: this.phoneNumber
          }
        });
      }
    }
  }
</script>
<style src="../../assets/css/loginOrRegister.css"></style>
<style src="../../assets/css/phoneFindPass.css"></style>
