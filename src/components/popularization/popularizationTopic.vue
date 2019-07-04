<template>
        <p>{{topicMsg.tit}}</p>
</template>

<script>
    export default {
        name: "popularizationTopic",
        props:{
            topicMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
p{
    font-size:40px;
    color: #333333;
    margin-left:30px;
    margin-top: 36px;
    margin-bottom: 66px;
    display: block;
}
</style>