<template>
    <div>
        <div class="doctorInfoFooterCon" @click="handleClick">
            向{{doctorMessage.doctorMess.doc_name}}医生提问
        </div>
        <div>
            <van-popup
                    @click-overlay="clickIsShowPupop"
                    v-model="show"
                    position="bottom"
                    :style="{ height: '63%' }"
                    class="doctorInfoFooterPopup"
            >
                <div class="popupTitle">
                    <div class="selectPopup">
                        <h3>选择问诊方式</h3>
                        <i class="popupCancel" @click="cancelBtn"></i>
                    </div>
                    <div v-for="(item,index) in popupText" :key="index">
                        <InquiryModule :mes="item"/>
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import {Popup} from 'vant';
    import InquiryModule from "../public/inquiryModule"

    export default {
        name: "doctorInfoFooter",
        components: {
            "van-popup": Popup,
            InquiryModule
        },
        data() {
            return {
                show: false,
                popupText: [
                    {
                        img: require("../../assets/images/askdoctor/ic_inquisition_word.png"),
                        title: "图文问诊",
                        price: "66",
                        dec: [
                            "通过文字、图片向医生提问，含2次免费追问机会",
                            "适合常见病及健康类问题咨询"
                        ],
                        isShow: false,
                        path: "/conPic"
                    },
                    {
                        img: require("../../assets/images/askdoctor/ic_phonecall.png"),
                        title: "电话问诊",
                        price: "99",
                        dec: [
                            "和医生约定时间电话交流，通话时长15分钟",
                            "舌合慢性病、复杂病情的咨询，和医生充分沟通"
                        ],
                        isShow: true,
                        path: "/callEmergency"
                    }
                ]
            }
        },
        props: ["doctorMessage", "isShowPupo"],
        watch: {
            isShowPupo: {
                immediate: true,
                handler(info) {
                    this.show = info
                }
            }
        },
        methods: {
            handleClick() {
                this.show = true
            },
            cancelBtn() {
                this.show = false;
                this.$emit("info", false)
            },
            clickIsShowPupop() {
                this.$emit("op", false)
            }
        },
        // created() {
        //     this.show = this.isShowPupo;
        //     console.log(this.isShowPupo)
        // }
    }
</script>