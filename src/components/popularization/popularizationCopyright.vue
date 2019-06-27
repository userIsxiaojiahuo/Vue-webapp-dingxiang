<template>
    <div>
        <p class="cop">{{copyMsg.po}}</p>
        <p class="cop">{{copyMsg.pt}}</p>
        <div class="home">
            <i class="left"
              :style="{
           'background':'url('+ copyMsg.icon +')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
            <div class="pbox">
                <p class="pOn">{{copyMsg.name}}</p>
                <p class="pTw">{{copyMsg.time}}</p>
            </div>
            <i class="right"
              :style="{
           'background':'url('+ copyMsg.iconn +')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popularizationCopyright",
        props:{
            copyMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
    .cop{
        font-size: 34px;
        margin:65px 30px 0;
        color: #999999;
        line-height: 60px;
        font-weight: 900;
    }
    .pbox{
        width:355px;
        height:90px;
        margin: auto;
    }
    .home{
        width:690px;
        height:148px;
        background-color:#f4f4f4;
        margin:42px 30px 100px 30px;
        display: flex;
        border-radius: 3px;
    }
    .left{
        display: inline-block;
        width:100px;
        height:88px;
        margin: auto 20px;
    }
    .right{
        display: inline-block;
        width:30px;
        height:30px;
        margin: auto 30px;
    }
    .pOn{
        font-size: 30px;
        font-weight: bolder;
        color: #333333;
    }
</style>