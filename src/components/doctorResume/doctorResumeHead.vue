<template>
    <div class="resumeHeader">
        <AskDoctorTop :headerMessage="headerMessage"></AskDoctorTop>
    </div>
</template>

<script>
    import AskDoctorTop from "../askDoctorTop"

    export default {
        name: "doctorResumeHead",
        components: {
            AskDoctorTop
        },
        props: {
            headerMessage: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>