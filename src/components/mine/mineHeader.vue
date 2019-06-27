<template>
  <div class="mineHeader">
    <!--用户登录注册-->
    <div class="loginOrRegister">
      <div class="intoRegister" @click="isLogin()">
        <div class="userPortrait">
          <img class="imgAuto" src="../../assets/img/mine/ic_male.png" alt="">
        </div>
        <div class="loginWrapper">
          <h1>登录/注册</h1>
        </div>
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
    <!--登录弹出层-->
    <loginPopup :popupIsShow="show" v-on:changeShow="showState"/>
  </div>
</template>

<script>
  /**
   * 我的页面-头部
   */
  import dxMessage from '../public/dxMessage'
  import loginPopup from '../public/loginPopup'

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
        ],
        show: false
      }
    },
    components: {
      dxMessage, loginPopup

    },
    methods: {
      isLogin() {
        this.show = true;
      },
      showState(val) {
        this.show = val
      }
    }
  }
</script>
