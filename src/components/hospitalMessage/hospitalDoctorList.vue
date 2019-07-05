<template>
    <div class="hospitalMessageListCon">
        <HdTitle></HdTitle>
        <DoctorMessage :isShowHospital="isShowHospital" :doctorMessages="doctorMessages"></DoctorMessage>
        <HospitalDoctorListFoot :hospitalDoctors="hospitalDoctors"></HospitalDoctorListFoot>
    </div>
</template>

<script>
    import HdTitle from './hdTitle'
    import DoctorMessage from "../departDetails/page/doctorMessage"
    import HospitalDoctorListFoot from "../hospitalMessage/page/hospitalDoctorListFoot"

    export default {
        name: "hospitalDoctorList",
        components: {
            HdTitle,
            DoctorMessage,
            HospitalDoctorListFoot
        },
        props: ["doctorMessages", "hospitalDoctors", "isShowHospital"]
    }
</script>