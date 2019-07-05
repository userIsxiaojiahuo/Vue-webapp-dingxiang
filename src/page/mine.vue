<template>
  <div class="mine">
    <!--我的头部-->
    <mineHeader/>
    <!--我的问诊、处方、药品订单、讲师、测评-->
    <mineNav/>
    <!--下面列表-->
    <mineListWrapper v-for="(item,index) in title" @click.native="item.checkEvent" :titleText="item.text"
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
            checkEvent: () => {
              this.common.isLogin(this, '/cart')
            }
          },
          {
            text: "患者信息",
            checkEvent: () => {
              this.common.isLogin(this, '/patientInformation')
            }
          },
          {
            text: "设置",
            checkEvent: () => {
              this.$router.push('/setting')
            }
          },
          {
            text: "用户反馈",
            checkEvent: () => {
              
            }
          },
        ],
        mineInfo: "",
        isLogin: false,
      }
    },
    components: {
      mineHeader,
      mineNav,
      mineListWrapper,
      dxUnderState
    },
    created() {
      let token = this.common.getCookie('token');
      this.$axios.all([this.$axios.get("http://121.199.63.71:9006/own_page/?token=" + token),
        this.$axios.get('http://121.199.63.71:9006/img_url/?token=' + token)
      ]).then(this.$axios.spread((userResp, reposResp) => {
        if (userResp.data.code === 200) {
          this.newVue.$emit('mineInfo', userResp.data.data);
          this.newVue.$emit('urlPhoto', reposResp.data);
        }
      }));
    }

  }
</script>

<style src="../assets/css/mine.css"></style>
