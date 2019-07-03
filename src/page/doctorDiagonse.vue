<template>
  <div class="doctorDiagonse">
    <dxHeaderReturn urn :headerReturnTitle="headerMessage">
      <dxHeaderIcon/>
    </dxHeaderReturn>
    <!--轮播图-->
    <div class="showDiv" v-if="isShowDiv">
      <diagonseListBanner :diagonseListBanner="diagnosePic"></diagonseListBanner>
      <!--每周提问-->
      <diagonseQuiz></diagonseQuiz>
      <!--科室分类-->
      <diagonseListDeparment @doctorInfo="reception" :diagonseListDeparment="deparmentList"></diagonseListDeparment>
    </div>
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
        doctorInfo: [],
        isShowDiv: false,
      }
    },
    created() {
      // 显示加载动画
      this.$store.dispatch("GetInfo", true);
      this.$axios.get("http://121.199.63.71:9006/ask_doctor/1/").then((data) => {
        if (data.data.code === 200) {
          // 数据未返回之前，使其他页面隐藏/返回之后显示页面（true）
          this.isShowDiv = true;
          // 数据加载完成，隐藏加载动画
          this.$store.dispatch("GetInfo", false);
          this.doctorInfo = data.data.doct_data;
        }
      })
    },
    mounted() {
      // 显示加载动画
      this.$store.dispatch("GetInfo", true);
      this.$axios.get("http://121.199.63.71:9006/ask_doctor").then((data) => {
        if (data.data.code === 201) {
          this.isShowDiv = true;
          // 数据加载完成，隐藏加载动画
          this.$store.dispatch("GetInfo", false);
          // map循环拿数据
          data.data.ofc_data.map((index) => {
            index.departments_info.map((item) => {
              this.deparmentList.push(item)
            })
          })
        }
      })
    },
    methods: {
      // 接收子组件传过来的数据，赋值给医生信息数组
      reception(data) {
        this.doctorInfo = data
      }
    }
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
