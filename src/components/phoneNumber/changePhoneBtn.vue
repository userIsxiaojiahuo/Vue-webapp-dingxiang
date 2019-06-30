<template>
  <div>
    <router-link :to="repacePhoneNext.path" tag="div" class="changePhoneBtnWrap">
      <div @click="handleClick()"
           :class="isOk?'changePhoneBtn':'changeBg'"
           class="changePhoneBtn">{{repacePhoneNext.title}}
      </div>
    </router-link>
    <div class="changePhoneBtnWrap">
      <div class="changePhoneBtn">{{repacePhoneNext}}</div>
    </div>
  </div>
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

<style scoped>
  .changePhoneBtnWrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changePhoneBtn {
    margin-top: 96px;
    width: 690px;
    height: 90px;
    background: #28b7a3;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
</style>
