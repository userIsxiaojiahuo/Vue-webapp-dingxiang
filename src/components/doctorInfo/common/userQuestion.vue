<template>
    <div class="questionsCon">
        <div class="questions" v-for="(item,index) in hotQuertions" :key="index">
            <div class="userHeader">
                <img class="userHeaderImg" v-if="item.isHeader" :src="item.userHeaderImg" alt="">
                <h3>{{item.userName}}</h3>
                <img class="classImg" :src="item.classImg" v-if="item.isClassImg" alt="">
            </div>
            <div class="questionText">
                {{item.questionText}}
            </div>
            <div class="maskTime" v-if="item.isTime">
                {{time}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userQuestion",
        data() {
            return {
                time: "6月19日  15:08"
            }
        },
        props: {
            hotQuertions: {
                type: Array
            }
        },
        // mounted() {
        //     let times = new Date()
        //     console.log(times)
        // }
    }
</script>

<style scoped>
    .questions {
        padding-top: 18px;
        padding-bottom: 25px;
        border-bottom: 1px solid #ebebeb;
        padding-right: 30px;
    }

    .userHeader {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .userHeaderImg {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 14px;
    }

    .classImg {
        width: 134px;
        height: 22px;
        margin-left: 36px;
    }

    .userHeader > h3 {
        font-size: 25px;
        color: #333333;
        letter-spacing: 0;
    }

    .questionText {
        font-size: 28px;
        color: #666666;
        line-height: 53px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .maskTime {
        line-height: 62px;
        font-size: 20px;
        color: #999999;
    }
</style>