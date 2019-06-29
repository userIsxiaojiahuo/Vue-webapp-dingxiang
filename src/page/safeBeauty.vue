<template>
  <div class="safeBeauty">
    <!-- 顶部返回-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle">
      <dxAttentionBtn/>
    </dxHeaderReturn>
    <!--安全变美-->
    <beautyList :beautyList="beautyItem"></beautyList>
  </div>

</template>

<script>
  import beautyList from '../components/safeBeauty/beautyList'
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxAttentionBtn from "../components/public/dxAttentionBtn"

  export default {
    name: "safeBeauty",
    data() {
      return {
        beautyItem: [
          {
            // backgroundImg:require("url()"),
            title: "脱发了？医生给你生发秘籍",
            desc: "变丑千万条  脱发第一条"
          },
          {
            title: "脱发了？医生给你生发秘籍",
            desc: "变丑千万条  脱发第一条"
          }
        ], headerReturnTitle: {}
      }
    },
    components: {
      beautyList, dxHeaderReturn, dxAttentionBtn
    }
  }
</script>

<style src="../assets/css/safeBeauty.css"></style>
