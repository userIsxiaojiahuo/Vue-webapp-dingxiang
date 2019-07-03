<template>
  <router-link :to="repacePhoneNext.path" tag="div"
               class="changePhoneBtnWrap">
    <div :class="isOk?'changePhoneBtn':'changeBg'"
         class="changePhoneBtn">{{repacePhoneNext.title}}
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "changePhoneBtn",
    props: ["repacePhoneNext", "isOk"],
    methods: {
      handleClick() {
        this.$emit("changeBtnClick")
      }
    },
    created() {

    }
  }
</script>
