<template>
    <!--头部-->
    <div class="header">
        <!--左边图标-->
        <router-link
                tag="div"
                to="/"
                class="box">
                <i
                  :style="{
           'background':'url('+ headerMag.icon +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
                ></i>
            <span class="tit">{{headerMag.tit}}</span>
        </router-link>
        <!--右边图标-->
        <div class="boxt">
            <i :style="{
           'background':'url('+ headerMag.iconn +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
            ></i>
            <i :style="{
           'background':'url('+ headerMag.iconnn +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
            ></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "particularsHeader",
        props:{
            headerMag:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 162px;
        background-color: #fcfcfc;
    }
    .box,.boxt{
        height: 50px;
        padding-top: 81px;
    }
    .box{
        float: left;
        display: flex;
    }
    .tit{
        font-size:32px;
        color:#030303;
        font-weight: bolder;
    }
    .boxt{
        float: right;
        margin-right:33px;
    }
    .box>i{
        margin-left: 30px;
    }
    .boxt>i{
        float: left;
        margin-left: 45px;
    }
    i{
        display: inline-block;
        height: 40px;
        width: 40px;
        margin-top: 3px;
    }
</style>