<template>
    <div class="doctorInfo">
        <DoctorInfoHeader :headerMessage="headerMessage"></DoctorInfoHeader>
        <div class="infoContent">
            <DoctorVideo :doctorVideoImg="doctorVideoImg"></DoctorVideo>
            <DoctorInfoMessage :doctorMessage="doctorMessage"></DoctorInfoMessage>
            <ExperienceStati :doctorMessage="doctorMessage"></ExperienceStati>
            <MainBusiness :doctorMessage="doctorMessage"></MainBusiness>
            <AskDoctorsWay :doctorMessage="doctorMessage"></AskDoctorsWay>
            <HotConsult :hotQuertions="hotQuertions"></HotConsult>
            <PatientEstimate :hotQuertions="patientEsit"></PatientEstimate>
            <SafetySings></SafetySings>
        </div>
        <DoctorInfoFooter :doctorMessage="doctorMessage"></DoctorInfoFooter>
    </div>
</template>

<script>
    import DoctorInfoHeader from "../components/doctorInfo/doctorInfoHeader"
    import DoctorVideo from "../components/doctorInfo/doctorVideo"
    import DoctorInfoMessage from "../components/doctorInfo/doctorInfoMessage"
    import ExperienceStati from "../components/doctorResume/experienceStati"
    import MainBusiness from "../components/doctorInfo/mainBusiness"
    import AskDoctorsWay from "../components/doctorInfo/askDoctorsWay"
    import HotConsult from "../components/doctorInfo/hotConsult"
    import PatientEstimate from "../components/doctorInfo/patientEstimate"
    import SafetySings from "../components/doctorInfo/safetySigns"
    import DoctorInfoFooter from "../components/doctorInfo/doctorInfoFooter"

    export default {
        name: "doctorInfo",
        components: {
            DoctorInfoHeader,
            DoctorVideo,
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
                doctorMessage: {
                    name: "曾梅华",
                    recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png"),
                    department: "皮肤性病科",
                    rank: "主治医师",
                    hospitalClass: "三甲",
                    hospitalAddress: "南京军区南京总医院",
                    headerImg: require("../assets/images/askdoctor/doctors/doctors_1.png"),
                    isRecommend: true,
                    isCurriculumVitae: true,
                    isAttention: true,
                    years: "8",
                    monthNum: "457",
                    starLevel: "5.0",
                    upTime: "12",
                    isPrescription: true,
                    imgPrice: "79",
                    phonePrice: "88",
                },
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
                            },
                            {
                                isHeader: true,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: false,
                                userName: "匿名用户8391",
                                questionText: "性别:女，年龄:29医生您好，我5天前开始全身长包(如图)，不疼不痒，集中在背部，腹部，大腿内侧根部，还有四肢。之前吃了抗过敏的药没有明显好转，部分包涂抹复方酮康唑软膏，没有太大作用。今天屁股又长了少量新包，有痒感。我没有皮肤过敏史，这次不知道是什么状况，这么长时间也没有消退，望医生能帮忙看看！感谢！",
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
                            },
                            {
                                isHeader: false,
                                userHeaderImg: require("../assets/images/askdoctor/doctorInfo/ic_male.webp"),
                                classImg: require("../assets/images/askdoctor/doctorInfo/score_star.png"),
                                isClassImg: true,
                                userName: "匿名用户8391",
                                questionText: "态度好，回复热情详细，感谢医生的专业解答！",
                            }
                        ],
                        quaternionsNum: 100,
                        isShow: false,
                        displayNone: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .doctorInfo {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .infoContent {
        flex: 1;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>