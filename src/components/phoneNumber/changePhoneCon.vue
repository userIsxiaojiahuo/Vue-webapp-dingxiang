<template>
  <div class="replacePhoneNumWrap">
    <p class="replacePhoneTit">{{changePhoneCon.newsPhoneTit}}</p>
    <p class="replacePhoneCont">{{changePhoneCon.newsPhoneDesc}}</p>
    <p class="replacePhoneCont">{{changePhoneCon.newPhoneCurrent}}<span class="gain">{{changePhoneCon.newPhone}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "changePhoneCon",
    props: ["changePhoneCon"]
  }
</script>
<style>
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
</style>
