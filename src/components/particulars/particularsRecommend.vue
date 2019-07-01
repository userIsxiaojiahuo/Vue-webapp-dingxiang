<template>
    <div class="recommebdBox">
        <van-tabs @click="onClick">
            <van-tab title="推荐医生" >内容 1</van-tab>

            <!--@click="handletoggle" :class="isColo?'recommebd':'van-ellipsis'"-->

            <van-tab title="科普文章" @click="handletoggle">内容 2</van-tab>
        </van-tabs>
    </div>
</template>
<!--<link rel="stylesheet" href="../../assets/css/particularsRecommend.css">-->
<script>
    import {Tab,Tabs} from 'vant';

    export default {
        name: "particularsRecommend",
        components: {
            "van-tabs": Tabs,
            "van-tab": Tab,
        },
        data() {
            return {
                active: 2,
                isColo:false
            };
        },
        methods: {
            onClick(index, title) {
                this.$toast(index);
            },
            handletoggle(){
                this.isColo=true;
            }
        }

    }
</script>

<style>
    .recommebdBox {
        width: 100%;
        height: 50px;
    }
    .van-tabs__content{
        line-height: 92px;
    }
    .van-ellipsis{
        font-size: 30px;
        color: #999999;
    }
    .van-tabs__line {
        background-color: #28b7a3!important;
    }
    .recommebd{
        color: #28b7a3;
    }
</style>