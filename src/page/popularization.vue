<template>
    <div class="box">
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
        <PopularizationCouncil :councilMsg="councilMsg"/>
        <PopularizationTopic :popuMessage="popuMessage"/>
        <PopularizationAuthor :popuMessage="popuMessage"/>
        <div id="popuContent" v-html="popuMessage.content">

        </div>
        <PopularizationCopyright :copyMsg="copyMsg"/>
        <!--        <PopularizationPicture :picMsg="picMsg"/>-->
        <PopularizationShare :shareMsg="shareMsg"/>
        <PopularizationMore :moreMsg="moreMsg"/>
        <PopularizationMore :moreMsg="moreMsgg"/>
    </div>


</template>
n
<script>


    //头部
    import dxHeaderReturn from '../components/public/dxHeaderReturn'
    //委员会
    import PopularizationCouncil from "../components/popularization/popularizationCouncil"
    //文章标题
    import PopularizationTopic from "../components/popularization/popularizationTopic"
    //作者信息
    import PopularizationAuthor from "../components/popularization/popularizationAuthor"
    //疾病图片
    // import PopularizationPicture from "../components/popularization/popularizationPicture"


    //版权
    import PopularizationCopyright from "../components/popularization/popularizationCopyright"
    //分享
    import PopularizationShare from "../components/popularization/popularizationShare"
    //相关推荐
    import PopularizationMore from "../components/popularization/popularizationMore"

    export default {
        name: "Popularization",
        components: {
            dxHeaderReturn,
            PopularizationCouncil,
            PopularizationTopic,
            PopularizationAuthor,
            // PopularizationPicture,
            PopularizationCopyright,
            PopularizationShare,
            PopularizationMore
        },
        data() {
            return {
                // 头部
                headerReturnTitle: {
                    title: "科普文章"
                },
                //组委会
                councilMsg: {
                    tit: "丁香医生审稿专业委员会"
                },
                //版权
                copyMsg: {
                    po: "丁香园版权所有，未经许可不得转载",
                    pt:
                        "图片设计：一颗星",
                    icon:
                        require("../assets/img/illness/dxys_launcher_round.png"),
                    name:
                        "丁香医生审稿专业委员会",
                    time:
                        "2015年03月同行评议通过",
                    iconn:
                        require("../assets/img/illness/ic_inquisition_arrow.png")
                },
                //分享
                shareMsg: {
                    ico: require("../assets/img/illness/ic_zan_n.png"),
                    icon:
                        require("../assets/img/illness/share_weixin.png"),
                    iconn:
                        require("../assets/img/illness/share_penyouquan.png"),
                    iconnn:
                        require("../assets/img/illness/share_weibo.png"),
                    tit:
                        "有帮助",
                    num:
                        "(40)"
                }
                ,
                //推荐文章
                moreMsg: {
                    tit: "推荐文章",
                    navs:
                        [
                            "儿童支气管哮喘", "任时光匆匆流去，哮喘依然不容忽视", "支气管哮喘", "治疗哮喘常见的7个误区，看这篇就够了！"
                        ],
                    moree:
                        "更多相关文章",
                    iconnn:
                        require("../assets/img/illness/ic_inquisition_arrow.png")
                }
                ,
                //复用推荐话题
                moreMsgg: {
                    tit: "推荐话题",
                    navs:
                        [
                            "呼吸科"
                        ]
                },
                //文章
                popuMessage: {}
            }
        },
        created() {
            this.$store.dispatch("GetInfo", true);
            if(this.$route.query.id){
                this.$axios.get("http://121.199.63.71:9006/science_articles/" + this.$route.query.id + "/").then((data) => {
                    if (data.data.code === 206) {
                        this.$store.dispatch("GetInfo", false);
                        this.popuMessage = data.data.data[0];
                        console.log(this.popuMessage)
                    }
                })
            }else if(this.$route.query.home_id){
                this.$axios.get("http://121.199.63.71:9006/article/" + this.$route.query.home_id + "/").then((data) => {
                    if (data.data.code === 206) {
                        this.$store.dispatch("GetInfo", false);
                        this.popuMessage = data.data.data[0];
                        console.log(this.popuMessage)
                    }
                })
            }

        },
    }
</script>

<style>
    /*文章标题*/
    .editor-body p img{
        width: 100%;
    }
    /*第一段文本*/
    .editor-body p,.editor-body ul{
        font-size: 34px;
        margin:30px 30px 0;
        color: #666666;
        font-weight: 500;
    }
    /*第二大段有序列表套无序列表*/
    .editor-body p,.editor-body ol{
        font-size: 34px;
        color: #666666;
        line-height: 60px;
        font-weight: 500;
    }
    .editor-body ul>li{
        margin-top: 30px;
        line-height: 60px!important;
        font-weight: 400!important;
        margin-left: -30px!important;
        margin-right: 30px!important;
    }
    .editor-body p{
        margin:30px 30px 0;
    }
    .editor-body h2{
        padding-left: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .editor-body ol{
        margin-left: 84px;
    }
    .editor-body ol>li{
        list-style: decimal!important;
        font-weight: bolder;
    }
    .editor-body .Olist{
        line-height: 120px;
    }
   #popuContent img{
       width: 700px;
   }
    #popuContent p{
        font-size: 34px;
        margin: 20px 30px;
    }
    #popuContent p strong{
        margin: 20px 0;
    }
</style>
