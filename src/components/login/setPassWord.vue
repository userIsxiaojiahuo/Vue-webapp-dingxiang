<template>
  <div class="phoneFind">
    <registerHeader/>
    <div class="phoneFindWrapper">
      <div class="findTitle">
        <span class="title">修改密码</span>
      </div>
      <div class="userPhoneInfo">
        <span>找回手机号：</span>
        <span class="telNumber">+86 {{$route.query.telNum}}</span>
      </div>
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" type="password" maxlength="16" placeholder="8-16位的数字或字母组合"
                 v-model="passWordNum">
        </div>
      </div>
    </div>
    <div class="registerBtn">
      <button :disabled="passWordNum.length<8" @click="stePassWorld">确定</button>
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
      stePassWorld() {
        // 修改密码
        this.$router.replace('/login')
      }
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
