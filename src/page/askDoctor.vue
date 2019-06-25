<template>
    <div class="askDoctor">
        <!-- 顶部组件-->
        <AskDoctorHeader :headerMessage="headerMessage"></AskDoctorHeader>
        <!-- 搜索框-->
        <div class="posFixed">
            <Search :place="place"></Search>
            <!-- 放心问-->
            <AskDoctorControl :controlImg="controlImg"></AskDoctorControl>
            <!-- 名医-->
            <AskDoctorFamous :famousRouter="famousRouter"></AskDoctorFamous>
            <!-- 科类-->
            <AskDoctorAdinOffice :officeMessage="officeMessage">
            </AskDoctorAdinOffice>
        </div>
    </div>
</template>

<script>
    import AskDoctorHeader from "../components/askDoctorTop"
    import Search from "../components/search"
    import AskDoctorControl from "../components/askDoctorControl"
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
                // 顶部信息
                headerMessage: {
                    title: "问医生",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: false
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

                //科类信息

                officeMessage: [
                    {
                        title: "常见科室",
                        classify: [
                            {
                                name: "皮肤性病科",
                                img: require("../assets/images/askdoctor/ic_hand.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "儿科",
                                img: require("../assets/images/askdoctor/ic_body.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "妇产科",
                                img: require("../assets/images/askdoctor/ic_mom.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "泌尿外科",
                                img: require("../assets/images/askdoctor/ic_liver.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "骨科",
                                img: require("../assets/images/askdoctor/ic_skeleton.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "消化内科",
                                img: require("../assets/images/askdoctor/ic_wei.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "口腔科",
                                img: require("../assets/images/askdoctor/ic_tooth.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "耳鼻咽喉科",
                                img: require("../assets/images/askdoctor/ic_nose.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                            {
                                name: "眼科",
                                img: require("../assets/images/askdoctor/ic_eye.png"),
                                show: true,
                                pDom: "topNameStyle"
                            },
                        ]
                    },
                    {
                        title: "内科",
                        classify: [
                            {
                                name: "内分泌科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "心血管内科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "神经内科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "肾脏内科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "呼吸内科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "普通内科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "风湿免疫科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "血液科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "感染科  传染科",
                                show: false,
                                pDom: "nameStyle"
                            }
                        ]
                    },
                    {
                        title: "外科",
                        classify: [
                            {
                                name: "神经外科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "心胸外科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "肝胆胰腺外科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "甲状腺乳腺外科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "普外科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "美容整形科",
                                show: false,
                                pDom: "nameStyle"
                            }
                        ]
                    },
                    {
                        title: "其他",
                        classify: [
                            {
                                name: "全科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "精神心理科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "肿瘤科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "影像检验科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "疼痛科  麻醉科",
                                show: false,
                                pDom: "nameStyle"
                            },
                            {
                                name: "药剂科",
                                show: false,
                                pDom: "nameStyle"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>

<style scoped>
    .askDoctor {
        background: white;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .posFixed {
        flex: 1;
        overflow-y: scroll;
    }
</style>