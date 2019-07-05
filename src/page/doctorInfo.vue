<template>
    <div class="doctorInfo">
        <dxHeaderReturn :headerReturnTitle="headerMessage">
            <dxHeaderIcon/>
        </dxHeaderReturn>
        <div class="infoContent" v-if="isShow">
            <DoctorInfoMessage :isShowDiv="isShowDiv" :doctorMessage="doctorMessage"></DoctorInfoMessage>
            <ExperienceStati :doctorMessage="doctorMessage"></ExperienceStati>
            <MainBusiness :doctorMessage="doctorMessage"></MainBusiness>
            <AskDoctorsWay :doctorMessage="doctorMessage"></AskDoctorsWay>
            <HotConsult :hotQuertions="hotQuertions"></HotConsult>
            <PatientEstimate :hotQuertions="patientEsit"></PatientEstimate>
            <SafetySings></SafetySings>
        </div>
        <DoctorInfoFooter v-if="isShow" :doctorMessage="doctorMessage"></DoctorInfoFooter>
    </div>
</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import dxHeaderIcon from "../components/public/dxAttentionBtn"
    import DoctorInfoMessage from "../components/doctorInfo/doctorInfoMessage"
    import ExperienceStati from "../components/doctorInfo/experienceStati"
    import MainBusiness from "../components/doctorInfo/mainBusiness"
    import AskDoctorsWay from "../components/doctorInfo/askDoctorsWay"
    import HotConsult from "../components/doctorInfo/hotConsult"
    import PatientEstimate from "../components/doctorInfo/patientEstimate"
    import SafetySings from "../components/doctorInfo/safetySigns"
    import DoctorInfoFooter from "../components/doctorInfo/doctorInfoFooter"

    export default {
        name: "doctorInfo",
        components: {
            dxHeaderReturn,
            dxHeaderIcon,
            DoctorInfoMessage,
            ExperienceStati,
            MainBusiness,
            AskDoctorsWay,
            HotConsult,
            PatientEstimate,
            SafetySings,
            DoctorInfoFooter
        },
        data() {
            return {
                headerMessage: {
                    title: "医生详情",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: true
                },
                doctorVideoImg: {
                    img: require("../assets/images/askdoctor/doctorInfo/doctor_video.png")
                },
                isShowDiv: {
                    isStarLevel: false,
                },
                isShow: false,
                hotQuertions: [
                    {
                        title: "热门咨询",
                        illnessKind: ["全部", "湿疹", "荨麻疹", "尖锐湿疣", "寻常疣", "传染性软疣", "婴儿湿疹"],
                        userQuestion: [
                            {
                                isHeader: true,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: false,
                                userName: "匿名用户8391",
                                questionText: "性别：女，年龄：29医生您好，我5天前开始全身长包（如图），不疼不痒，集中在背部，腹部，大腿内侧根部，还有四肢。之前吃了抗过敏的药没有明显好转，部分包涂抹复方酮康唑软膏，没有太大作用。今天屁股又长了少量新包，有痒感。我没有皮肤过敏史，这次不知道是什么状况，这么长时间也没有消退，望医生能帮忙看看！感谢！",
                                isShowClass: false,
                                isTime: true
                            },
                            {
                                isHeader: true,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: false,
                                userName: "匿名用户8391",
                                questionText: "性别:女，年龄:29医生您好，我5天前开始全身长包(如图)，不疼不痒，集中在背部，腹部，大腿内侧根部，还有四肢。之前吃了抗过敏的药没有明显好转，部分包涂抹复方酮康唑软膏，没有太大作用。今天屁股又长了少量新包，有痒感。我没有皮肤过敏史，这次不知道是什么状况，这么长时间也没有消退，望医生能帮忙看看！感谢！",
                                isShowClass: false,
                                isTime: true
                            }
                        ],
                        quaternionsNum: 100,
                        isShow: true,
                        displayNone: false
                    }
                ],
                patientEsit: [
                    {
                        title: "患者评价",
                        illnessKind: ["全部", "湿疹", "荨麻疹", "尖锐湿疣", "寻常疣", "传染性软疣", "婴儿湿疹"],
                        userQuestion: [
                            {
                                isHeader: false,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: true,
                                userName: "匿名用户8391",
                                questionText: "态度好，回复热情详细，感谢医生的专业解答！",
                                isShowClass: true,
                                isTime: true
                            },
                            {
                                isHeader: false,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: true,
                                userName: "匿名用户8391",
                                questionText: "态度好，回复热情详细，感谢医生的专业解答！",
                                isShowClass: true,
                                isTime: true
                            }
                        ],
                        quaternionsNum: 100,
                        isShow: false,
                        displayNone: true,
                        isHospital: false
                    }
                ],
                doctorMessage: {
                    doctorMess: {},
                    dep: "",
                    hospital: {},
                    consult: {}
                }
            }
        },
        created() {
            this.$store.dispatch("GetInfo", true);
            let url = "http://121.199.63.71:9006/ask_doctor/" + this.$route.query.id + "/resume";
            this.$axios.get(url).then(data => {
                console.log(data)
                if (data.data.code === 200) {
                    this.$store.dispatch("GetInfo", false);
                    this.isShow = true;
                    data.data.data.map((info, index) => {
                        if (index === 0) {
                            this.doctorMessage.doctorMess = info
                        } else if (index === 1) {
                            this.doctorMessage.dep = info
                        } else if (index === 2) {
                            this.doctorMessage.hospital = info
                        } else if (index === 3) {
                            this.doctorMessage.consult = info[0]
                        }
                    })
                }
            })
        }
    }
</script>

<style src="../assets/css/doctorInfo.css"></style>
