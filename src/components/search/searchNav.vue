<template>
    <div class="searchNav">
        <div v-for="(item,index) in searchNav">
            <img :src="item.imgs" alt="">
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchNav",
        props: {
            searchNav: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    /*
        搜索界面导航栏
    */
    .searchNav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 56px 100px 0;
    }

    .searchNav div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .searchNav div img {
        width: 100px;
        height: 100px;
    }

    .searchNav div span {
        font-size: 24px;
        margin-top: 12px;
        color: #666666;
        font-weight: bold;
    }
</style>
