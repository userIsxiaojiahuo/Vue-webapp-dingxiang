<template>
    <div class="resume">
        <DoctorResumeHead :headerMessage="headerMessage"></DoctorResumeHead>
        <DoctorInfoMessage :doctorMessage="doctorMessage"></DoctorInfoMessage>
    </div>
</template>

<script>
    import DoctorResumeHead from "../components/doctorResume/doctorResumeHead"
    import DoctorInfoMessage from "../components/doctorInfo/doctorInfoMessage"

    export default {
        name: "doctorResume",
        components: {
            DoctorResumeHead,
            DoctorInfoMessage
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
                }
            }
        }
    }
</script>

<style scoped>

</style>