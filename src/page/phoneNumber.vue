<template>
  <div class="phoneNumber">
    <!--    顶部修改手机号-->

    <!--    content-->
    <changePhoneNum></changePhoneNum>
    <!--    btn-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext"></changePhoneBtn>
  </div>
</template>

<script>
  import changePhoneNum from '../components/phoneNumber/changePhoneNum'
  import changePhoneBtn from '../components/phoneNumber/changePhoneBtn'

  export default {
    name: "phoneNumber",
    components: {
      changePhoneNum,
      changePhoneBtn
    },
    data() {
      return {
        repacePhoneNext:{
          title:"更换手机号",
          path:"/replacePhone"
        }
      }
    }
  }
</script>
<style src="../assets/css/replacePhone.css"></style>
