<template>
    <img :src="'http://121.199.63.71:9006'+images" alt="">
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