<template>
    <div class="doctorDisabuse">
        <a href="javascript:;" @click="disabuse()">
            <img :src="controlImg" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "AskDoctorControl",
        props: {
            controlImg: {
                type: String
            }
        },
        methods: {
            disabuse() {
                this.$router.push({
                    path: "",
                    query: {
                        id: ""
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .doctorDisabuse {
        width: 100%;
        height: 90px;
    }

    .doctorDisabuse > a {
        display: block;
    }

    .doctorDisabuse > a > img {
        width: 100%;
        height: 100%;
    }
</style>