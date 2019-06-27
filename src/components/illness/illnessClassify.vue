<template>
    <div>
        <van-index-bar :index-list="classifyMsg.indexList"
        >

            <van-index-anchor v-for="itme in classifyMsg.classifyMsgTitle">{{itme.title}}

                <van-cell v-for="(items,index) in itme.text" :title="items" :key="index"/>
            </van-index-anchor>

        </van-index-bar>
    </div>
</template>

<script>
    import {IndexBar} from 'vant';
    import {IndexAnchor} from 'vant';
    import {Cell} from 'vant';

    export default {
        name: "illnessClassify",
        components: {
            "van-index-bar": IndexBar,
            "van-index-anchor": IndexAnchor,
            "van-cell": Cell,
        },
        props: ["classifyMsg"],
        methods: {
            // 返回一个特定的 DOM 节点，作为挂载的父节点

        }
    }
</script>

<style scoped>

</style>