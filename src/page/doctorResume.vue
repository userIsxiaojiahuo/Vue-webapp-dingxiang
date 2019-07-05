<template>
    <div class="resume">
        <dxHeaderReturn :headerReturnTitle="headerMessage">
            <dxHeaderIconWrap/>
        </dxHeaderReturn>
        <div class="resumeContent">
            <DoctorResuMessage :doctorMessage="doctorMessage"></DoctorResuMessage>
            <ResumePageModule :doctorMessage="doctorMessage" :resumeHtml="resumeHtml"></ResumePageModule>
            <HospitalMessage :doctorMessage="doctorMessage.hospitalMess"></HospitalMessage>
            <ResumeFooter></ResumeFooter>
        </div>
    </div>
</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import dxHeaderIconWrap from "../components/public/dxHeaderIconWrap"
    import DoctorResuMessage from "../components/doctorResume/doctorResuMessage"
    import ResumePageModule from "../components/doctorResume/resumePageModule"
    import HospitalMessage from "../components/doctorResume/hospitalMessage"
    import ResumeFooter from "../components/doctorResume/resumeFooter"

    export default {
        name: "doctorResume",
        components: {
            DoctorResuMessage,
            ResumePageModule,
            HospitalMessage,
            ResumeFooter,
            dxHeaderIconWrap,
            dxHeaderReturn
        },
        data() {
            return {
                headerMessage: {
                    title: "医生履历",
                    icon: require("../assets/images/askdoctor/ic_titlebar_back.png"),
                    show: false
                },
                doctorMessage: {
                    doctorMess: {},
                    hospitalMess: {}
                },
                isShowDiv: {
                    isStarLevel: false,
                },
                resumeHtml: [
                    {
                        title: "擅长方向"
                    }
                ],
            }
        },
        created() {
            this.$store.dispatch("GetInfo", true);
            let url = "http://121.199.63.71:9006/ask_doctor/" + this.$route.query.id + "/detail";
            this.$axios.get(url).then(data => {
                if (data.data.code === 200) {
                    this.$store.dispatch("GetInfo", false);
                    this.doctorMessage = data.data.doc_detail;
                    this.doctorMessage.map((info, index) => {
                        this.resumeHtml[0].text = info.doc_resume;
                        if (index === 0) {
                            this.doctorMessage.doctorMess = info
                        } else if (index === 1) {
                            this.doctorMessage.hospitalMess = info;
                            console.log(this.doctorMessage.hospitalMess)
                        }
                    })
                }
            });
        }
    }
</script>

<style src="../assets/css/doctorResume.css"></style>
