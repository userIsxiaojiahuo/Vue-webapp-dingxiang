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
