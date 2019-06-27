<template>
    <div>
        <p class="tit">{{moreMsg.tit}}</p>
        <ul class="Ulist">
            <li class="List" v-for="item in moreMsg.navs">{{item}}</li>
        </ul>
        <div class="botto">
            <p class="moree">{{moreMsg.moree}}</p>
            <i class="right"
               :style="{
           'background':'url('+ moreMsg.iconnn+')'+'no-repeat',
           'backgroundSize':'cover'
        }"></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: "popularizationMore",
        props:{
            moreMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
.tit{
    font-size: 30px;
    color: #333333;
    margin-left: 30px;
    line-height: 100px;
}
    .List{
        display: block;
        padding: 30px;
        font-size:32px;
        font-weight: bolder;
        color:#202020;
        line-height:44px;
        border-bottom: #ebebeb 1px solid;
    }
    .botto{
        width: 100%;
        height:104px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .moree{
        font-size:24px;
        color: #999999;
    }
    .right{
        display: inline-block;
        width:24px;
        height:24px;
        margin-left:16px;
    }
</style>