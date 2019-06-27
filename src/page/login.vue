<template>
  <div class="login">
    <div class="loginHeader">
      <div class="goBack">
        <img class="imgAuto" src="../assets/img/login/goback.png" alt="">
      </div>
    </div>
    <div class="loginContent">
      <span class="title">快速注册</span>
      <div class="inputWrapper">
        <div class="input">
          <div class="phoneArea underLine">
            <div class="phonePicWra">
              <img class="imgAuto" src="../assets/img/login/sso_phone.png" alt="">
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
            <img class="imgAuto" src="../assets/img/login/sso_phone.png" alt="">
          </div>
          <div class="phoneNumber">
            <input class="phoneInput AreaInput loginInput" type="text" maxlength="13" placeholder="4位验证码">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style src="../assets/css/login.css"></style>
