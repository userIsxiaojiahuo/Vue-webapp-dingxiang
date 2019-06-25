<template>
    <div class="doctorInfoFooterCon">
        向{{doctorMessage.name}}医生提问
    </div>
</template>

<script>
    export default {
        name: "doctorInfoFooter",
        props: {
            doctorMessage: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .doctorInfoFooterCon {
        width: 100%;
        height: 100px;
        background: #219c8b;
        color: white;
        font-size: 28px;
        position: sticky;
        bottom: 0;
        text-align: center;
        line-height: 100px;
    }
</style>