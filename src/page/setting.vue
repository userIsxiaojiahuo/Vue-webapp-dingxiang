<template>
    <div class="setBox">
        <ParticularsHeader :headerMag="headerMag"/>
        <div class="contentWrapper">
            <SetContent :titMsg="items"  v-for="(items,index) in titMsg" :key="index">
                <template v-slot:photoPic>
                    <div class="photoWrapper" v-if="items.img">
                        <img class="imgAuto" :src="items.img">
                    </div>
                </template>
            </SetContent>
        </div>
        <div class="contentWrapper">
            <SetContent :titMsg="items"  v-for="(items,index) in titMsgg"  :path="items.path" :key="index"/>
        </div>
        <SetQuit :quieMsg="quieMsg"/>
    </div>
</template>


<script>
    // 顶部
    import ParticularsHeader from "../components/particulars/particularsHeader"
    import SetContent from "../components/setting/setContent"
    import SetQuit from "../components/setting/setQuit"
    import SetCopy from "../components/setting/setCopy"

    export default {
        name: "Setting",
        components: {
            ParticularsHeader,
            SetContent,
            SetQuit,
            SetCopy
        },
        data() {
            return {
                // 头部
                headerMag: {
                    tit: "设置",
                    icon: require("../public/img/ic_titlebar_back.png"),
                },
                titMsg:[
                    {
                        name:"头像",
                        img:require("../public/img/timg (2).jpg"),
                    },
                    {
                        name:"昵称",
                        tit:"江花花",
                        path:'setAmendname',
                    },
                    {
                        name:"性别",
                        tit:"未设置",
                        // event:()=>{}
                    },
                    {
                        name:"我的身份",
                        tit:"未设置",
                        path:'setIdentity',
                    },
                    {
                        name:"我的手机号",
                        tit:"12345665",
                    },
                    {
                        name:"微信",
                        tit:"已绑定",
                    }
                ],
                copyMsg:{
                  tit:"自动草稿"
                },
                titMsgg:[
                    {
                        name:"检查更新",
                        path:''
                    },
                    {
                        name:"推荐给朋友",
                        path:'/setRecommend'
                    },
                    {
                        name:"关于我们",
                        path:'setAbout'
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
    .contentWrapper{
        margin-top: 20px;
    }
</style>