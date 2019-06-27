<template>
    <div>
        <p>{{direcMsg.tit}}</p>
    </div>
</template>

<script>
    export default {
        name: "classificationDirecting",
        props:{
            direcMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
p{
    font-size:32px;
    color:#999999;
    font-weight: bolder;
    margin:auto 76px;
    text-align: center;
    text-indent: 20px;
}
</style>