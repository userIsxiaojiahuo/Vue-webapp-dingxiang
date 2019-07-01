<template>
  <div class="myCollect">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <dxDefaultPage v-slot:DefaultPageLogo>
      <img class="imgAuto" src="../../assets/img/defaultPage/ic_collection_empty.png" alt="">
    </dxDefaultPage>
  </div>
</template>

<script>
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'

  export default {
    name: "myCollect",
    components: {
      dxHeaderReturn, dxDefaultPage
    },
    data() {
      return {
        headerReturnTitle: {
          title: "我的收藏"
        }
      }
    }
  }
</script>

<style scoped>
  .myCollect {
    height: 100%;
  }
</style>
