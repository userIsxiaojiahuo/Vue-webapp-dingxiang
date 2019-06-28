<template>
    <div class="messageCon">
        <div class="messageConLeft">
            <div class="messageLeftTop">
                <h3>{{doctorMessage.name}}</h3>
                <i v-if="doctorMessage.isRecommend"
                   :style="{
                            background:'url('+doctorMessage.recommend+')' + 'no-repeat',
                            backgroundSize:'cover'
                       }"
                ></i>
            </div>
            <div class="occupation">
                <span class="occupationSpan">{{doctorMessage.department}}</span>
                <span class="occupationSpan rank">{{doctorMessage.rank}}</span>
            </div>
            <div class="hospitalClass">
                <span class="hospitalSpan">{{doctorMessage.hospitalClass}}</span>
                <span class="occupationSpan hospitalAddress">{{doctorMessage.hospitalAddress}}</span>
            </div>
            <div class="CurriculumVitae" v-if="doctorMessage.isCurriculumVitae" @click="toDoctorResume">
                医生履历
                <i></i>
            </div>
        </div>
        <div class="messageConRight">
            <div class="doctorPhoto">
                <img :src="doctorMessage.headerImg" alt="">
            </div>
            <div class="attention" v-if="doctorMessage.isAttention">
                关注
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "doctorInfoMessage",
        props: {
            doctorMessage: {
                type: Object
            }
        },
        methods: {
            toDoctorResume() {
                this.$router.push({
                    path: "/doctorResume"
                })
            }
        }
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
        /*padding-bottom: 40px;*/
        /*border-bottom: 1px so lid red;*/
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
</style>