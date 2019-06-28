<template>
  <div class="codeBtn">
    <span class="codeBtnTxt" :class="{activeMasCode:IsMsgCode}">获取验证码</span>
  </div>
</template>

<script>
  export default {
    name: "dxMsgCode",
    props: ['IsMsgCode']
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
  }

  .codeBtnTxt {
    font-size: 24px;
    color: #cfcfcf;
  }

  .activeMasCode {
    background: #ededed;
    color: #666666;
  }
</style>
