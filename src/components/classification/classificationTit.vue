<template>
    <p>
        {{title}}
    </p>
</template>

<script>
    export default {
        name: "classificationTit",
        props:["title"]
    }
</script>

<style scoped>
p{
    font-size:40px;
    color:#7c68b4;
    font-weight: bolder;
    text-align: center;
    display: block;
    width:690px;
    border-bottom:#e2e2e2 2px solid;
    padding-bottom: 23px;
    margin-left: 30px;
    margin-top: 70px;
}
</style>
