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
            backgroundImg: "https://img1.dxycdn.com/2019/0321/419/3335360244355457786-15.jpg",
            title: "啪啪啪时间短？",
            desc: "用这招 解决[男]言之隐"
          },
          {
            backgroundImg: "https://img1.dxycdn.com/2019/0321/227/3335380321180295465-15.jpg",
            title: "另一半[性能] 不佳怎么办？",
            desc: "与伴侣沟通 求助于药物"
          }
        ]
      }
    }
  }
</script>
<style src="../assets/css/safeBeauty.css"></style>
