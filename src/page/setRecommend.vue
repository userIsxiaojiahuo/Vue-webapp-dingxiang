<template>
    <div>
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
        <RecommendShare :shareMsg="shareMsg"/>
        <RecommendReason :reasonMsg="reasonMsg"/>
    </div>

</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import RecommendShare from "../components/setting/setRecommend/recommendShare"
    import RecommendReason from "../components/setting/setRecommend/recommendReason"
    /*
     推荐给朋友
     */
    export default {
        name: "setRecommend",
        components: {
            dxHeaderReturn,
            RecommendShare,
            RecommendReason
        },
        data() {
            return {
                // 头部
                headerReturnTitle: {
                    title: "推荐给朋友"
                },
                //文章部分
                shareMsg: {
                    tit: "为了自己和家人，你安装了吗？",
                    txt: "我所需要的任何健康问题，都能找到靠谱的答案。给父母亲戚朋友装这个app是我一直在做的事情。远离谣言，多看看丁香医生，健康非常重要",
                    name: "——请叫我雷锋",
                    btn: "分享给朋友"
                },
                //推荐理由
                reasonMsg:{
                    icon:require("../public/img/comment_hot.png"),
                    tit:"应用市场推荐理由",
                    navs:[
                        {
                            reason:"走心",
                            img:require("../public/img/score_star.png"),
                            txt:"很少主动来好评，不多说，此App真是难得的走心，希望继续优化。谢谢开发者们的努力。",
                            name:"被迫评论好讨厌",
                            iconn:require("../public/img/ic_share_black.png")
                        },
                        {
                            reason:"走心",
                            img:require("../public/img/score_star.png"),
                            txt:"很少主动来好评，不多说，此App真是难得的走心，希望继续优化。谢谢开发者们的努力。",
                            name:"被迫评论好讨厌",
                            iconn:require("../public/img/ic_share_black.png")
                        },
                        {
                            reason:"走心",
                            img:require("../public/img/score_star.png"),
                            txt:"很少主动来好评，不多说，此App真是难得的走心，希望继续优化。谢谢开发者们的努力。",
                            name:"被迫评论好讨厌",
                            iconn:require("../public/img/ic_share_black.png")
                        },                        {
                            reason:"走心",
                            img:require("../public/img/score_star.png"),
                            txt:"很少主动来好评，不多说，此App真是难得的走心，希望继续优化。谢谢开发者们的努力。",
                            name:"被迫评论好讨厌",
                            iconn:require("../public/img/ic_share_black.png")
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>