<template>
  <div class="myInquiry">
    <div class="myCollect">
      <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
      <dxDefaultPage v-slot:DefaultPageLogo :DefaultPageTxt="DefaultPageTxt">
        <img class="imgAuto" src="../../assets/img/defaultPage/ic_zero_orders_empty.png" alt="">
      </dxDefaultPage>
    </div>
  </div>
</template>

<script>
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'

  export default {
    name: "myDrugOrders",
    components: {
      dxHeaderReturn, dxDefaultPage
    },
    data() {
      return {
        headerReturnTitle: {
          title: "我的药品订单"
        },
        DefaultPageTxt: {
          txt: "暂无相关订单"
        }
      }
    }
  }
</script>

<style scoped>
  .myCollect, .myInquiry {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
