<template>
        <!--文章标题-->
        <p>{{popuMessage.title}}</p>
</template>

<script>
    export default {
        name: "popularizationTopic",
        props:['popuMessage']
    }
</script>

<style scoped>
p{
    font-size:40px;
    color: #333333;
    margin-left:30px;
    margin-top: 36px;
    display: block;
}
</style>
