<template>
    <div class="departDetails">
        <!-- 顶部-->
        <AskDoctorTop :headerMessage="headerMessage"></AskDoctorTop>
        <div class="depart">
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
    import AskDoctorTop from "../components/askDoctor/askDoctorPage/askDoctorTop"
    import Search from "../components/askDoctor/askDoctorPage/search"
    import IlinessClassifyModule from "../components/departDetails/departModule/illnessClassifyModule"
    import PullDownSelect from "../components/departDetails/departModule/pullDownSelect"
    import DoctorMessage from "../components/departDetails/page/doctorMessage"

    export default {
        name: "departDetails",
        components: {
            AskDoctorTop,
            Search,
            IlinessClassifyModule,
            PullDownSelect,
            DoctorMessage
        },
        data() {
            return {
                headerMessage: {
                    title: "皮肤病科",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: true
                },
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
                        isAskImg: true,
                        isMonthRecipe: true,
                        isDesignation: true,
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
                        isAskImg: true,  // 是否又问医生
                        isMonthRecipe: true, // 是否开药方
                        isDesignation: true,// 是否是优秀医生
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
                        isAskImg: true,
                        isPhone: true,
                        isMonthRecipe: true,
                        isDesignation: true,
                        recommend: require("../assets/images/askdoctor/doctors/ic_list_translate.png")
                    }
                ]
            }
        }
    }
</script>
<style src="../assets/css/departDetails.css"></style>