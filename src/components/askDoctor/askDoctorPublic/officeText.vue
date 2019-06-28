<template>
    <p :class="pDom">{{title}}</p>
</template>

<script>
    export default {
        name: "officeText",
        props: {
            title: {
                type: String
            },
            pDom: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .nameStyle {
        margin-top: 30px;
        font-weight: 100;
    }
</style>
