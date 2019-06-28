<template>
    <div class="btn">
        <span class="txt">查看详情</span>
    </div>
</template>

<script>
    export default {
        name: "particularsBtn",
        props:{
            type:Object
        }
    }
</script>

<style scoped>
    .btn{
        width: 100%;
        height: 96px;
        line-height: 96px;
        text-align: center;
        border-bottom: #ebebeb 1px solid;
        padding-bottom:22px;
    }
.txt{
    display: inline-block;
    width: 160px;
    height: 54px;
    border: #28b7a3 1px solid;
    font-weight: bolder;
    font-size:24px;
    color: #28b7a3;
    line-height: 54px;
}
</style>