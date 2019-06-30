<template>
    <div class="askDoctorHeader">
        <div class="headerTitle">
            <a class="iconPosition" href="javascript:;" @click="askDoctorGetBack()">
                {{headerMessage.title}}
                <i
                        :style="{
                        'background':'url(' + headerMessage.icon + ')' + 'no-repeat',
                        'backgroundSize':'cover'
                        }"
                ></i>
            </a>
            <em @click="showPopup" v-if="headerMessage.show"></em>
            <span v-if="headerMessage.isStartImg"></span>
            <div>
                <van-popup
                        v-model="show"
                        position="bottom"
                        :style="{ height: '48%' }"
                >
                    <div class="share">
                        <ul>
                            <li v-for="(item,index) in shareMess" :key="index">
                                <img :src="item.imgs" alt="" class="shareImg">
                                <p>{{item.title}}</p>
                            </li>
                        </ul>
                        <div class="cancelBtn" @click="shareBtn">
                            取消
                        </div>
                    </div>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script>
    import {Popup} from 'vant';

    export default {
        name: "AskDoctorHeader",
        components: {
            "van-popup": Popup
        },
        props: {
            headerMessage: {
                type: Object
            }
        },
        data() {
            return {
                show: false,
                shareMess: [
                    {
                        title: "微信好友",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/wx_bg.png")
                    },
                    {
                        title: "朋友圈",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/friend_bg.png")
                    },
                    {
                        title: "新浪微博",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/xl_bg.png")
                    },
                    {
                        title: "QQ",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/qq_bg.png")
                    },
                    {
                        title: "QQ空间",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/kj_bg.png")
                    },
                    {
                        title: "复制链接",
                        imgs: require("../../../assets/images/askdoctor/doctorInfo/fz_bg.png")
                    }
                ]
            }
        },
        methods: {
            //顶部返回按钮
            askDoctorGetBack() {
                this.$router.back()
            },
            showPopup() {
                this.show = true;
            },
            shareBtn() {
                this.show = false
            }
        }
    }
</script>

<style scoped>
    .askDoctorHeader {
        width: 100%;
        height: 162px;
        background: #fcfcfc;
        border-bottom: 1px solid #ebebeb; /*no*/
    }

    .headerTitle {
        padding: 75px 0 22px 30px;
        width: 100%;
        line-height: 64px;
        position: relative;
    }


    .iconPosition {
        display: inline-block;
        position: relative;
        padding-left: 44px;
        font-size: 35px;
        color: #000;
        font-weight: bolder;
    }

    .iconPosition > i {
        width: 44px;
        height: 44px;
        position: absolute;
        left: 0;
        top: 8px;
    }

    .headerTitle > em {
        width: 38px;
        height: 38px;
        background: url("../../../assets/images/askdoctor/ic_titlebar_share.png");
        background-size: cover;
        position: absolute;
        right: 30px;
        top: 84px;
    }

    .headerTitle > span {
        width: 38px;
        height: 38px;
        position: absolute;
        right: 105px;
        top: 84px;
        background: url("../../../assets/images/askdoctor/ic_titlebar_start.png");
        background-size: cover;
    }


    .share {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .share > ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background: #f9f9f9;
        flex-wrap: wrap;
        padding-bottom: 10px;
    }

    .share > ul > li {
        width: 33%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 68px;
    }

    .shareImg {
        width: 120px;
        height: 120px;
    }

    .cancelBtn {
        flex: 1;
        width: 100%;
        color: #48c2b1;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>