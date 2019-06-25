<template>
    <div class="hotContainer">
        <div class="questionAndEstimate" v-for="(itemA,lis) in hotQuertions">
            <div class="hotTitle">
                <h3>{{itemA.title}}</h3>
            </div>
            <div class="illnessKind">
                <ul class="illnessKindUls" v-if="itemA.isShow">
                    <li v-for="(item,index) in itemA.illnessKind" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
            <UserQuestion class="quesMarginTop" :hotQuertions="itemA.userQuestion"></UserQuestion>
            <div class="viewMore" v-if="itemA.isShow">
                更多{{itemA.quaternionsNum}}个问题
            </div>
            <div class="viewMore" v-if="itemA.displayNone">
                更多{{itemA.quaternionsNum}}个评论
            </div>
        </div>
    </div>
</template>

<script>
    import UserQuestion from "./common/userQuestion"

    export default {
        name: "hotConsult",
        components: {
            UserQuestion
        },
        props: {
            hotQuertions: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .hotContainer {
        padding: 34px 0 0 30px;
    }

    .hotTitle {
        display: flex;
    }

    .hotTitle > h3 {
        font-size: 30px;
        color: #333333;
        margin-bottom: 36px;
    }

    .illnessKindUls {
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .illnessKindUls > li {
        width: 25%;
        text-align: center;
        float: left;
        line-height: 62px;
        margin-right: 25px;
        font-size: 22px;
        color: #999999;
        padding: 0 20px 0 20px;
        background: #f4f4f4;
        border-radius: 50px;
        margin-bottom: 13px;
    }

    .quesMarginTop {
        margin-top: 39px;
    }

    .viewMore {
        text-align: center;
        line-height: 98px;
        font-size: 22px;
        color: #999999;
        background: url("../../assets/images/askdoctor/doctorInfo/ic_inquisition_arrow.png") 450px 35px no-repeat;
        background-size: 28px 28px;
    }
</style>