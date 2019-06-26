<template>
  <div class="callEmergency">
    <!-- 顶部电话急诊-->

    <!-- 顶部图片-->
    <callEmergencyTopPic :callEmergencyTopPic="callPic"></callEmergencyTopPic>
    <!-- 选择科室-->
    <selectDeskTitle :selectDeskTitle="deskTitle">
      <selectDesk :selectDesk="deskList"></selectDesk>
    </selectDeskTitle>
    <!-- 病情描述-->
    <selectDeskTitle :selectDeskTitle="IllinessTitle">
      <IllinessInfo :placeholderText="placeholderText"></IllinessInfo>
    </selectDeskTitle>
    <!--    上传图片-->
    <conPicFooter></conPicFooter>
    <!--    下一步-->
    <callBottomBtn></callBottomBtn>
  </div>
</template>

<script>
  import selectDesk from '../components/callEmergency/selectDesk'
  import callEmergencyTopPic from '../components/callEmergency/callEmergencyTopPic'
  import selectDeskTitle from '../components/callEmergency/selectDeskTitle'
  import IllinessInfo from "../components/callEmergency/illinessInfo"
  import conPicFooter from "../components/callEmergency/conPicFooter"
  import callBottomBtn from "../components/callEmergency/callBottomBtn"

  export default {
    name: "callEmergency",
    components: {
      callEmergencyTopPic,
      selectDeskTitle,
      selectDesk,
      IllinessInfo,
      conPicFooter,
      callBottomBtn
    },
    data() {
      return {
        callPic: require("../assets/diagonseImg/emergencyPic.png"),
        deskTitle: '选择科室',
        deskList: [
          {
            deskTitle: '儿科',
            deskDes: '小儿发烧 腹泻'
          },
          {
            deskTitle: '妇产科 生殖中',
            deskDes: '阴道炎 痛经 怀孕'
          },
          {
            deskTitle: '皮肤性病科',
            deskDes: '皮肤过敏 痤疮'
          },
          {
            deskTitle: '消化内科',
            deskDes: '消化不良 腹泻'
          },
          {
            deskTitle: '精神心理科',
            deskDes: '焦虑 抑郁 失眠'
          },
          {
            deskTitle: '全部科室',
            deskDes: ''
          }
        ],
        IllinessTitle: '病情描述',
        placeholderText: '简要描述你的年龄、性别及症状，我们将为你接通对症的专科医生，并确保隐私安全'
      }
    }
  }
</script>

<style scoped>
  .callEmergency {
    width: 100%;
    height: 100%;
  }

</style>
