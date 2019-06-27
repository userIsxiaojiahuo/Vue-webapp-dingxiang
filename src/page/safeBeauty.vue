<template>
  <div class="safeBeauty">
    <!-- 顶部返回-->

    <!--安全变美-->
    <beautyList :beautyList="beautyItem"></beautyList>
  </div>

</template>

<script>
  import beautyList from '../components/safeBeauty/beautyList'

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
        ]
      }
    },
    components: {
      beautyList
    }
  }
</script>

<style scoped>
  .safeBeauty {
    width: 100%;
    height: 100%;
  }
</style>
