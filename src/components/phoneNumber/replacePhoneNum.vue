<template>
  <div class="replacePhoneInput">
    <input type="text" placeholder="+86" class="areaNumber"/>
    <input type="number" @input="enter"
           v-model="phoneInput"
           placeholder="请输入手机号"
           class="phoneInput"
           oninput="if(value.length>11) {value=value.slice(0,11)} "
    />
    <div class="replacePhoneError">
      <img src="../../assets/img/diagonseImg/upsdk_cancel_normal.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "replacePhoneNum",
    data() {
      return {
        phoneInput: ""
      }
    },
    methods: {
      enter() {
        this.$emit("inputNumber", this.phoneInput)

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
</style>
