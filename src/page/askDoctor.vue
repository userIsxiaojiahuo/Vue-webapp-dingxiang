<template>
<<<<<<< HEAD
    <div class="askDoctor">
        <!-- 顶部组件-->
        <AskDoctorHeader :headerReturnTitle="headerMessage"></AskDoctorHeader>
        <!-- 搜索框-->
        <div class="posFixed">
            <Search :place="place"></Search>
            <!-- 放心问-->
            <AskDoctorControl :controlImg="controlImg"></AskDoctorControl>
            <!-- 名医-->
            <AskDoctorFamous :famousRouter="famousRouter"></AskDoctorFamous>
            <!-- 科类-->
            <AskDoctorAdinOffice
                    :officeMessage="askDoctorMessage.officeMessage"
            >

            </AskDoctorAdinOffice>

        </div>
=======
  <div class="askDoctor">
    <!-- 顶部组件-->
    <AskDoctorHeader :headerReturnTitle="headerMessage"></AskDoctorHeader>
    <!-- 搜索框-->
    <div class="posFixed">
      <Search :place="place"></Search>
      <!-- 放心问-->
      <AskDoctorControl :controlImg="controlImg"></AskDoctorControl>
      <!-- 名医-->
      <AskDoctorFamous :famousRouter="famousRouter"></AskDoctorFamous>
      <!-- 科类-->
      <AskDoctorAdinOffice :officeMessage="askDoctorMessage.officeMessage">
      </AskDoctorAdinOffice>
>>>>>>> f99337fa1de7787d77837350c180b99687abac26
    </div>
  </div>
</template>

<script>
  import AskDoctorHeader from "../components/public/dxHeaderReturn"
  import Search from "../components/askDoctor/askDoctorPage/search"
  import AskDoctorControl from "../components/askDoctor/askDoctorPage/askDoctorControl"
  import AskDoctorFamous from "../components/askDoctor/askDoctorFamous"
  import AskDoctorAdinOffice from "../components/askDoctor/askDocutorAdinOffic"

  export default {
    name: "AskDoctor",
    components: {
      AskDoctorHeader,
      Search,
      AskDoctorControl,
      AskDoctorFamous,
      AskDoctorAdinOffice
    },
    data() {
      return {
        askDoctorMessage: {
          officeMessage: []
        },
<<<<<<< HEAD
        data() {
            return {
                askDoctorMessage: {
                    officeMessage: []
                },
                // 顶部信息
                headerMessage: {
                    title: "问医生",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: false,
                    isStartImg: false
                },
                // 搜索框信息
                place: {
                    placeholderMessage: "症状、疾病、医院、科室、医生名",
                    icon: require("../assets/images/askdoctor/ic_search_after.png")
                },
                // 放心问
                controlImg: require("../assets/images/askdoctor/im_free_ask.png"),
                // 名医
                famousRouter: [
                    {
                        imgs: require("../assets/images/askdoctor/ic_inquisition_one.png"),
                        title: "1元问名医",
                        textHtml: "名额有限  先到先得",
                        flag: true,
                        path:"/Diagonse",
                    },
                    {
                        imgs: require("../assets/images/askdoctor/ic_inquisition_word.png"),
                        title: "快速问医生",
                        textHtml: "无需选科  自动匹配",
                        flag: false,
                        path:"/conPic",
                    }
                ],
            }
        },
        mounted() {
            this.$axios.get("http://121.199.63.71:9006/ask_doctor/").then(data => {
                this.askDoctorMessage.officeMessage = data.data.ofc_data
            })
        }
=======
        // 顶部信息
        headerMessage: {
          title: "问医生"
        },
        // 搜索框信息
        place: {
          placeholderMessage: "症状、疾病、医院、科室、医生名",
          icon: require("../assets/images/askdoctor/ic_search_after.png")
        },
        // 放心问
        controlImg: require("../assets/images/askdoctor/im_free_ask.png"),

        // 名医
        famousRouter: [
          {
            imgs: require("../assets/images/askdoctor/ic_inquisition_one.png"),
            title: "1元问名医",
            textHtml: "名额有限  先到先得",
            flag: true
          },
          {
            imgs: require("../assets/images/askdoctor/ic_inquisition_word.png"),
            title: "快速问医生",
            textHtml: "无需选科  自动匹配",
            flag: false
          }
        ],
      }
    },
    mounted() {
      this.$axios.get("http://121.199.63.71:9006/ask_doctor/").then(data => {
        this.askDoctorMessage.officeMessage = data.data.ofc_data;
        console.log(data)
      })
>>>>>>> f99337fa1de7787d77837350c180b99687abac26
    }
  }
</script>
<style src="../assets/css/askDoctor.css"></style>

