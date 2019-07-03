<template>
    <div class="bgBox">
        <!--大字-->
        <p class="tit">{{introMsg.tit}}</p>
        <!--中间介绍部分-->
        <div class="information" v-for="(item,index) in introMsg.informaTion">
            <span class="sutho">{{item.autho}}</span>
            <img :src="item.img" class="img">
            <span>{{item.name}}</span>
            <span>{{item.administrative}}</span>
            <span>{{item.post}}</span>
            <i :style="{
            'background':'url('+item.icon+')'+'no-repeat',
            'backgroundSize':'cover'
            }" class="icon"></i>
        </div>
        <!--&lt;!&ndash;下边时间部分&ndash;&gt;-->
        <div class="information">
            <span>{{introMsg.release}}</span>
            <span>{{introMsg.retime}}</span>
            <span>{{introMsg.lasteditTime}}</span>
            <span>{{introMsg.lasTime}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "particularsIntroduce",
        props:["introMsg"]
    }
</script>

<style scoped>
   .bgBox{
    width: 100%;
    height:372px;
    background-color: #28b7a3;
    border-top: #ebebeb 1px solid;
}
   .bgBox div{
       font-size:20px;
       color: white;
   }
    .tit{
        line-height: 160px;
        font-size:60px;
        color:#ffffff;
        font-weight: bolder;
        margin-left: 30px;
    }
    .information{
        width: 100%;
        height:66px;
        display: flex;
        align-items: center;
    }
    .information span{
        margin-left: 30px;
        font-size: 22px;
    }
    .sutho{
        width:112px;
        height:40px;
        background-color:#53c5b5;
        border-radius:5px;
        display: inline-block;
        line-height: 40px;
        text-align: center;
    }
    .img{
        width: 33px;
        height: 33px;
        border-radius: 50%;
        margin-left: 22px;
    }
    .icon{
        display: inline-block;
        width:18px;
        height:18px;
    }
</style>