<template>
    <div class="resume">
        <DoctorResumeHead :headerMessage="headerMessage"></DoctorResumeHead>
        <div class="resumeContent">
            <DoctorInfoMessage :doctorMessage="doctorMessage"></DoctorInfoMessage>
            <ResumePageModule :resumeHtml="resumeHtml"></ResumePageModule>
            <HospitalMessage :hospitalMess="hospitalMess"></HospitalMessage>
            <ResumeFooter></ResumeFooter>
        </div>
    </div>
</template>

<script>
    import DoctorResumeHead from "../components/doctorResume/doctorResumeHead"
    import DoctorInfoMessage from "../components/doctorInfo/doctorInfoMessage"
    import ResumePageModule from "../components/doctorResume/resumePageModule"
    import HospitalMessage from "../components/doctorResume/hospitalMessage"
    import ResumeFooter from "../components/doctorResume/resumeFooter"

    export default {
        name: "doctorResume",
        components: {
            DoctorResumeHead,
            DoctorInfoMessage,
            ResumePageModule,
            HospitalMessage,
            ResumeFooter
        },
        data() {
            return {
                headerMessage: {
                    title: "医生履历",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: false
                },
                doctorMessage: {
                    name: "曾梅华",
                    recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png"),
                    department: "皮肤性病科",
                    rank: "主治医师",
                    hospitalClass: "三甲",
                    hospitalAddress: "南京军区南京总医院",
                    headerImg: require("../assets/images/askdoctor/doctors/doctors_1.png"),
                    isRecommend: true,
                    isCurriculumVitae: false,
                    isAttention: false,
                    years: "8",
                    monthNum: "457",
                    starLevel: "5.0",
                    upTime: "12",
                    isPrescription: false,
                    imgPrice: "79",
                    phonePrice: "88",
                },
                resumeHtml: [
                    {
                        title: "个人简介",
                        text: "北京大学皮肤性病学博士。美国密歇根大学皮肤性病科访问学者。擅长银屑病，皮肤肿瘤，痤疮，湿疹，儿童常见皮肤病及美容咨询。"
                    },
                    {
                        title: "擅长方向",
                        text: "色素痣、小儿湿疹、湿疹、银屑病、荨麻疹、胎记、皮肤瘙痒、痤疮、肿瘤、激光美容"
                    }
                ],
                hospitalMess: [
                    {
                        name: "北京大学第一医院",
                        logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_hospital_name.png"),
                        liList: [
                            "全国医院排名前十",
                            "三甲医院",
                            "医保"
                        ],
                        phone: "",
                        isShowPhone: false,
                        isShowList: true,
                        path: "/hospitalMessage",
                        isClassName: false,
                        isLogo:true
                    },
                    {
                        name: "联系电话（总机）",
                        logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_tel.png"),
                        liList: [],
                        phone: "010-83572211",
                        isShowPhone: true,
                        isShowList: false,
                        path: "",
                        isLogo:true
                    },
                    {
                        name: "北京市西城区西什库大街8号",
                        logoImg: require("../assets/images/askdoctor/hospitalInfo/ic_position.png"),
                        liList: [],
                        phone: "",
                        isShowPhone: false,
                        isShowList: false,
                        path: "",
                        isLogo:true
                    }
                ]
            }
        }
    }
</script>

<style src="../assets/css/doctorResume.css"></style>
<style scoped>

</style>