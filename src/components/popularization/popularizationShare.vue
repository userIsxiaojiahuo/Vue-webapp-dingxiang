<template>
    <div>
        <div class="box">
            <div class="left">
                <i class="right"
                   :style="{
           'background':'url('+ shareMsg.ico +')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
                <span>{{shareMsg.tit}}</span>
                <span>{{shareMsg.num}}</span>
            </div>
            <div class="right">
                <i class="right"
                   :style="{
           'background':'url('+ shareMsg.icon+')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
                <i class="right"
                   :style="{
           'background':'url('+ shareMsg.iconn +')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
                <i class="right"
                   :style="{
           'background':'url('+ shareMsg.iconnn+')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
            </div>
        </div>
        <div class="soli"></div>
    </div>
</template>

<script>
    export default {
        name: "popularizationShare",
        props:{
            shareMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: space-between;
    }
    .left{
        width: 325px;
        height: 80px;
        background-color:#28b7a3;
        border-radius: 3px;
        float: left;
        line-height: 80px;
        text-align: center;
        font-size:32px;
        color: white;
        margin-left: 30px;
    }
    .left>i{
        display: inline-block;
        width:35px;
        height:35px;
    }
    .right{
        width:265px;
        height:80px;
        display: flex;
        margin-right: 30px;
    }
    .right i{
        display: inline-block;
        width:61px;
        height:61px;
        margin: auto 15px;
    }
    .soli{
        width: 100%;
        height:20px;
        background-color:#f4f4f4;
        margin-top: 105px;
    }
</style>