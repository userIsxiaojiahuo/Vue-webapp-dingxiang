<template>
    <img :src="images" alt="">
</template>

<script>
    export default {
        name: "officeImg",
        props: {
            images: {
                type: String
            }
        }
    }
</script>