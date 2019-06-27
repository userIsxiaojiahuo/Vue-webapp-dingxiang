<template>
    <div class="famous">
        <div class="flexDiv" v-for="(item,index) in famousRouter" :key="index">
            <FamousDoctors :message="item" :index="index"></FamousDoctors>
        </div>
    </div>
</template>

<script>
    import FamousDoctors from "./askDoctorPage/famousDoctors"

    export default {
        name: "askDoctorFamous",
        components: {
            FamousDoctors
        },
        props: {
            famousRouter: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .famous {
        display: flex;
        height: 148px;
        justify-content: center;
        align-items: center;
    }

    .flexDiv {
        flex: 1;
    }
</style>