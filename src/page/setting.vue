<template>
  <div class="setBox">
    <dxHeaderReturn headerReturnTitle="headerTitle"/>
    <div class="contentWrapper">
      <SetContent :titMsg="items" v-for="(items,index) in titMsg" :key="index">
        <template v-slot:photoPic>
          <div class="photoWrapper" v-if="items.img">
            <img class="imgAuto" :src="items.img">
          </div>
        </template>
      </SetContent>
    </div>
    <div class="contentWrapper">
      <SetContent :titMsg="items" v-for="(items,index) in titMsgg" :key="index"/>
    </div>
    <SetQuit/>
  </div>
</template>
<script>
  // 顶部
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import SetContent from "../components/setting/setContent"
  import SetQuit from "../components/setting/setQuit"

  export default {
    name: "Setting",
    components: {
      dxHeaderReturn,
      SetContent,
      SetQuit,
    },
    data() {
      return {
        // 头部
        headerTitle: {
          title: "设置"
        },
        titMsg: [
          {
            name: "头像",
            img: require("../assets/img/public/start_active.png"),
            event: () => {
            }
          },
          {
            name: "昵称",
            tit: "江花花",
            event: () => {
            }
          },
          {
            name: "性别",
            tit: "未设置",
            event: () => {
            }
          },
          {
            name: "我的身份",
            tit: "未设置",
            event: () => {
            }
          },
          {
            name: "我的手机号",
            tit: "12345665tgrg",
            event: () => {
            }
          },
          {
            name: "微信",
            tit: "已绑定",
            event: () => {
            }
          }
        ],
        titMsgg: [
          {
            name: "检查更新",
            path: '',
            event: () => {
            }
          },
          {
            name: "推荐给朋友",
            path: '',
            event: () => {
            }
          },
          {
            name: "关于我们",
            path: '',
            event: () => {
            }
          },
        ]
      }
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
</style>
