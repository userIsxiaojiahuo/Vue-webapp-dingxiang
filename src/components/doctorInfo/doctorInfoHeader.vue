<template>
    <div class="doctorInfoHead">
        <AskdoctorTop :headerMessage="headerMessage"></AskdoctorTop>
    </div>
</template>

<script>
    import AskdoctorTop from "../askDoctor/askDoctorPage/askDoctorTop"

    export default {
        name: "doctorInfoHeader",
        components: {
            AskdoctorTop
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