<template>
    <ul class="classifyUls">
        <div class="classifyUlsDiv">
            <router-link to="/departDetails" tag="li" v-for="(itemB,lis) in officeMessage" :key="lis"
                         @click.native="handleClick(itemB.id,itemB.name)">
                <OfficImg :images="itemB.img" v-if="itemB.img"></OfficImg>
                <OfficeText :title="itemB.name" :show="show"></OfficeText>
            </router-link>
        </div>
    </ul>
</template>

<script>
    import OfficeText from "../askDoctorPublic/officeText"
    import OfficImg from "../askDoctorPublic/officeImg"
    import Bug from "../../../assets/js/newVue.js"

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
                Bug.$emit("id", {index, name})
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