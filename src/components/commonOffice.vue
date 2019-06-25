<template>
    <ul class="classifyUls">
        <div class="classifyUlsDiv">
            <li v-for="(itemB,lis) in officeMessage" :key="lis" @click="handleClick(lis)">
                <OfficImg :images="itemB.img" v-if="itemB.show"></OfficImg>
                <OfficeText :title="itemB.name" :pDom="itemB.pDom"></OfficeText>
            </li>
        </div>
    </ul>
</template>

<script>
    import OfficeText from "./askDoctor/askDoctorPublic/officeText"
    import OfficImg from "./askDoctor/askDoctorPublic/officeImg"

    export default {
        name: "commonOffice",
        components: {
            OfficeText,
            OfficImg
        },
        props: {
            officeMessage: {
                type: Array
            }
        },
        methods: {
            handleClick(index) {
                this.$router.push({
                    path: "/departDetails",
                    query: {
                        id: index
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .classifyUlsDiv {
        width: 100%;
        overflow: hidden;
        padding: 0 14px 0 14px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .classifyUlsDiv > li {
        display: flex;
        flex-direction: column;
        min-width: 30%;
        margin-top: 16px;
        border-radius: 7px;
        background: #f7f7f7;
        justify-content: center;
        align-items: center;
    }

    .classifyUlsDiv > li > img {
        display: inline-block;
        margin-top: 30px;
        width: 66px;
        height: 66px;
    }

    .classifyUlsDiv > li > p {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 30px;
    }

</style>