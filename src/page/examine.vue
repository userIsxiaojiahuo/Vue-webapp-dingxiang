<template>
    <div class="examineWrap">
<!--      顶部返回-->

<!--      文字-->
      <examineDetials></examineDetials>
    </div>
</template>

<script>
  import examineDetials from '../components/examine/examineDetials'
    export default {
        name: "examine",
        components:{
          examineDetials
        }
    }
</script>
<style src="../../src/assets/css/examine.css"></style>
<style scoped>
  .examineWrap{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }
</style>
