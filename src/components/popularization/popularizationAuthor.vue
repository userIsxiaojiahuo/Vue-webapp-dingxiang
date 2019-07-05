<template>
    <div class="bigBox">
        <img :src="popuMessage.auth_img"/>
        <div class="box">
            <p class="name">{{popuMessage.auth}}</p>
            <p class="platform">{{popuMessage.subjection}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popularizationAuthor",
        props:{
            popuMessage:{
                type:Object
            }
        }
    }
</script>

<style scoped>
   .bigBox{
        width: 100%;
        height: 132px;
        display: flex;
       align-items: center;
    }
    img{
        width:72px;
        height:72px;
        border-radius: 50%;
        display: inline-block;
        margin-left: 30px;
    }
    .box{
        height:70px;
    }
    .name{
        font-size:26px;
        font-weight: bolder;
        color: black;
        margin-left:22px;
    }
    .platform{
        font-size:20px;
        color:#999999;
        margin-left:22px;
    }
</style>
