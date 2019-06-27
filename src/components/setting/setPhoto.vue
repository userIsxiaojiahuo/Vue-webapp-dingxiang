<template>
    <div class="photoBox">
        <span>{{photoMsg.name}}</span>
        <div class="right">
            <img :src=photoMsg.img>
            <i
                    :style="{
           'background':'url('+ photoMsg.icon +')'+'no-repeat',
           'backgroundSize':'cover'
        }"
            ></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SetPhoto",
        props:{
            photoMsg:{
                type:Object
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
    margin-top: 40px;
    background-color: white;
}
    span{
        font-size:30px;
        color:#333333;
    }
    img{
        width:80px;
        height:80px;
        border-radius: 50%;
    }
    i{
        display: inline-block;
        width:27px;
        height:27px;
        margin-left: 25px;
    }
    .right{
        height:100%;
        width:175px;
        display: flex;
        align-items: center;
    }
</style>