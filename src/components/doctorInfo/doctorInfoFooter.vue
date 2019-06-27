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

</style>