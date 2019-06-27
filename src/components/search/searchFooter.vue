<template>
    <div class="searchFooter">
        <span v-for="(item,index) in searchFooter"><img src="../../assets/img/home/ic_fire.png" v-if="item.isShow" alt="">{{item.title}}</span>
    </div>
</template>

<script>
    export default {
        name: "searchFooter",
        props: {
            searchFooter: {
                type: Array
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    /*
   首页搜索界面底部
   */
    .searchFooter {
        width: 100%;
        padding: 0 36px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .searchFooter > span {
        font-size: 28px;
        color: #666666;
        display: flex;
        align-items: center;
        height: 56px;
        padding: 0 20px;
        border: 1px solid #d1d1d1;/*no*/
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 28px;
        font-weight: bold;
    }
    .searchFooter > span>img{
        width: 30px;
        height: 30px;
        margin: auto 9px;
    }
</style>
