<template>
  <div class="ruleWrap">
    <!--      顶部返回-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
    <!--      内容-->
    <ruleContent v-if="isShowDiv"/>
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
      dxHeaderReturn
    },
    data() {
      return {
        headerReturnTitle: {
          title: "返回"
        },
        isShowDiv: false
      }
    },
    mounted() {
      // 内容加载时，显示的动画
      this.$store.dispatch("GetInfo", true);
      let times = null;
      clearTimeout(times);
      //延时加载
      times = setTimeout(() => {
        this.$store.dispatch("GetInfo", false);
        this.isShowDiv = true
      }, 2000)
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
