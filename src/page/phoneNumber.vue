<template>
  <div class="phoneNumber">
    <!--    顶部修改手机号-->
    <dxHeaderReturn :headerReturnTitle="repacePhoneNext"></dxHeaderReturn>
    <!--    content-->
    <changePhoneNum></changePhoneNum>
    <!--    btn-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext"></changePhoneBtn>
  </div>
</template>

<script>
  import changePhoneNum from '../components/phoneNumber/changePhoneNum'
  import changePhoneBtn from '../components/phoneNumber/changePhoneBtn'
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  export default {
    name: "phoneNumber",
    components: {
      changePhoneNum,
      changePhoneBtn,
      dxHeaderReturn
    },
    data() {
      return {
        repacePhoneNext: {
          title: "修改手机号",
          path: "/replacePhone"
        }
      }
    }
  }
</script>
<style src="../assets/css/replacePhone.css"></style>
