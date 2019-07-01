<template>
  <div class="loginContent">
    <slot name="register"></slot>
    <div class="inputWrapper">
      <div class="input">
        <div class="phoneArea underLine">
          <div class="phonePicWra">
            <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_phone.png" alt="">
          </div>
          <div class="AreaInputWrapper">
            <input class="AreaInput" type="text" value="+86">
          </div>
        </div>
        <div class="phoneNumber underLine">
          <input class="phoneInput AreaInput" type="text" maxlength="13" placeholder="11位手机号码">
        </div>
      </div>
      <div class="input underLine codeWrapper">
        <div class="phonePicWra loginCode">
          <img class="imgAuto" src="../../assets/img/loginOrRegister/sso_pw.png" alt="">
        </div>
        <div class="phoneNumber">
          <input class="phoneInput AreaInput loginInput" type="text" maxlength="4" placeholder="4位验证码">
          <div class="codeBtn">
            <span class="codeBtnTxt">获取验证码</span>
          </div>
        </div>
      </div>
      <div class="noCode">
        <div class="hintInfo" v-show="true">手机号码错误</div>
        <div class="noCodeText">收不到验证码？</div>
      </div>
      <slot name="login"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "dxLoginOrRegister"
  }
</script>

<style scoped>
  .loginContent {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 46px;
    flex-direction: column;
    margin-bottom: 60px;
    padding: 0 40px;
  }

  .inputWrapper {
    margin-top: 22px;
  }

  .title {
    text-align: center;
  }

  .input {
    height: 108px;
    display: flex;
  }

  .phoneArea {
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;

  }

  .phonePicWra {
    width: 28px;
    height: 32px;
    display: flex;
    margin-bottom: -14px;
    margin-left: 52px;
  }

  .underLine {
    border-bottom: 1px solid #cccccc;
  }

  .AreaInputWrapper {
    flex: 1;
    height: 100%;
    display: flex;
  }

  .AreaInput {
    width: 100%;
    height: 40%;
    align-self: flex-end;
    margin-bottom: 24px;
    margin-left: 33px;
    border: none;
    float: right;
    font-size: 24px;
    line-height: 24px;
    color: black;
    font-weight: 600;
    border-right: 1px solid #cccccc;
  }

  .phoneNumber {
    display: flex;
    flex: 1;
    border-right: none;
    margin-left: 4px;
    align-items: center;
  }

  .phoneInput {
    border-right: none;
  }

  .phoneInput::-webkit-input-placeholder {
    color: #9e9e9e;
    font-weight: 100;
  }

  .codeWrapper {
    align-items: center;
  }

  .loginInput {
    margin-bottom: 1px;
  }

  .loginInput::-webkit-input-placeholder {
    color: #d1d1d1;
    font-weight: 100;
  }

  .codeBtn {
    width: 198px;
    height: 56px;
    background: #ededed;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }

  .codeBtnTxt {
    font-size: 24px;
    color: #cfcfcf;
  }

  .noCode {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }

  .noCodeText {
    text-align: right;
    padding-right: 20px;
    color: #cccccc;
    font-size: 26px;
    float: right;
  }

  .hintInfo {
    font-size: 26px;
    color: red;
    margin-left: 52px;
  }
</style>
