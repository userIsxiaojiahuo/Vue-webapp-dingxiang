<template>
    <div>
        <ParticularsHeader :headerMag="headerMag"/>
        <AboutContent :aboutMsg="aboutMsg"/>
    </div>
</template>

<script>
    import ParticularsHeader from "../components/particulars/particularsHeader"
    import AboutContent from "../components/setting/setAbout/aboutContent"
    export default {
        name: "SetAbout",
        components:{
            ParticularsHeader,
            AboutContent
        },
        data(){
            return{
                //头部
                headerMag: {
                    tit: "关于我们",
                    icon: require("../public/img/ic_titlebar_back.png"),
                },
                //中间
                aboutMsg:
                    {
                        navs:[
                            {
                                tit:"软件版本:8.0.1(20190613)",
                            },
                            {
                                tit:"软件授权：丁香园",

                            },
                            {
                                tit:"网址:dxy.com",
                                    icon:require("../public/img/ic_inquisition_arrow.png")
                            },
                            {
                                tit:"商务合作:dxysapp@dxy.cn",
                            },
                            {

                                tit:"客服邮箱：dxys@dxy.cn",
                            },
                            {
                                tit:"客服微博：@丁香医生",
                            },
                            {
                                tit:"微信公众号：丁香医生",
                            },
                            {
                                tit:"团队简介",
                            },
                            {
                                tit:"免责声明",
                                    icon:require("../public/img/ic_inquisition_arrow.png")
                            },
                            {
                                tit:"用户协议",
                                    icon:require("../public/img/ic_inquisition_arrow.png")
                            },
                            ],
                                txt:"丁香园是中国最大的面向医生、医疗机构、医药从业者及生命科学领域的专业社会化网络。提供医生领域的交流平台、专业知识、最新科研进展及技术服务。"
                    },
            }
        }
    }
</script>

<style scoped>

</style>
