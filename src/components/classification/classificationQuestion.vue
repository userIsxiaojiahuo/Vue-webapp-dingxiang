<template>
    <div>
        <img :src="questionMsg.img">
        <p>
            {{questionMsg.name}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "classificationQuestion",
        props:{
            questionMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
img{
    width:690px;
    height:140px;
    border-radius: 5px;
    margin: 50px 30px 460px 30px;
}
    p{
        font-size:30px;
        color: #333333;
        text-indent: 20px;
        font-weight: 500;
        margin-left: 10px;
        margin-bottom: 65px;
    }
</style>