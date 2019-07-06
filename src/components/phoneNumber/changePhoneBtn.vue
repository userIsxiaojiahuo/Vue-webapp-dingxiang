<template>
  <router-link :to="{path:repacePhoneNext.path,query:{phone:this.$route.query.userinfo?$route.query.userinfo:phone}}" tag="div"
               class="changePhoneBtnWrap">
    <div :class="isOk?'changePhoneBtn':'changeBg'"
         class="changePhoneBtn">{{repacePhoneNext.title}}
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "changePhoneBtn",
    props: ["repacePhoneNext", "isOk","phone"],
    methods: {
      handleClick() {
        this.$emit("changeBtnClick")
      }
    },
    created() {

    }
  }
</script>
