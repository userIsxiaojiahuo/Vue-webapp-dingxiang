<template>
  <router-link :to="repacePhoneNext.path" tag="div" class="changePhoneBtnWrap">
    <div @click="handleClick()"
         :class="isOk?'changePhoneBtn':'changeBg'"
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
      // console.log(this.repacePhoneNext)
    }
  }
</script>
