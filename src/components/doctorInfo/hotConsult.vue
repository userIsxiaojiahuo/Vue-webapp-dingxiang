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

</style>