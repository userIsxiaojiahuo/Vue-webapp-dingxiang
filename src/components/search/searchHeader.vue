<template>
    <div class="searchHeader">
        <input  type="text" :placeholder="placeholderText">
    </div>
</template>

<script>
    /**
     * 搜索头部
     */
    export default {
        name: 'searchHeader',
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        props: {
            placeholderText: {
                type: String
            }
        }
    }


</script>

<style scoped>

    /*
    首页搜索界面搜索输入框
    */
    .searchHeader {
        flex: 1;
    }

    .searchHeader input {
        background: url("../../assets/img/home/ic_search_after.png") no-repeat 30px center;
        background-size: 36px 36px;
        background-color: #f2f2f2;
        color: #bababa;
        height: 80px;
        font-size: 30px;
        line-height: 90px;
        text-indent: 80px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #f3f3f3; /*no*/
        outline: none;
        box-shadow: 10px 10px #fcfcfc;
    }
</style>

