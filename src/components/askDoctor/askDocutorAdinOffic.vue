<template>
    <div class="askDoctorContent">
        <div class="administrativeOffice" v-for="(item,index) in officeMessage" :key="index">
            <h3>{{item.title}}</h3>
            <CommonOffice :officeMessage="item.classify"></CommonOffice>
        </div>
        <div class="blankDiv"></div>
    </div>
</template>

<script>

    import CommonOffice from "../commonOffice"

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

<style scoped>
    .askDoctorContent {
        padding-top: 20px;
        background: #f4f4f4;
    }

    .administrativeOffice {
        padding-top: 33px;
        background: #fff;
    }

    .administrativeOffice > h3 {
        padding-left: 30px;
        padding-bottom: 13px;
        font-size: 26px;
        color: #999999;
        letter-spacing: 2px;
    }

    .blankDiv {
        width: 100%;
        height: 140px;
        background: white;
    }
</style>