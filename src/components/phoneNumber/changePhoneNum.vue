<template>
  <div class="changePhoneNum">
    <div class="changePhoneImg">
      <img src="../../assets/img/diagonseImg/ic_caveat_big.png" alt="">
      <!-- <img src="../../assets/diagonseImg/ic_caveat_big.png" alt=""> -->
    </div>
    <p class="changePhoneTitle">当前手机号<span>18703766795</span></p>
    <p class="changePhoneCon">已将该手机号绑定账号，可用于手机账号的登录方式</p>
  </div>
</template>

<script>
  export default {
    name: "changePhoneNum",
  }
</script>

<style scoped>
  .changePhoneImg {
    width: 100%;
    height: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changePhoneImg > img {
    width: 140px;
    border-radius: 50%;
  }

  .changePhoneTitle {
    line-height: 74px;
    color: #333333;
    font-size: 34px;
    text-align: center;
  }

  .changePhoneCon {
    text-align: center;
    line-height: 40px;
    color: #666666;
    font-size: 22px;
    padding: 0 136px;
    letter-spacing: 1px;
  }

  .changePhoneTitle > span {
    margin-left: 12px;
  }
</style>
