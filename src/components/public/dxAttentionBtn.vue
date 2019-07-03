<template>
    <div class="dxAttentionBtn">
        <div class="iconWrapper" @click.stop="showPopup()">
            <img class="imgAuto" src="../../assets/images/askdoctor/ic_titlebar_share.png"/>
        </div>
        <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '48%' }"
                z-index="999"
        >
            <div class="share">
                <ul>
                    <li v-for="(item,index) in shareMess" :key="index">
                        <img :src="item.imgs" alt="" class="shareImg">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <div class="cancelBtn" @click.stop="shareBtn()">
                    取消
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import {Popup} from 'vant';

    export default {
        name: "dxAttentionBtn",
        components: {
            "van-popup": Popup
        },
        data() {
            return {
                show: false,
                shareMess: [
                    {
                        title: "微信好友",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/wx_bg.png")
                    },
                    {
                        title: "朋友圈",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/friend_bg.png")
                    },
                    {
                        title: "新浪微博",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/xl_bg.png")
                    },
                    {
                        title: "QQ",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/qq_bg.png")
                    },
                    {
                        title: "QQ空间",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/kj_bg.png")
                    },
                    {
                        title: "复制链接",
                        imgs: require("../../assets/images/askdoctor/doctorInfo/fz_bg.png")
                    }
                ]
            }
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            shareBtn() {
                this.show = false;
            }
        }
    }
</script>

<style scoped>
    .dxAttentionBtn {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .iconWrapper {
        width: 38px;
        height: 38px;
        display: flex;
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
        padding-bottom: 80px;
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
