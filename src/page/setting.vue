<template>
    <div class="setBox">
        <ParticularsHeader :headerMag="headerMag"/>
        <SetPhoto :photoMsg="photoMsg"/>
        <SetContent :titMsg="titMsg"/>
        <SetContent :titMsg="titMsgg"/>
        <SetQuit :quieMsg="quieMsg"/>
    </div>
</template>


<script>
    // 顶部
    import ParticularsHeader from "../components/particulars/particularsHeader"
    import SetPhoto from "../components/setting/setPhoto"
    import SetContent from "../components/setting/setContent"
    import SetQuit from "../components/setting/setQuit"

    export default {
        name: "Setting",
        components: {
            ParticularsHeader,
            SetPhoto,
            SetContent,
            SetQuit
        },
        data() {
            return {
                // 头部
                headerMag: {
                    tit: "设置",
                    icon: require("../public/img/ic_titlebar_back.png"),
                },
                photoMsg:{
                    name:"头像",
                    img:require("../public/img/timg (2).jpg"),
                    icon: require("../public/img/ic_inquisition_arrow.png"),
                },
                titMsg:[
                    {
                        name:"昵称",
                        tit:"江花花",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                    {
                        name:"性别",
                        tit:"未设置",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                    {
                        name:"我的身份",
                        tit:"未设置",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                    {
                        name:"我的手机号",
                        tit:"12345665tgrg",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    }
                ],
                titMsgg:[
                    {
                        name:"检查更新",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                    {
                        name:"推荐给朋友",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                    {
                        name:"关于我们",
                        icon: require("../public/img/ic_inquisition_arrow.png"),
                    },
                ],
                quieMsg:{
                    tit:"退出登录"
                }
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
</style>