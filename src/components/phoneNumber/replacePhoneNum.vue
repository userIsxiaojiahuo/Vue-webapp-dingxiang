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
    <div class="replacePhoneError">
      <img src="../../assets/diagonseImg/upsdk_cancel_normal.png" alt="">
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

