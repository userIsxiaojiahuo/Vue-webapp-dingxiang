<template>
    <div class="hospitalModule">
        <dxHeaderReturn :headerReturnTitle="headerMessage">
            <dxHeaderIconWrap/>
        </dxHeaderReturn>
        <div class="hospitalContent">
            <div class="hospitalMessageTitle">
                <MessageList :isShowHospital="isShowHospital" :hospitalMess="hospitalMess"></MessageList>
            </div>
            <div class="hospitalMessList">
                <HospitalDoctorList
                        :isShowHospital="isShowHospital"
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
    import HospitalDoctorList from "../components/hospitalMessage/hospitalDoctorList"
    import RegistrationMode from "../components/hospitalMessage/registrationMode"

    export default {
        name: "hospitalMessage",
        components: {
            MessageList,
            ResumePageModule,
            HospitalDoctorList,
            RegistrationMode,
            dxHeaderReturn,
            dxHeaderIconWrap
        },
        data() {
            return {
                hospitalDoctors: 0,
                headerMessage: {
                    title: "医院详情",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: true,
                    isStartImg: true
                },
                isShowHospital: {
                    showHeader: false,
                    isShowAskDiv: false
                },
                hospitalMess: {},
                doctorMessages: [],
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
        },
        created() {
            this.$store.dispatch("GetInfo", true);
            let url = "http://121.199.63.71:9006/hospital_detail/" + this.$route.query.id
            this.$axios.get(url).then((data) => {
                if (data.data.code === 200) {
                    this.$store.dispatch("GetInfo", false);
                    console.log(data);
                    this.hospitalMess = data.data.hosp.hosp;
                    this.doctorMessages = data.data.hosp.doctors;
                    this.hospitalDoctors = this.doctorMessages.length
                }
            })
        }
    }
</script>

<style src="../assets/css/hospitalMessage.css"></style>
