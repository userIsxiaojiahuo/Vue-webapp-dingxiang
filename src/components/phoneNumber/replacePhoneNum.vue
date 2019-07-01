<template>
  <div class="replacePhoneInput">
    <label for="">
      <input type="text" placeholder="+86" class="areaNumber"/>
    </label>
    <label for="">
      <input type="number" @input="enter"
             v-model="phoneInput"
             placeholder="请输入手机号"
             class="phoneInput"
             oninput="if(value.length>11) {value=value.slice(0,11)} "
      />
    </label>
    <span class="phoneSpan" v-if="isShow" @click="handleClickSpan"></span>
  </div>
</template>

<script>
  export default {
    name: "replacePhoneNum",
    data() {
      return {
        phoneInput: "",
        isShow: false
      }
    },
    methods: {
      enter() {
        let PHONE_REG = /^(13|15|14|16|17|18|19)\d{9}$/;
        this.$emit("inputNumber", this.phoneInput, PHONE_REG)
        if (this.phoneInput !== "") {
          this.isShow = true
        } else {
          this.isShow = false
        }
      },
      handleClickSpan() {
        this.phoneInput = "";
        this.enter()
      }
    }
  }
</script>

<style scoped>
  .replacePhoneNumWrap {
    padding-left: 30px;
  }

  .replacePhoneTit {
    color: #333333;
    line-height: 80px;
    font-size: 48px;
    margin-top: 20px;
  }

  .replacePhoneCont {
    font-size: 28px;
    line-height: 64px;
    color: #999999;
    letter-spacing: 1px; /*no*/
  }

  .replacePhoneInput {
    width: 690px;
    height: 86px;
    border-bottom: 1px solid #ebebeb; /*no*/
    margin-top: 100px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .replacePhoneInput > label > input {
    outline: none;
    border: none;
  }

  .areaNumber {
    width: 110px;
    position: relative;
    /*margin-right: 30px;*/
  }

  /*.areaNumber::after {*/
  /*  content: "";*/
  /*  width: 1px; !*no*!*/
  /*  height: 40px;*/
  /*  background: red;*/
  /*  position: absolute;*/
  /*  left: 30px;*/
  /*  top: 0;*/
  /*  z-index: 9999;*/
  /*}*/

  .areaNumber::placeholder {
    font-size: 24px;
    color: black;
  }

  .replacePhoneInput > label > .phoneInput {
    border-left: 1px solid #cccccc; /*no*/
    padding-left: 30px;
  }

  .phoneInput:focus {
    color: #4bc7ba;
  }

  .phoneInput::placeholder {
    font-size: 30px;
    color: #cccccc;
  }

  .phoneSpan {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 30px;
    right: 50px;
    background: url("../../assets/diagonseImg/upsdk_cancel_normal.png");
    background-size: cover;
  }
</style>
