<template>
  <div class="phoneFind">
    <registerHeader/>
    <div class="phoneFindWrapper">
      <div class="findTitle">
        <span class="title">手机找回</span>
      </div>
      <div class="userPhoneInfo">
        <p>短信验证码已经发送至您的手机号</p>
        <p class="telNumber">+86 {{$route.query.telNum}}</p>
        <p>2 分钟内有效，请尽快使用</p>
      </div>
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" type="text" maxlength="6" placeholder="6位验证码" v-model="passWordNum">
          <dxMsgCode @click.native="getMsgCode" :IsMsgCode="passWordNum.length===6"/>
        </div>
      </div>
    </div>
    <div class="registerBtn">
      <button :disabled="passWordNum.length<6" @click="VerifyPhone">确定</button>
    </div>
  </div>
</template>

<script>
  import registerHeader from '../../components/login/registerHeader'
  import dxMsgCode from '../../components/public/dxMsgCode'

  export default {
    name: "phoneFind",
    components: {
      registerHeader, dxMsgCode
    },
    data() {
      return {
        passWordNum: "",
      }
    },
    methods: {
      getMsgCode() {
        if (this.passWordNum.length === 6) {
          // 发送验证码
        }
      },
      VerifyPhone() {
        // 验证验证码
        this.$router.replace({
          path: "setPassWord",
          query: {
            telNum: this.$route.query.telNum
          }
        })
      }
    },
    mounted() {
      console.log(this.phoneNum)
    }
  }
</script>
<style src="../../assets/css/loginOrRegister.css"></style>
<style src="../../assets/css/phoneFindPass.css"></style>
<style scoped>
  .phoneFindWrapper {
    padding: 0 40px;
  }

  .userPhoneInfo {
    padding: 40px 80px;
    position: relative;
    text-align: center;
  }

  .userPhoneInfo:before {
    width: 184px;
    content: "";
    height: 2px;
    background: #bcbcbc;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .telNumber {
    color: #f69247;
  }

  .userPhoneInfo p {
    line-height: 46px;
  }
</style>
