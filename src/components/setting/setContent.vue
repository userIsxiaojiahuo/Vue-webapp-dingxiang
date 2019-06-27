<template>
    <div>
        <div class="photoBox" v-for="(items,index) in titMsg">
            <span>{{items.name}}</span>
            <div class="right">
                <span class="tit">{{items.tit}}</span>
                <i
                        :style="{
           'background':'url('+ items.icon +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SetContent",
        props:{
            titMsg:{
                type:Array
            }
        }
    }
</script>

<style scoped>
    .photoBox{
        width: 100%;
        height: 100px;
        border-bottom: #ebebeb 1px solid;
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
    }
    span{
        font-size:30px;
        color:#333333;
    }
    .tit{
        color: #999999;
    }
    i{
        display: inline-block;
        width:27px;
        height:27px;
        margin-left: 25px;
        margin-right:47px;
    }
    .right{
        height:100%;
        display: flex;
        align-items: center;
    }
</style>