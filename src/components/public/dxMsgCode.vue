<template>
  <div class="codeBtn" :class="{codeBtnOk:IsMsgCode}">
    <span>获取验证码</span>
  </div>
</template>

<script>
  export default {
    name: "dxMsgCode",
    props: ['IsMsgCode'],
    methods: {

    }
  }
</script>

<style scoped>
  .codeBtn {
    width: 198px;
    height: 56px;
    background: #ededed;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    position: absolute;
    right: 0;
    color: #cccccc;
    font-size: 24px;
  }

  .codeBtnOk {
    background: #ededed;
    color: #484848;
  }

</style>
