<template>
  <div class="departDetails">
    <!-- 顶部-->
    <dxHeaderReturn :headerReturnTitle="headerMessage">
      <dxHeaderIconWrap/>
    </dxHeaderReturn>
    <div class="depart" v-if="isShowDiv">
      <!-- 搜索框-->
      <Search :place="place"></Search>
      <!-- 疾病种类-->
      <IlinessClassifyModule :classifyHtml="classifyHtml"></IlinessClassifyModule>
      <!-- 医生列表-->
      <div class="doctorList">
        <PullDownSelect @info="send" @city="citySelct"></PullDownSelect>
        <DoctorMessage :isShowHospital="isShowHospital" :doctorMessages="doctorMessages"></DoctorMessage>
        <div class="sorryDiv" v-if="isShowSorryDiv">
          <h3>暂无医生数据</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIconWrap from "../components/public/dxHeaderIconWrap"
  import Search from "../components/askDoctor/askDoctorPage/search"
  import IlinessClassifyModule from "../components/departDetails/departModule/illnessClassifyModule"
  import PullDownSelect from "../components/departDetails/departModule/pullDownSelect"
  import DoctorMessage from "../components/departDetails/page/doctorMessage"

  export default {
    name: "departDetails",
    components: {
      dxHeaderReturn,
      Search,
      IlinessClassifyModule,
      PullDownSelect,
      DoctorMessage, dxHeaderIconWrap
    },

    data() {
      return {
        headerMessage: {
          title: "",
          show: false,
          isStartImg: false
        },
        isShowHospital: {
          showHeader: false,
          isShowAskDiv: true
        },
        isShowDiv: false,
        place: {
          placeholderMessage: "症状、疾病、医院、科室、医生名",
          icon: require("../assets/images/askdoctor/ic_search_after.png")
        },
        classifyHtml: [
          {
            bg: require("../assets/images/askdoctor/classify_bg1.png"),
            title: "痤疮类",
            headerImg: require("../assets/images/askdoctor/doctorHead_01.png")
          },
          {
            bg: require("../assets/images/askdoctor/classify_bg1.png"),
            title: "湿疹类",
            headerImg: require("../assets/images/askdoctor/doctorHead_02.png")
          },
          {
            bg: require("../assets/images/askdoctor/classify_bg2.png"),
            title: "过敏类",
            headerImg: require("../assets/images/askdoctor/doctorHead_03.png")
          },
          {
            bg: require("../assets/images/askdoctor/classify_bg2.png"),
            title: "脱发类",
            headerImg: require("../assets/images/askdoctor/doctorHead_04.png")
          }
        ],
        doctorMessages: [],
        isShowSorryDiv: false
      }
    },
    created() {
      this.headerMessage.title = this.$route.query.name;
      this.$store.dispatch("GetInfo", true);
      this.$axios.get("http://121.199.63.71:9006/ask_doctor/" + this.$route.query.id).then(data => {
        if (data.data.code === 200) {
          this.isShowDiv = true;
          this.$store.dispatch("GetInfo", false);
          this.doctorMessages = data.data.doct_data;
          console.log(this.doctorMessages)
        }
      })
    },
    methods: {
      send(val) {
        this.$axios.get("http://121.199.63.71:9006/socket_doc/?value=" + val + "&depid=" + this.$route.query.id).then((data) => {
          this.doctorMessages = data.data.data
        })
      },
      citySelct(cityVal) {
        this.$axios.get("http://121.199.63.71:9006/area_find/?area=" + cityVal).then((data) => {
          this.doctorMessages = data.data.data[0].doctors;
          if (data.data.data === "暂无数据") {
            this.isShowSorryDiv = true;
            console.log(this.isShowSorryDiv)
          } else {
            this.isShowSorryDiv = false;
            console.log(this.isShowSorryDiv)
          }
        })
      }
    }
  }
</script>
<style src="../assets/css/departDetails.css"></style>
