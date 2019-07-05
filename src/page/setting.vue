<template>
    <div class="setBox">
        <dxHeaderReturn :headerReturnTitle="headerTitle"/>
        <!--大循环头像昵称性别身份手机号微信-->
        <div class="contentWrapper">
            <SetContent :titMsg="items" v-for="(items,index) in titMsg" :key="index" @click.native="showPopup(index)" ref="buttonSex">
                <!--插槽 头像-->
                <template v-slot:photoPic>
                    <div class="photoWrapper" v-if="items.img">
                        <img class="imgAuto" :src="items.img">
                    </div>
                </template>
            </SetContent>
            <!--vant组件弹出层换头像-->
            <van-popup v-model="showOne"
                       :style="{height: '17%',width:'85%',borderRadius:'3px'}"
            >
                <div class="names">拍照</div>
                <div class="names">上传图片</div>
            </van-popup>
            <!--vant组件弹出层修改性别-->
            <van-popup v-model="showTwo"
                       :style="{height: '17%',width:'85%',borderRadius:'3px'}"
                       @click="selectPhotoPic"
            >
                <div class="names" v-for="(item,index) in sex" :key="index">{{item}}</div>
            </van-popup>
        </div>
        <!--检查更新推荐给朋友关于我们-->
        <div class="contentWrapper">
            <SetContent :titMsg="items"
                        v-for="(items,index) in titMsgg"
                        :key="index"/>
        </div>
        <SetQuit/>
    </div>
</template>
<script>
    // 顶部
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import SetContent from "../components/setting/setContent"
    import SetQuit from "../components/setting/setQuit"
    import {Popup} from 'vant';

    export default {
        name: "Setting",
        components: {
            dxHeaderReturn,
            SetContent,
            SetQuit,
            "van-popup": Popup
        },
        data() {
            return {
                // 头部
                showOne: false,
                showTwo:false,
                headerTitle: {
                    title: "设置",
                    ico: require("../assets/onlineImg/ic_titlebar_back.png")
                },
                titMsg: [
                    {
                        name: "头像",
                        img: require("../assets/img/public/start_active.png"),
                        path: "",
                        event: this.showPopup
                    },
                    {
                        name: "昵称",
                        tit: "江花花",
                        path: "setAmendname",
                        event: ()=>{
                            console.log(11)
                        }
                    },
                    {
                        name: "性别",
                        tit: "未设置",
                        path: "",
                        event: this.showPopup
                    },
                    {
                        name: "我的身份",
                        tit: "未设置",
                        path: "/setIdentity",
                        event: () => {
                        }
                    },
                    {
                        name: "我的手机号",
                        tit: "12345665tgrg",
                        path: "/phoneNumber",
                        event: () => {
                        }
                    },
                    {
                        name: "微信",
                        tit: "已绑定",
                        path: "",
                        event: () => {
                        }
                    }
                ],
                sex:["男","女"],
                titMsgg: [
                    {
                        name: "检查更新",
                        path: '',
                        event: () => {
                        }
                    },
                    {
                        name: "推荐给朋友",
                        path: '/setRecommend',
                        event: () => {
                        }
                    },
                    {
                        name: "关于我们",
                        path: '/setAbout',
                        event: () => {
                        }
                    },
                ]
            }
        },
        methods: {
            //弹出框
            showPopup(index) {
                if(index == 0){
                    this.showOne = true
                }
                if(index == 2){
                    this.showTwo = true
                }
            },
            selectPhotoPic(event){
                let evt = event || window.event;
                let tar = evt.target || evt.srcElement;
                this.titMsg[2].tit = tar.innerHTML;
                this.showTwo = false

            }
        }
    }
</script>

<style scoped>
    .setBox {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
    }

    .contentWrapper {
        margin-top: 20px;
    }
    .names{
        font-size: 30px;
        color:#757575;
        margin-left: 30px;
        line-height: 112px;
    }
</style>
