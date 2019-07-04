<template>
    <img :src="picMsg.img">
</template>

<script>
    export default {
        name: "popularizationPicture",
        props:{
            picMsg:{
                type:Object
            }
        }
    }
</script>

<style scoped>
img{
    width:692px;
    height:382px;
    margin-left: 30px;
}
</style>