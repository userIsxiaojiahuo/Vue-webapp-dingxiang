


<template>
    <div>
        <div class="aboutParcel" v-for="(item,index) in aboutMsg.navs">
            <span>{{item.tit}}</span>
            <i :style="{
        'background':'url('+ item.icon+')'+'no-repeat',
        'backgroundSize':'cover'
        }"
            ></i>
        </div>
        <p>{{aboutMsg.txt}}</p>
    </div>

</template>

<script>
    export default {
        name: "aboutContent",
        props:{
            aboutMsg:{
                type:Array
            }
        }
    }
</script>

<style scoped>
    .aboutParcel{
        width: 100%;
        height: 100px;
        margin-left: 30px;
        border-bottom: #ebebeb 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        font-size:28px;
        color: #000000;
        font-weight: 700;
    }
    i{
        width: 23px;
        height: 27px;
        display: inline-block;
        margin-right: 60px;
    }
    p{
        line-height: 50px;
        font-size:28px;
        color: #000000;
        font-weight: 700;
        padding: 40px 30px;
    }
</style>