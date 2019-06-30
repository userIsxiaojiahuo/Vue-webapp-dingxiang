<template>
  <div>
    <!--  顶部更换手机号-->

    <!--  请输入新的手机号-->
    <replacePhoneNum></replacePhoneNum>
    <!--  下一步-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext"></changePhoneBtn>
  </div>
</template>

<script>
  import replacePhoneNum from '../components/phoneNumber/replacePhoneNum'
  import changePhoneBtn from '../components/phoneNumber/changePhoneBtn'

  export default {
    name: "replacePhone",
    components: {
      replacePhoneNum,
      changePhoneBtn
    },
    data() {
      return {
        repacePhoneNext: "下一步"
      }
    }
  }
</script>

<style scoped>

</style>
