<template>
  <div class="mineHeader">
    <!--用户登录注册-->
    <div class="loginOrRegister">
      <div class="intoRegister" @click="loginEvent">
        <div class="userPortrait">
          <img class="imgAuto" src="../../assets/img/mine/ic_male.png" alt="" v-if="!show">
          <img class="imgAuto" :src="userData" alt="" v-if="show">
        </div>
        <div class="loginWrapper">
          <h1 v-if="!show">登录/注册</h1>
          <h1 v-if="show">{{username}}</h1>
        </div>
      </div>
    </div>
    <!--用户信息-->
    <div class="userInfo">
      <div @click="item.checkEvent" class="userInfoItem" v-for="(item,index) in userInfo" :key="index">
        <div class="userItem infoNumber">{{item.cont}}</div>
        <div class="userItem infoTitle">{{item.title}}</div>
      </div>
    </div>
    <!--通知组件-->
    <dxMessage class="mineDxMsg"/>
    <!--登录弹出层-->
  </div>
</template>

<script>
  /**
   * 我的页面-头部
   */
  import dxMessage from '../public/dxMessage'

  export default {
    name: "mineHeader",
    data() {
      return {
        userInfo: [
          {
            cont: 0,
            title: "关注医生",
            checkEvent: () => {
              this.common.isLogin(this, "/myAttention")
            }
          },
          {
            cont: 0,
            title: "医生卡",
            path: "",
            checkEvent: () => {
              this.common.isLogin(this, "/myAttention")
            }
          },
          {
            cont: 0,
            title: "钱包余额",
            checkEvent: () => {
              this.common.isLogin(this)
            }
          },
          {
            cont: 0,
            title: "收藏内容",
            checkEvent: () => {
              this.common.isLogin(this, "/myCollect")
            }
          }
        ],
        show: false,
        userData: '',
        username: ''
      }
    },
    components: {
      dxMessage

    },
    methods: {
      showState(val) {
        this.show = val
      },
      loginEvent() {
        this.common.isLogin(this, '/setting')
      }
    },
    created() {
      this.newVue.$on('mineInfo', (val) => {
        val ? this.show = true : this.show = false;
        this.userInfo[0].cont = val.focus_doctor;
        this.userInfo[2].cont = val.balance;
        this.userInfo[3].cont = val.collect_content;
        this.username = val.nick_name;
        this.common.setCookie('userMoney', val.balance)
      });
      this.newVue.$on('urlPhoto', (val) => {
        this.userData = val.url;
      })
    }
  }
</script>
