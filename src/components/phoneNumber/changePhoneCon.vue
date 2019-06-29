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
