<template>
  <div class="mine">
    <!--我的头部-->
    <mineHeader/>
    <!--我的问诊、处方、药品订单、讲师、测评-->
    <mineNav/>

    <mineListWrapper v-slot:fund>
      <span class="listInfo">购物车</span>
    </mineListWrapper>
    <mineListWrapper v-slot:fund>
      <span class="listInfo">患者信息</span>
    </mineListWrapper>
  </div>
</template>

<script>
  import mineHeader from '../components/mine/mineHeader'
  import mineNav from '../components/mine/mineNav'
  import mineListWrapper from '../components/mine/mineListWrapper'


  export default {
    name: "mine",
    components: {
      mineHeader,
      mineNav,
      mineListWrapper
    },
  }
</script>

<style scoped>
  .mine {
    background: #f4f4f4;
  }

  .listInfo {
    font-size: 29px;
    font-weight: 600;
    line-height: 1;
  }

  .publicFund {
    font-size: 30px;
  }
  .publicFundImg{

  }
</style>
