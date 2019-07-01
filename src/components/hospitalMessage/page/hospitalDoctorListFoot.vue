<template>
    <div class="viewMore">
        更多{{hospitalDoctors}}个医生
    </div>
</template>

<script>
    export default {
        name: "hospitalDoctorListFoot",
        props: {
            hospitalDoctors: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    .viewMore {
        text-align: center;
        line-height: 98px;
        font-size: 22px;
        color: #999999;
        background: url("../../../assets/images/askdoctor/doctorInfo/ic_inquisition_arrow.png") 450px 35px no-repeat;
        background-size: 28px 28px;
    }
</style>