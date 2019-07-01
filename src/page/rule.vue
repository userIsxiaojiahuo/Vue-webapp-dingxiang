<template>
  <div class="ruleWrap">
    <!--      顶部返回-->
    <dxHeaderReturn urn :headerReturnTitle="headerMessage">
      <dxHeaderIcon/>
    </dxHeaderReturn>
    <!--      内容-->
    <ruleContent></ruleContent>
  </div>
</template>

<script>
  import ruleContent from '../components/rule/ruleContent'
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIcon from "../components/public/dxAttentionBtn"

  export default {
    name: "rule",
    components: {
      ruleContent,
      dxHeaderReturn,
      dxHeaderIcon
    },
    data() {
      return {
        headerMessage: {
          title: "返回",
        }
      }
    }
  }
</script>

<style scoped>
  .ruleWrap {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }
</style>
