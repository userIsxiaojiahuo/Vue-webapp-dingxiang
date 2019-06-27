<template>
    <div class="homeNav">
        <router-link tag="div" :to="item.path" v-for="(item,index) in indexNav" :key="index">
            <img :src="item.imgs" alt="">
            <span>{{item.spanContent}}</span>
            <em>{{item.emContent}}</em>
        </router-link>
    </div>
</template>
<script>
    /**
     * 首页-问医生、名医义诊、在线购药
     */
    export default {
        name: "homeNav",
        props: {
            indexNav: {
                type: Array
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .homeNav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
    }

    .homeNav em {
        font-style: normal;
        font-size: 22px;
        color: #666666;
        margin-top: 6px;
    }

    .homeNav div {
        display: flex;
        padding: 10px 0 22px 0;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .homeNav div:last-of-type::after {
        display: none;
    }

    .homeNav div::after {
        content: "";
        height: 80px;
        background: #ebebeb;
        width: 1px; /*no*/
        position: absolute;
        right: -65px;
        top: 44px;
    }

    .homeNav img {
        width: 120px;
        height: 120px;
    }

    .homeNav span {
        font-size: 28px;
        color: #333333;
        font-weight: bold;
        margin-top: 12px;
    }
</style>
