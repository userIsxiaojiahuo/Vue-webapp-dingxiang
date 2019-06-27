<template>
    <p>{{councilMsg.tit}}</p>
</template>

<script>
    export default {
        name: "popularizationCouncil",
        props:{
            councilMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
p{
    display: block;
    width:345px;
    height:40px;
    font-size:24px;
    background-color:#f4f4f4;
    color:#717171;
    margin-left: 30px;
    border-radius: 15px;
    margin-top: 32px;
    text-align: center;
    line-height: 40px;
    font-weight: bolder;
}
</style>