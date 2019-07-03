<template>
    <div class="reasonParcel">
        <div class="headline">
            <i :style="{
        'background':'url('+ reasonMsg.icon+')'+'no-repeat',
        'backgroundSize':'cover'
        }"  class="fire"
            ></i>
            <span class="reasomTit">{{reasonMsg.tit}}</span>
        </div>
        <div v-for="(item,index) in reasonMsg.navs" class="reasonContent">
            <p class="rea">{{item.reason}}</p>
            <img :src="item.img" alt="" class="reasimg">
            <p class="reastxt">{{item.txt}}</p>
            <span class="reasname">{{item.name}}</span>
            <i :style="{
        'background':'url('+ item.iconn+')'+'no-repeat',
        'backgroundSize':'cover'
        }" class="reasshar"
            ></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommendReason",
        props: ["reasonMsg"],
    }
</script>

<style scoped>
    .reasonParcel{
        width: 100%;
    }
.headline{
    display: flex;
    width: 100%;
    height: 118px;
    line-height: 118px;
    padding-left: 30px;
    border-top:#f4f4f4 20px solid;
    justify-content: left;
    align-items: center;
}
    .fire{
        width:30px;
        height: 30px;
        display: inline-block;
    }
    .reasomTit{
        font-size: 28px;
        color: #999999;
        margin-left: 28px;
    }
    .reasonContent{
        margin-left: 30px;
        border-bottom: #ebebeb 1px solid;
        padding: 25px 0;
    }
    .rea{
        font-size:30px;
        line-height:60px;
    }
    .reasimg{
        height: 20px;
    }
    .reastxt{
        font-size: 24px;
        margin: 20px 0 30px;
        margin-right: 30px;
        line-height: 40px;
    }
    .reasname{
        color: #999999;
    }
    .reasshar{
        width: 40px;
        height: 40px;
        display: inline-block;
        float: right;
        margin-right: 30px;
    }
</style>