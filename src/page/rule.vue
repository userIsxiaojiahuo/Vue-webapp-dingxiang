<template>
    <div class="ruleWrap">
<!--      顶部返回-->

<!--      内容-->
      <ruleContent></ruleContent>
    </div>
</template>

<script>
  import ruleContent from '../components/rule/ruleContent'
    export default {
        name: "rule",
      components:{
        ruleContent
      }
    }
</script>

<style scoped>
  .ruleWrap{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }
</style>
