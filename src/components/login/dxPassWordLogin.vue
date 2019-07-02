<template>
  <div class="loginContent">
    <slot name="register"></slot>
    <!--验证码登录注册-->
    <div class="inputWrapper">
      <!--电话-->
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_user.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" autocomplete="off" type="text" maxlength="13" placeholder="手机号/邮箱/用户名"
                 v-model="phoneNumber" @blur="phoneNumberPromptMsg"
                 :class="{inputNumError:promptMSgInfo === '手机号输入格式不正确' && promptMSg===true}">
        </div>
      </div>
      <!--密码-->
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" type="text" placeholder="请输入密码" v-model="passWordNum"
                 @blur="MsgCodePromptMsg" :class="{inputNumError:promptMSgInfo === '验证码错误' && promptMSg===true}"
                 @keydown="">
        </div>
      </div>
      <!--验证码-->
      <div class="noCode">
        <div class="hintInfo" v-show="promptMSg">{{this.promptMSgInfo}}</div>
        <div class="noCodeText">忘记密码？</div>
      </div>
    </div>
    <!--登录按钮-->
    <slot name="login"></slot>
  </div>
</template>

<script>
  import user from '../../assets/js/user.js'

  export default {
    name: "dxLoginOrRegister",
    data() {
      return {
        phoneNumber: '',
        passWordNum: '',
        promptMSgInfo: "",
        getMsgNum: false,
        promptMSg: false,
      }
    },
    components: {},
    methods: {
      // 手机正则验证
      phoneNumberPromptMsg() {
        // 正则验证
        this.promptMSg = !user.isMsgSuccess(this.phoneNumber.replace(/\s/g, ""));
        this.promptMSgInfo = "手机号输入格式不正确";
        console.log(this.promptMSgInfo)
      },
      // 短信手机验证
      MsgCodePromptMsg() {
        this.passWordNum.length !== 0 ? this.promptMSg = false : this.promptMSg = true;
        this.promptMSgInfo = "密码格式错误";
        console.log(this.promptMSgInfo)

      }
    },
    watch: {
      phoneNumber(newValue, oldValue) {
        if (newValue.length >= 13 && user.isMsgSuccess(newValue.replace(/\s/g, ""))) {
          this.getMsgNum = true;
        }
        if (newValue.length > oldValue.length) {
          if (newValue.length === 3 || newValue.length === 8) {
            this.phoneNumber += ' ';
          }
        }
      }
    }
  }
</script>

<style src="../../assets/css/loginOrRegister.css"></style>
