<template>
    <div class="askDoctorContent">
        <div class="administrativeOffice" v-for="(item,index) in officeMessage" :key="index">
            <h3>{{item.title}}</h3>
            <CommonOffice :officeMessage="item.departments_info"></CommonOffice>
        </div>
        <div class="blankDiv"></div>
    </div>
</template>

<script>

    import CommonOffice from "./askDoctorPage/commonOffice"

    export default {
        name: "askDocutorAdinOffic",
        components: {
            CommonOffice
        },
        props: {
            officeMessage: {
                type: Array
            }
        }
    }
</script>