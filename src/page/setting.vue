<template>
  <div class="setBox">
    <dxHeaderReturn :headerReturnTitle="headerTitle"/>
    <!--大循环-->
    <div class="contentWrapper" v-if="isLogin">
      <SetContent :titMsg="items" v-for="(items,index) in titMsg" :key="index" @click.native="showPopup(index)"
                  ref="buttonSex">
        <!--插槽 头像-->
        <template v-slot:photoPic>
          <div class="photoWrapper" v-if="items.img">
            <img class="imgAuto" :src="userPhoto" v-if="isLogin">
            <img class="imgAuto" src="../assets/img/mine/s_icon_avatar_none.png" v-if="!isLogin">
          </div>
        </template>
      </SetContent>
      <van-popup v-model="showOne" :style="{height: '17%',width:'85%',borderRadius:'3px'}">
        <div class="names">拍照</div>
        <div class="names">上传图片</div>
      </van-popup>
      <van-popup v-model="showTwo" :style="{height: '17%',width:'85%',borderRadius:'3px'}" @click="selectPhotoPic">
        <div class="names" v-for="(item,index) in sex" :key="index">{{item}}</div>
      </van-popup>
    </div>
    <SetContent v-if="!isLogin" :titMsg="loginInfo" class="loginBtn" @click.native="toLogin"></SetContent>
    <div class="contentWrapper">
      <SetContent :titMsg="items" v-for="(items,index) in titMsgg" :key="index"/>
    </div>
    <!--    退出登录-->
    <SetQuit @click.native="steQuit"/>
  </div>
</template>
<script>
  // 顶部
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import SetContent from "../components/setting/setContent"
  import SetQuit from "../components/setting/setQuit"
  import {Popup} from 'vant';

  export default {
    name: "Setting",
    components: {
      dxHeaderReturn,
      SetContent,
      SetQuit,
      "van-popup": Popup
    },
    data() {
      return {
        // 头部
        showOne: false,
        showTwo: false,
        headerTitle: {
          title: "设置"
        },
        loginInfo: {
          name: "立即登录",
          img: require("../assets/img/public/start_active.png"),
          path: "",
        },
        titMsg: [
          {
            name: "头像",
            img: require("../assets/img/public/start_active.png"),
            path: "",
          },
          {
            name: "昵称",
            tit: "未设置",
            path: "/setAmendname/",
          },
          {
            name: "性别",
            tit: "未设置",
            path: "",
            event: this.showPopup
          },
          {
            name: "我的身份",
            tit: "未设置",
            path: "/setIdentity",
          },
          {
            name: "我的手机号",
            tit: "未绑定",
            path: "/phoneNumber",
          },
          {
            name: "微信",
            tit: "未绑定",
            path: "",
          }
        ],
        sex: ["男", "女"],
        titMsgg: [
          {
            name: "检查更新",
            path: '',
            event: () => {
            }
          },
          {
            name: "推荐给朋友",
            path: '/setRecommend',
            event: () => {
            }
          },
          {
            name: "关于我们",
            path: '/setAbout',
            event: () => {
            }
          },
        ],
        setInfo: [],
        userPhoto: "",
        isLogin: false
      }
    },
    methods: {
      //弹出框
      showPopup(index) {
        if (index === 0) {
          this.showOne = true
        } else if (index === 2) {
          this.showTwo = true
        } else {
          this.$router.push({
            path: this.titMsg[index].path,
            query: {
              userinfo: this.titMsg[index].tit
            }
          })
        }
      },
      selectPhotoPic(event) {
        let evt = event || window.event;
        let tar = evt.target || evt.srcElement;
        this.titMsg[2].tit = tar.innerHTML;
        this.showTwo = false

      },
      steQuit() {
        this.$dialog.confirm({
          message: '确认要退出当前用户'
        }).then(() => {
          this.common.removeCookie('token');
          this.$router.push('/login')
        }).catch(() => {
          // on cancel
        });
      },
      toLogin() {
        this.$store.dispatch("isLoginPopup", true);
      }
    },
    created() {
      if (this.common.getCookie('token')) {
        this.isLogin = true;
      } else {
        this.isLogin = false
      }
      let token = this.common.getCookie('token');
      this.$axios.all([this.$axios.get("http://121.199.63.71:9006/my_setting/?token=" + token),
        this.$axios.get('http://121.199.63.71:9006/img_url/?token=' + token)
      ]).then(this.$axios.spread((userResp, reposResp) => {
        if (userResp.data.code === 200 && userResp.data.data[0]) {
          this.userPhoto = reposResp.data.url;
          this.titMsg[1].tit = userResp.data.data[0].nick_name;
          this.titMsg[4].tit = userResp.data.data[0].phone;
        }
      }));
    }
  }
</script>

<style scoped>
  .setBox {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }

  .contentWrapper {
    margin-top: 20px;
  }

  .names {
    font-size: 30px;
    color: #757575;
    margin-left: 30px;
    line-height: 112px;
  }

  .photoWrapper {
    height: 80%;
    width: 80px;
    border-radius: 50%;
    overflow: hidden;
  }

  /deep/ .loginBtn span {
    color: green !important;
  }

  .loginBtn {
    margin-top: 20px;
  }
</style>
