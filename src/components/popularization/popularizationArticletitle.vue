<template>
    <p>{{articMsg.tit}}</p>
</template>

<script>
    export default {
        name: "popularizationArticletitle",
        props: {
            articMsg: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    p {
        font-weight: bolder;
        font-size: 40px;
        margin-left: 30px;
        margin-top: 80px;
        padding-bottom: 25px;
        width: 690px;
        border-bottom: #e2e2e2 2px solid;
    }
</style>