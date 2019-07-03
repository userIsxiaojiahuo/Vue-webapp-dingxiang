<template>
  <div class="examineWrap">
    <!--      顶部返回-->
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
    <!--      文字-->
    <examineDetials v-if="isShowDiv"/>
  </div>
</template>

<script>
  import examineDetials from '../components/examine/examineDetials'
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  export default {
    name: "examine",
    components: {
      examineDetials,
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
<style src="../../src/assets/css/examine.css"></style>
<style scoped>
  .examineWrap {
    width: 100%;
    height: 100%;
    background: #f4f4f4;
  }
</style>
