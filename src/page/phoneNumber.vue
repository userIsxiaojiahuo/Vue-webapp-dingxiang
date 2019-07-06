<template>
  <div class="phoneNumbers">
    <!--    顶部修改手机号-->
    <dxHeaderReturn :headerReturnTitle="repacePhoneNext"></dxHeaderReturn>
    <!--    content-->
    <changePhoneNum :phone="phone"></changePhoneNum>
    <!--    btn-->
    <changePhoneBtn :repacePhoneNext="repacePhoneNext" :isOk="isOk"></changePhoneBtn>
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
		created(){
			this.phone = this.$route.query.userinfo
		},
    data() {
      return {
        repacePhoneNext: {
          title: "修改手机号",
          path: "/replacePhone",
        },
        isOk:true,
				phone:0
      }
    }
  }
</script>
<style src="../assets/css/replacePhone.css"></style>
