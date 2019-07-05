<template>
    <div>
        <p class="tit">推荐文章</p>
        <ul class="Ulist">
            <router-link :to="'/Popularization?id='+item.id" class="List" @click="intoPage" v-for="(item,index) in moreMsg" :key="index" v-if="item.id">{{item.title}}</router-link>
        </ul>
        <div class="botto">
            <p class="moree">更多相关文章</p>
            <i class="right"></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: "popularizationMore",
        props:['moreMsg'],
        methods:{
            intoPage(){

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
        background: url("../../assets/images/askdoctor/doctorInfo/ic_inquisition_arrow.png") no-repeat;
        background-size:cover;
    }
</style>