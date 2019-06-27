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

</style>