<template>
  <div class="conPic">
    <conPicHeader></conPicHeader>
    <conPicImg></conPicImg>
    <illinessInfo :placeholderText="placeholderText"></illinessInfo>
    <conPicOffer></conPicOffer>
    <conPicFooter></conPicFooter>
  </div>
</template>

<script>
  import conPicHeader from './../components/conPic/conPicHeader'
  import conPicImg from './../components/conPic/conPicImg'
  import illinessInfo from './../components/conPic/illinessInfo'
  import conPicOffer from './../components/conPic/conPicOffer'
  import conPicFooter from './../components/conPic/conPicFooter'

  /**
   * 图文详情
   */
  export default {
    name: "conPic",
    components: {
      conPicHeader,
      conPicImg,
      illinessInfo,
      conPicOffer,
      conPicFooter
    },
    data() {
      return {
        placeholderText: '请描述你的性别年龄、症状、就诊经历，我们会保证你的隐私安全'
      }
    }
  }
</script>

<style scoped>
  .conPic{
    overflow-x: hidden;
  }
</style>
