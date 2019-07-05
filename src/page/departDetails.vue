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
        <PullDownSelect></PullDownSelect>
        <DoctorMessage :doctorMessages="doctorMessages"></DoctorMessage>
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
        doctorMessages: []
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
        }
      })
    },
  }
</script>
<style src="../assets/css/departDetails.css"></style>
