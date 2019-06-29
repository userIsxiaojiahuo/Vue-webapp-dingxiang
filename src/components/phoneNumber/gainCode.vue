<template>
  <div class="replacePhoneInput gainCodeInput">
    <label>
      <input type="number" placeholder="请输入您收到的验证码"
             oninput="if(value.length>6) value=value.slice(0,6)"
             class="phoneInput"
             @input="enter"
             v-model="phoneInput"/>
    </label>
    <div class="againAcquire">
      重新获取<span>(56s)</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gainCode",
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

