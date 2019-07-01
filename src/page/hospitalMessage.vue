<template>
  <div class="hospitalModule">
    <dxHeaderReturn :headerReturnTitle="headerMessage">
      <dxHeaderIconWrap/>
    </dxHeaderReturn>
    <div class="hospitalContent">
      <div class="hospitalMessageTitle">
        <MessageList :hospitalMess="hospitalMess"></MessageList>
      </div>
      <PatientEstimate :hotQuertions="patientEsit"></PatientEstimate>
      <div class="hospitalMessList">
        <HospitalDoctorList
          :doctorMessages="doctorMessages"
          :hospitalDoctors="hospitalDoctors"></HospitalDoctorList>
      </div>
      <div class="hospitalMessageTitleFooter">
        <RegistrationMode :modeText="modeText"></RegistrationMode>
      </div>
    </div>
  </div>
</template>

<script>
  import dxHeaderReturn from "../components/public/dxHeaderReturn"
  import dxHeaderIconWrap from "../components/public/dxHeaderIconWrap"
  import MessageList from "../components/doctorResume/resumePage/messageList"
  import ResumePageModule from "../components/doctorResume/resumePageModule"
  import PatientEstimate from "../components/doctorInfo/patientEstimate"
  import HospitalDoctorList from "../components/hospitalMessage/hospitalDoctorList"
  import RegistrationMode from "../components/hospitalMessage/registrationMode"

  export default {
    name: "hospitalMessage",
    components: {
      MessageList,
      ResumePageModule,
      PatientEstimate,
      HospitalDoctorList,
      RegistrationMode,
      dxHeaderReturn,
      dxHeaderIconWrap
    },
    data() {
      return {
        hospitalDoctors: 8,
        headerMessage: {
          title: "医院详情",
          icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
          show: true,
          isStartImg: true
        },
        hospitalMess: [
          {
            name: "北京大学第一医院",
            logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_hospital_name.png"),
            liList: [
              "三级甲等",
              "医保"
            ],
            phone: "",
            isShowPhone: false,
            isShowList: true,
            isClassName: true,
            isLogo: false
          },
          {
            name: "联系电话（总机）",
            logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_tel.png"),
            liList: [],
            phone: "010-83572211",
            isShowPhone: true,
            isShowList: false,
            isLogo: true
          },
          {
            name: "北京市西城区西什库大街8号",
            logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_position.png"),
            liList: [],
            phone: "",
            isShowPhone: false,
            isShowList: false,
            isLogo: true
          }
        ],
        resumeHtml: [
          {
            title: "医院介绍",
            text: "北京大学第一医院（简称“北大医院”）位于北京老皇城内，是距离中南海最近的医院，是一所融医疗、教学、科研、预防为一体的大型综合性三级甲等医院。"
          }
        ],
        patientEsit: [
          {
            title: "医院介绍",
            illnessKind: ["全部", "湿疹", "荨麻疹", "尖锐湿疣", "寻常疣", "传染性软疣", "婴儿湿疹"],
            userQuestion: [
              {
                isHeader: false,
                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                isClassImg: false,
                questionText: "北京大学第一医院（简称“北大医院”）位于北京老皇城内，是距离中南海最近的医院，是一所融医疗、教学、科研、预防为一体的大型综合性三级甲等医院。",
                isShowClass: true,
                isTime: false
              }
            ],
            quaternionsNum: 100,
            isShow: false,
            displayNone: false,
            isHospital: true
          }
        ],
        doctorMessages: [
          {
            name: "曾梅华",
            headerImg: require("../assets/images/askdoctor/doctors/doctors_1.png"),
            department: "皮肤性病科",
            rank: "主治医师",
            hospitalAddress: "南京军区南京总医院",
            beGoodAt: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣、性病、小儿湿疹、幼儿急疹、痤疮、足癣",
            starLevel: "5.0",
            monthNum: "457",
            monthRecipe: "270",
            upTime: "12",
            honor: "湿疹类",
            imgPrice: "79",
            phonePrice: "88",
            isAskImg: false,
            isPhone: true,
            isMonthRecipe: false,
            isDesignation: false,
            recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png")
          },
          {
            name: "曾梅华",
            headerImg: require("../assets/images/askdoctor/doctors/doctors_1.png"),
            department: "皮肤性病科",
            rank: "主治医师",
            hospitalAddress: "南京军区南京总医院",
            beGoodAt: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣、性病、小儿湿疹、幼儿急疹、痤疮、足癣",
            starLevel: "5.0",
            monthNum: "457",
            monthRecipe: "270",
            upTime: "12",
            honor: "湿疹类",
            imgPrice: "79",
            phonePrice: "88",
            isAskImg: false,
            isPhone: false,
            isMonthRecipe: false,
            isDesignation: false,
            recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png")
          },
          {
            name: "曾梅华",
            headerImg: require("../assets/images/askdoctor/doctors/doctors_1.png"),
            department: "皮肤性病科",
            rank: "主治医师",
            hospitalAddress: "南京军区南京总医院",
            beGoodAt: "荨麻疹、湿疹、尖锐湿疣、寻常疣、传染性软疣、性病、小儿湿疹、幼儿急疹、痤疮、足癣",
            starLevel: "5.0",
            monthNum: "457",
            monthRecipe: "270",
            upTime: "12",
            honor: "湿疹类",
            imgPrice: "79",
            phonePrice: "88",
            isAskImg: false,
            isPhone: true,
            isMonthRecipe: false,
            isDesignation: false,
            recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png")
          }
        ],
        modeText: [
          {
            icon: require("../assets/images/askdoctor/hospitalInfo/ic_browser.png"),
            title: "南京卫生局预约挂号服务平台",
            smallText: "浏览器打开"
          },
          {
            icon: require("../assets/images/askdoctor/hospitalInfo/ic_tel_grey.png"),
            title: "12580电话挂号: 拨打12580按6接通人工服务",
            smallText: "12580"
          }
        ]
      }
    }
  }
</script>

<style src="../assets/css/hospitalMessage.css"></style>
