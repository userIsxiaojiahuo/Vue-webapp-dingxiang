<template>
    <div class="impotencePremature">
<!--      顶部返回-->

<!--      内容-->
      <beautyList :beautyList="importenceItem"></beautyList>
    </div>
</template>

<script>
  import beautyList from '../components/safeBeauty/beautyList'
    export default {
        name: "impotencePremature",
      components:{
        beautyList
      },
      data(){
          return{
            importenceItem:[
              {
                // backgroundImg:require("url()"),
                title:"啪啪啪时间短？",
                desc:"用这招 解决[男]言之隐"
              },
              {
                title:"另一半[性能] 不佳怎么办？",
                desc:"与伴侣沟通 求助于药物"
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
