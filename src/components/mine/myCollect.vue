<template>
  <div class="myCollect">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <dxDefaultPage v-slot:DefaultPageLogo :DefaultPageTxt="DefaultPageTxt">
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
        },
        DefaultPageTxt: {
          txt: "暂无收藏内容"
        }
      }
    }
  }
</script>

<style scoped>
  .myCollect {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
