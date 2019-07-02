<template>
    <div class="inquiryCon">
        <router-link tag="div" :to="mes.path" class="inquiryTop">
            <img class="inquiryTopImg" :src="mes.img" alt="">
            <div class="topTitle">
                <h3>{{mes.title}}</h3>
                <span>￥{{mes.price}}</span>
                <i class="toLinkArrows"></i>
                <img v-if="mes.isShow" class="expertImg" src="../../assets/images/askdoctor/doctorInfo/popup_img.png"
                     alt="">
            </div>
        </router-link>
        <div class="inquiryText">
            <ul>
                <li v-for="(item,index) in mes.dec" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inquiryModule",
        props: {
            mes: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .inquiryCon {
        padding: 20px 34px 20px 26px;
        background: white;
        border-radius: 10px;
        margin-top: 20px;
    }

    .inquiryTop {
        display: flex;
        border-bottom: 1px solid #ebebeb;
        position: relative;
    }

    .topTitle {
        margin-left: 40px;
    }

    .topTitle > h3 {
        line-height: 56px;
    }

    .topTitle > span {
        color: #28b7a3;
        font-size: 20px;
    }

    .inquiryTopImg {
        width: 108px;
        height: 108px;
    }

    .toLinkArrows {
        width: 16px;
        height: 24px;
        display: inline-block;
        background: url("../../assets/images/askdoctor/doctorInfo/hcp_into.png");
        background-size: cover;
        position: absolute;
        right: 0;
        top: 50px;
    }

    .expertImg {
        width: 142px;
        height: 36px;
        position: absolute;
        top: 25px;
        left: 270px;
    }

    .inquiryText, .inquiryTop {
        padding: 20px 0 20px 0;
    }

    .inquiryText > ul > li {
        line-height: 45px;
        font-size: 20px;
        color: #bcbcbc;
    }
</style>