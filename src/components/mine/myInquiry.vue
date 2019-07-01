<template>
  <div class="myInquiry">
    <div class="myCollect">
      <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
      <dxDefaultPage v-slot:DefaultPageLogo>
        <img class="imgAuto" src="../../assets/img/defaultPage/ic_collection_empty.png" alt="">
      </dxDefaultPage>
    </div>
  </div>
</template>

<script>
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'

  export default {
    name: "myInquiry",
    components: {
      dxHeaderReturn, dxDefaultPage
    },
    data() {
      return {
        headerReturnTitle: {
          title: "我的问诊"
        }
      }
    }
  }
</script>

<style scoped>
  .myCollect, .myInquiry {
    height: 100%;
  }
</style>
