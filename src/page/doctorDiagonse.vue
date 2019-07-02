<template>
  <div class="doctorDiagonse">
    <dxHeaderReturn urn :headerReturnTitle="headerMessage">
      <dxHeaderIcon/>
    </dxHeaderReturn>
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
  import dxHeaderIcon from "../components/public/dxAttentionBtn"
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
      dxHeaderReturn,
      dxHeaderIcon
    },
    data() {
      return {
        headerMessage: {
          title: "返回",
        },
        diagnosePic: [require("../assets/img/diagonseImg/banner.png"), require("../assets/img/diagonseImg/banner.png")],
        deparmentList: [],
        doctorInfo: []
        // doctorInfo: [
        //   {
        //     doctorImg: require("../assets/img/diagonseImg/introduce01.png"),
        //     doctorIntroduce: {
        //       doctorName: "潘明孟",
        //       doctorJob: "主治医师",
        //     },
        //     hospitalAttr: {
        //       grade: "三甲",
        //       Desk: "皮肤科",
        //       hospitalName: "福建医科大学附属第二医院"
        //     },
        //     adept: "玫瑰痤疮、色素痣、雀斑、太田痣、血管、色素痣、雀斑",
        //     score: {
        //       grade: 4.9,
        //       answer: "331"
        //     },
        //     price: {
        //       current: 14,
        //       delPrice: 88,
        //       discount: "1.6折",
        //       surplus: 5
        //     },
        //     justNeed: 4
        //   },
        //   {
        //     doctorImg: require("../assets/img/diagonseImg/introduce01.png"),
        //     doctorIntroduce: {
        //       doctorName: "潘明孟",
        //       doctorJob: "主治医师",
        //     },
        //     hospitalAttr: {
        //       grade: "三甲",
        //       Desk: "皮肤科",
        //       hospitalName: "福建医科大学附属第二医院"
        //     },
        //     adept: "玫瑰痤疮、色素痣、雀斑、太田痣、血管、色素痣、雀斑",
        //     score: {
        //       grade: 4.9,
        //       answer: "331"
        //     },
        //     price: {
        //       current: 14,
        //       delPrice: 88,
        //       discount: "1.6折",
        //       surplus: 5
        //     },
        //     justNeed: 4
        //   }
        // ]
      }
    },
    created() {
      this.$axios.get("http://121.199.63.71:9006/ask_doctor/12/").then((data) => {
        this.doctorInfo = data.data.doct_data;
        console.log(this.doctorInfo)
      })
    },
    mounted() {
      this.$axios.get("http://121.199.63.71:9006/ask_doctor").then((data) => {
        data.data.ofc_data.map((index) => {
          index.departments_info.map((item) => {
            this.deparmentList.push(item)
          })
        })
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .doctorDiagonse {
    width: 100%;
    height: 100%;
  }

  .doctorDiagonse::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
</style>
