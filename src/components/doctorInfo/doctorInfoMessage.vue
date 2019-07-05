<template>
    <div class="messageCon">
        <div class="messageConLeft">
            <div class="messageLeftTop">
                <h3>{{doctorMessage.doctorMess.doc_name}}</h3>
                <i v-if="doctorMessage.doctorMess.is_recommend"></i>
            </div>
            <div class="occupation">
                <span class="occupationSpan">{{doctorMessage.dep.dep_name}}</span>
                <span class="occupationSpan rank">{{doctorMessage.doctorMess.doc_title}}</span>
            </div>
            <div class="hospitalClass">
                <span class="hospitalSpan" v-if="isShowDiv.isStarLevel">{{doctorMessage.hospital.hosp_level}}</span>
                <span class="occupationSpan hospitalAddress">{{doctorMessage.hospital.hosp_name}}</span>
            </div>
            <div class="CurriculumVitae"
                 @click="toDoctorResume(doctorMessage.doctorMess.doc_id)">
                医生履历
                <i></i>
            </div>
        </div>
        <div class="messageConRight">
            <div class="doctorPhoto">
                <img :src="doctorMessage.doctorMess.doc_img" alt="">
            </div>
            <div class="attention" @click="handleAttention(doctorMessage.doctorMess.doc_id)" v-if="isShowAttention">
                关注
                <i></i>
            </div>
            <div v-if="isShowInfoCancel" class="attention infoCancel"
                 @click="handleInfoCancel(doctorMessage.doctorMess.doc_id)">
                取消
            </div>
            <Toast v-if="isShowPopup"/>
        </div>
    </div>
</template>

<script>
    import common from "../../assets/js/common.js"
    import {Toast} from 'vant';

    export default {
        name: "doctorInfoMessage",
        components: {
            Toast
        },
        data() {
            return {
                isShowAttention: true,
                isShowInfoCancel: false,
                isShowPopup: false
            }
        },
        props: {
            doctorMessage: {
                type: Object
            },
            isShowDiv: {
                type: Object
            }
        },
        methods: {
            toDoctorResume(id) {
                this.$router.push({
                    path: "/doctorResume",
                    query: {
                        id: id
                    }
                })
            },
            // 关注
            handleAttention(id) {
                let token = common.getCookie("token");
                // let token = "eb56823a442c4c92aa670d91cb9f3faf";
                let url = "http://121.199.63.71:9006/focus_doctor/?token=" + token + "&doctor_id=" + id;
                this.$axios.get(url).then((data) => {
                    console.log(data.data);
                    if (data.data.code === 200) {
                        this.$toast('关注成功');
                        this.isShowInfoCancel = true;
                        this.isShowAttention = false
                    }
                })
            },
            // 取消
            handleInfoCancel(id) {
                let token = common.getCookie("token");
                // let token = "eb56823a442c4c92aa670d91cb9f3faf";
                let url = "http://121.199.63.71:9006/focus_doctor/?token=" + token + "&doctor_id=" + id;
                this.$axios.get(url).then((data) => {
                    console.log(data);
                    if (data.data.code === 200) {
                        this.$toast('取消关注');
                        this.isShowInfoCancel = false;
                        this.isShowAttention = true
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .messageCon {
        display: flex;
        justify-content: space-between;
        padding: 48px 20px 0 30px;
    }

    .messageLeftTop {
        display: flex;
        align-items: center;
        padding-bottom: 60px;
    }

    .messageLeftTop > h3 {
        font-size: 40px;
        color: #333333;
    }

    .messageLeftTop > i {
        display: block;
        width: 88px;
        height: 40px;
        margin-left: 14px;
        background: url("../../assets/images/askdoctor/doctors/ic_list_translate.png") no-repeat;
        background-size: cover;
    }

    .occupationSpan {
        font-size: 30px;
        color: black;
    }

    .hospitalSpan {
        display: inline-block;
        width: 64px;
        height: 34px;
        background: #6f7580;
        color: white;
        text-align: center;
        border-radius: 4px;
    }

    .hospitalClass {
        margin-bottom: 34px;
    }

    .CurriculumVitae {
        font-size: 24px;
        color: #28b7a3;
        position: relative;
    }

    .CurriculumVitae > i {
        width: 18px;
        height: 18px;
        background: url("../../assets/images/askdoctor/doctorInfo/ic_symptom_arrow.png");
        background-size: cover;
        position: absolute;
        top: 8px;
        left: 104px;
    }

    .doctorPhoto > img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }

    .attention {
        width: 134px;
        height: 56px;
        background: #28b7a3;
        color: white;
        text-align: center;
        border-radius: 5px;
        line-height: 56px;
        margin-top: 12px;
        font-size: 23px;
        position: relative;
        text-indent: 40px;
    }

    .attention > i {
        display: inline-block;
        width: 35px;
        height: 35px;
        position: absolute;
        background: url("../../assets/images/askdoctor/doctorInfo/ic_follow_white.png");
        background-size: cover;
        left: 25px;
        top: 9px;
    }

    .infoCancel {
        background: white;
        border: 1px solid #bababa; /*no*/
        color: #333333;
        text-indent: 0;
    }

</style>