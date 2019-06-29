<template>
  <div class="loginContent">
    <slot name="register"></slot>
    <div class="inputWrapper">
      <!--电话-->
      <div class="inputItem">
        <div class="phoneArea">
          <div class="phonePic">
            <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_phone.png" alt="">
          </div>
          <div class="AreaInputWrapper">
            <input class="AreaInput input" type="text" value="+86">
          </div>
        </div>
        <div class="phoneNumber" :class='{focusActive:changeColor}'>
          <input class=" input" autocomplete="off" type="text" maxlength="13" placeholder="11位手机号码"
                 v-model="phoneNumber">
        </div>
      </div>
      <!--密码-->
      <div class="inputItem">
        <div class="phonePic">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="AreaInputWrapper">
          <input class="AreaInput input" type="text" maxlength="4" placeholder="4位验证码">
          <dxMsgCode :IsMsgCode="getMsgNum"/>
        </div>
      </div>
      <!--验证码-->
      <div class="noCode">
        <div class="hintInfo" v-show="false">手机号码错误</div>
        <div class="noCodeText">收不到验证码？</div>
      </div>
      <!--登录按钮-->
      <slot name="login"></slot>
    </div>
  </div>
</template>

<script>
  import user from '../../assets/js/user.js'
  import dxMsgCode from '../../components/public/dxMsgCode'

  export default {
    name: "dxLoginOrRegister",
    data() {
      return {
        phoneNumber: '',
        getMsgNum: false,
        changeColor: false
      }
    },
    components: {
      dxMsgCode
    },
    watch: {
      phoneNumber(newValue, oldValue) {
        newValue.length >= 13 ? this.getMsgNum = true : this.getMsgNum = false;
        newValue.focus ? this.changeColor = true : this.changeColor = false;
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
