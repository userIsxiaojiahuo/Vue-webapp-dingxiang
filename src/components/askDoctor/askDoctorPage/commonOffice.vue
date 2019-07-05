<template>
    <ul class="classifyUls">
        <div class="classifyUlsDiv">
            <li v-for="(itemB,lis) in officeMessage" :key="lis"
                @click="handleClick(itemB.id,itemB.name)">
                <OfficImg :images="itemB.img" v-if="itemB.img"></OfficImg>
                <OfficeText :title="itemB.name" :show="show"></OfficeText>
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
        data() {
            return {
                show: false
            }
        },
        props: {
            officeMessage: {
                type: Array
            }
        },
        methods: {
            handleClick(index, name) {
                this.$router.push({
                    path: "/departDetails",
                    query: {
                        id: index,
                        name: name
                    }
                })
            }
        },
        created() {
            for (let i = 0; i < this.officeMessage.length; i++) {
                if (this.officeMessage[i].id <= 9) {
                    this.show = true
                } else {
                    this.show = false
                }
            }
        }
    }
</script>