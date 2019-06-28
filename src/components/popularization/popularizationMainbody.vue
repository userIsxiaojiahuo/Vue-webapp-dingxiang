<template>
    <p>{{mainMsg.txt}}</p>
</template>

<script>
    export default {
        name: "popularizationMainbody",
        props:{
            mainMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
p{
    font-size: 34px;
    margin:65px 30px 0;
    color: #666666;
    line-height: 60px;
    font-weight: 500;
}
</style>