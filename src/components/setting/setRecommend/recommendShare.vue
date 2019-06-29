<template>
    <div class="sharBox">
        <div class="shareTxt">
            <p class="tit">{{shareMsg.tit}}</p>
            <p class="txt">{{shareMsg.txt}}</p>
            <p class="name">{{shareMsg.name}}</p>
        </div>
        <div class="btn">
            {{shareMsg.btn}}
        </div>
    </div>

</template>

<script>
    export default {
        name: "recommendShare",
        props:{
            shareMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
.sharBox{
    width: 100%;
    border-bottom: #f4f4f4 20px solid;
}
    .shareTxt{
        width:670px;
        height: 642px;
        border: #f6f4f4 4px solid;
        margin: 40px auto;
        padding: 65px;
    }
    .tit{
        font-size: 38px;
        color: #999999;
    }
    .txt,.name{
        font-size: 24px;
        color: #999999;
        line-height: 60px;
        margin-top: 55px;
    }
    .name{
        float: right;
    }
    .btn{
        width:274px;
        height:96px;
        color: white;
        background-color: #28b7a3;
        border-radius: 3px;
        text-align: center;
        line-height: 96px;
        margin: 50px auto;
    }
</style>