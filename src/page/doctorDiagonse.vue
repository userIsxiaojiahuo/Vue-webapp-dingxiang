<template>
  <div class="doctorDiagonse">
    <dxHeaderReturn :headerReturnTitle="headerMessage"></dxHeaderReturn>
    <!--轮播图-->
    <diagonseListBanner :diagonseListBanner="diagnosePic"></diagonseListBanner>
    <!--每周提问-->
    <diagonseQuiz></diagonseQuiz>
    <!--科室分类-->
    <diagonseListDeparment :diagonseListDeparment="deparmentList"></diagonseListDeparment>
    <!--  医生介绍-->
    <diagonseIntroduce :diagonseIntroduce="doctorInfo"></diagonseIntroduce>
  </div>
</template>
<script>
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import diagonseListBanner from '../components/doctorDiagonse/diagonseListBanner'
  import diagonseQuiz from '../components/doctorDiagonse/diagonseQuiz'
  import diagonseListDeparment from '../components/doctorDiagonse/diagonseListDeparment'
  import diagonseIntroduce from '../components/doctorDiagonse/diagonseIntroduce'

  export default {
    name: "doctorDiagonse",
    components: {
      diagonseListBanner,
      diagonseQuiz,
      diagonseListDeparment,
      diagonseIntroduce,
      dxHeaderReturn
    },
    data() {
      return {
        headerMessage: {
          title: "名医义诊",
          ico: require("../assets/images/askdoctor/ic_titlebar_back.png"),
          show: false,
          isStartImg: false
        },
        diagnosePic: [require("../assets/diagonseImg/banner.png"), require("../assets/diagonseImg/banner.png")],
        deparmentList: ["皮肤性病科", "儿科", "妇产科", "泌尿外科", "骨科", "消化内科"],
        doctorInfo: [
          {
            doctorImg: require("../assets/diagonseImg/introduce01.png"),
            doctorIntroduce: {
              doctorName: "潘明孟",
              doctorJob: "主治医师",
            },
            hospitalAttr: {
              grade: "三甲",
              Desk: "皮肤科",
              hospitalName: "福建医科大学附属第二医院"
            },
            adept: "玫瑰痤疮、色素痣、雀斑、太田痣、血管、色素痣、雀斑",
            score: {
              grade: 4.9,
              answer: "331"
            },
            price: {
              current: 14,
              delPrice: 88,
              discount: "1.6折",
              surplus: 5
            },
            justNeed: 4
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .doctorDiagonse {
    width: 100%;
    height: 100%;
  }
</style>
