<template>
  <div class="examineWrap">
    <!--      顶部返回-->
    <dxHeaderReturn urn :headerReturnTitle="headerMessage">
      <dxHeaderIcon/>
    </dxHeaderReturn>
    <!--      文字-->
    <examineDetials></examineDetials>
  </div>
</template>

<script>
  import examineDetials from '../components/examine/examineDetials'
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIcon from "../components/public/dxAttentionBtn"

  export default {
    name: "examine",
    components: {
      examineDetials,
      dxHeaderReturn,
      dxHeaderIcon
    },
    data() {
      return {
        headerMessage: {
          title: "返回",
        },
      }
    }
  }
</script>
<style src="../../src/assets/css/examine.css"></style>
<style scoped>
  .examineWrap {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }
</style>
