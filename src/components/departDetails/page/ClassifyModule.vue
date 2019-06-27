<template>
    <div class="classifyCon"
         :style="{
            'background':'url(' + message.bg + ')' + 'no-repeat',
             'backgroundSize':'cover'
    }"
    >
        <div class="classifyConLfet">
            <h3>{{message.title}}</h3>
            <p>精选医生榜</p>
        </div>
        <div class="classifyConRight">
            <img :src="message.headerImg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "illnessClassify",
        props: {
            message: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>