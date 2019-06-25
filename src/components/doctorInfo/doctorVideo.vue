<template>
    <div class="doctorVideoImg">
        <img :src="doctorVideoImg.img" alt="">
    </div>
</template>

<script>
    export default {
        name: "doctorVideo",
        props: {
            doctorVideoImg: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .doctorVideoImg {
        width: 100%;
    }

    .doctorVideoImg > img {
        width: 100%;
        height: 100%;
    }
</style>