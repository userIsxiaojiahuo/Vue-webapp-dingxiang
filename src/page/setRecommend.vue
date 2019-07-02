<template>
    <div>
        <dxHeaderReturn :headerReturnTitle="headerReturnTitle"/>
        <RecommendShare :shareMsg="shareMsg"/>
    </div>

</template>

<script>
    import dxHeaderReturn from "../components/public/dxHeaderReturn"
    import RecommendShare from "../components/setting/setRecommend/recommendShare"
    /**
     * 推荐给朋友
     */
    export default {
        name: "SetRecommend",
        components: {
            dxHeaderReturn,
            RecommendShare,
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
            }
        }
    }
</script>

<style scoped>
</style>