<template>
  <div class="impotencePremature">
    <!--      顶部返回-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxAttentionBtn/>
    </dxHeaderReturn>
    <!--      内容-->
    <beautyList :beautyList="importenceItem"></beautyList>
  </div>
</template>

<script>
  import beautyList from '../components/safeBeauty/beautyList'
  import dxHeaderReturn from '../components/public/dxHeaderReturn'
  import dxAttentionBtn from '../components/public/dxAttentionBtn'

  export default {
    name: "impotencePremature",
    components: {
      beautyList, dxHeaderReturn, dxAttentionBtn
    },
    data() {
      return {
        headerReturnTitle: {
          title: "返回"
        },
        importenceItem: [
          {
            // backgroundImg:require("url()"),
            title: "啪啪啪时间短？",
            desc: "用这招 解决[男]言之隐"
          },
          {
            title: "另一半[性能] 不佳怎么办？",
            desc: "与伴侣沟通 求助于药物"
          }
        ]
      }
    }
  }
</script>
