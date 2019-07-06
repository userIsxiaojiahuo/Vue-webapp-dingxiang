<template>
  <button class="codeBtn" :disabled="IsMsgCode">
    获取验证码
  </button>
</template>

<script>
  export default {
    name: "dxMsgCode",
    props: ['IsMsgCode'],
    methods: {}
  }
</script>

<style scoped>
  .codeBtn {
    width: 198px;
    height: 56px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    position: absolute;
    right: 0;
    font-size: 24px;
    border: none;
    background: #ededed;
    color: #484848;
  }

  button[disabled] {
    color: #cccccc;
    background: #ededed;
  }

  .codeBtnOk {

  }

</style>
