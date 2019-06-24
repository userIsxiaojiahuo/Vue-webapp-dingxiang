<template>
  <div class="mineHeader">
    <!--用户登录注册-->
    <div class="loginOrRegister">
      <div class="userPortrait">
        <img class="imgAuto" src="../../../static/mine/img/ic_male.png" alt="">
      </div>
      <div class="loginWrapper">
        <h1>登录/注册</h1>
      </div>
    </div>
    <!--用户信息-->
    <div class="userInfo">
      <div class="userInfoItem" v-for="(item,index) in userInfo" :key="index">
        <div class="userItem infoNumber">{{item.cont}}</div>
        <div class="userItem infoTitle">{{item.title}}</div>
      </div>
    </div>
    <!--通知组件-->
    <dxMessage class="mineDxMsg"/>

  </div>
</template>

<script>
  /**
   * 我的页面-头部
   */
  import dxMessage from '../dxMessage'

  export default {
    name: "mineHeader",
    data() {
      return {
        userInfo: [
          {
            cont: 0,
            title: "关注医生"
          },
          {
            cont: 0,
            title: "医生卡"
          },
          {
            cont: 0,
            title: "优惠券"
          },
          {
            cont: 0,
            title: "收藏内容"
          }
        ]
      }
    },
    components: {
      dxMessage
    }
  }
</script>

<style scoped>

  .mineHeader {
    width: 100%;
    height: 376px;
    background: url('../../assets/mine/bg_me_background.png');
    padding: 90px 20px 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .loginOrRegister {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .userPortrait {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: inline-block;
    overflow: hidden;
    margin-right: 25px;
  }

  .loginWrapper {
    color: #333333;
    font-size: 20px;
  }

  .userInfo {
    height: 140px;
    display: flex;
  }

  .userInfoItem {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .userItem {
    width: 100%;
    text-align: center;
  }

  .infoNumber {
    font-size: 28px;
    font-weight: 600;
    color: #666666;
  }

  .infoTitle {
    font-size: 22px;
    color: #999999;
  }

  .mineDxMsg {
    position: absolute;
    right: 37px;

  }
</style>
