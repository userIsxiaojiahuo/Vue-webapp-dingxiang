<template>
    <p :class="show?'nameStyle':'toNameStyle'" class="nameStyle">{{title}}</p>
</template>

<script>
    export default {
        name: "officeText",
        props: {
            title: {
                type: String
            },
            show: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>
    .nameStyle {
        font-weight: 100;
        color: #333333;
        font-weight: bolder;
    }

    .toNameStyle {
        color: #333333;
        font-weight: 100;
    }
</style>
