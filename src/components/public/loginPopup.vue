<template>
  <!--登录弹出层-->
  <van-popup
    v-model="$store.state.loginPopups"
    :close-on-click-overlay="false"
  >
    <div class="loginPopupsWrapper">
      <div class="loginPopupsTitle">
        <h2>需要登录</h2>
      </div>
      <div class="loginPopupsContent">
        <p class="loginExplain">登录后才可以进行操作</p>
        <div class="watch">
          <div class="watchPicWrapper">
            <img class="imgAuto" src="../../assets/img/mine/sso_prompt_weixin.png" alt="">
          </div>
          微信 一键快速登录
        </div>
        <p @click="goLogin()" class="loginText">其他方式登录</p>
        <p class="loginText callOff" @click="callOfLogin()">取消</p>
      </div>
    </div>
  </van-popup>
</template>

<script>
  import {Popup} from 'vant'

  export default {
    name: "loginPopup",
    data() {
      return {
        IsShow: false
      }
    },
    components: {
      "van-popup": Popup
    },
    props: ['popupIsShow'],
    methods: {
      callOfLogin() {
        this.$store.dispatch("isLoginPopup", false);
      },
      goLogin() {
        this.callOfLogin();
        this.$router.push('login')
      }
    }
  }
</script>

<style scoped>
  /**
  loginPopups start
   */
  .loginPopupsWrapper {
    width: 637px;

    overflow: hidden;
  }

  .loginPopupsTitle {
    height: 100px;
    text-align: center;
    border-bottom: 1px solid #ebebeb;
  }

  .loginPopupsTitle h2 {
    font-size: 32px;
    line-height: 100px;
  }

  .van-popup {
    border-radius: 10px;
  }

  .loginPopupsContent {
    padding: 64px 40px 78px;
  }

  .loginExplain {
    text-align: center;
    color: #999999;
  }

  .watch {
    display: flex;
    align-items: center;
    font-size: 32px;
    line-height: 100px;
    background: #28b7a3;
    border-radius: 10px;
    color: #ffffff;
    justify-content: center;
    margin: 60px 0 80px;
  }

  .watchPicWrapper {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }

  .loginText {
    color: #28b7a3;
    font-size: 32px;
    line-height: 1;
    text-align: center;
  }

  .callOff {
    margin-top: 100px;
  }

</style>
