<template>
  <div class="mine">
    <!--我的头部-->
    <mineHeader/>
    <!--我的问诊、处方、药品订单、讲师、测评-->
    <mineNav/>
    <!--下面列表-->
    <mineListWrapper v-for="(item,index) in title" :path="item.path" :titleText="item.text"
                     :key="index"/>
    <!--页面底部说明-->
    <dxUnderState/>
  </div>
</template>

<script>
  import mineHeader from '../components/mine/mineHeader'
  import mineNav from '../components/mine/mineNav'
  import mineListWrapper from '../components/mine/mineListWrapper'
  import dxUnderState from '../components/public/dxUnderState'


  export default {
    name: "mine",
    data() {
      return {
        title: [
          {
            text: "购物车",
            path: ''
          },
          {
            text: "患者信息",
            path: '/patientInformation'
          },
          {
            text: "设置",
            path: 'setting'
          },
          {
            text: "用户反馈",
            path: ''
          }
        ]
      }
    },
    components: {
      mineHeader,
      mineNav,
      mineListWrapper,
      dxUnderState
    },

  }
</script>

<style src="../assets/css/mine.css"></style>
