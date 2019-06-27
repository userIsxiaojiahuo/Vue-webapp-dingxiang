<template>
    <div>
        <AskDoctorTop :headerMessage="headerMessage"></AskDoctorTop>
        <div class="hospitalMessageTitle">
            <MessageList :hospitalMess="hospitalMess"></MessageList>
        </div>
        <ResumePageModule :resumeHtml="resumeHtml"></ResumePageModule>
    </div>
</template>

<script>
    import AskDoctorTop from "../components/askDoctor/askDoctorPage/askDoctorTop"
    import MessageList from "../components/doctorResume/resumePage/messageList"
    import ResumePageModule from "../components/doctorResume/resumePageModule"

    export default {
        name: "hospitalMessage",
        components: {
            AskDoctorTop,
            MessageList,
            ResumePageModule
        },
        data() {
            return {
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
            }
        }
    }
</script>

<style scoped>
    .hospitalMessageTitle {
        padding-left: 30px;
    }
</style>