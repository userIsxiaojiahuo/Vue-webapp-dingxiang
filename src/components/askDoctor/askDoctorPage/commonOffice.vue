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
    import OfficeText from "../askDoctorPublic/officeText"
    import OfficImg from "../askDoctorPublic/officeImg"

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