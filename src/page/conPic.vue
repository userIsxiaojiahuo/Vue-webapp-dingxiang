<template>
  <div class="conPic">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxNextBtn :headerReturnTitle="headerReturnTitle"/>
    </dxHeaderReturn>
    <conPicImg></conPicImg>
    <illinessInfo :placeholderText="placeholderText"></illinessInfo>
    <conPicOffer></conPicOffer>
    <conPicFooter></conPicFooter>
  </div>
</template>

<script>
  import dxHeaderReturn from './../components/public/dxHeaderReturn'
  import dxNextBtn from './../components/public/dxNextBtn'
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
      dxHeaderReturn,
      conPicImg,
      illinessInfo,
      conPicOffer,
      conPicFooter,
      dxNextBtn
    },
    data() {
      return {
        placeholderText: '请描述你的性别年龄、症状、就诊经历，我们会保证你的隐私安全',
        headerReturnTitle: {
          title: "图文问诊",
          txt: "下一步",
          path:"/"
        }
      }
    }
  }
</script>
<<<<<<< HEAD

<style scoped>
  .conPic {
    overflow-x: hidden;
  }
</style>
=======
>>>>>>> eb16cf7afa4668f16c80bcd902684b1459fc7dd9
