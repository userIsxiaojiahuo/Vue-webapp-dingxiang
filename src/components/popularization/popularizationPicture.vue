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

    width:100% !important;
    height:382px;
    margin-left: 30px;
}
</style>
