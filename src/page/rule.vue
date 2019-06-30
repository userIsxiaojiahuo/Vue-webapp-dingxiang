<template>
  <div class="ruleWrap">
    <!--      顶部返回-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
    <!--      内容-->
    <ruleContent/>
  </div>
</template>

<script>
  import ruleContent from '../components/rule/ruleContent'
  import dxHeaderReturn from "../components/public/dxHeaderReturn"

  export default {
    name: "rule",
    components: {
      ruleContent,
      dxHeaderReturn
    },
    data() {
      return {
        headerReturnTitle: {
          title: "返回"
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
