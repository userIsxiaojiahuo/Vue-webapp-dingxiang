<template>
  <div class="hospitalMap">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <div id="container"></div>
  </div>
</template>

<script>
  /**
   * 地图
   */
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  export default {
    name: "hospitalMap",
    components: {
      dxHeaderReturn
    },
    data() {
      return {
        headerReturnTitle: {
          title: "返回"
        }
      }
    },
    mounted() {
    
    }
  }
</script>

<style scoped>
  .hospitalMap {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mapContent {
    flex: 1;
  }
</style>
