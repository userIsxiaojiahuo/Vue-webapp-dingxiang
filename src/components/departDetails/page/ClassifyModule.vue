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
    .classifyCon {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .classifyConLfet {
        padding-left: 20px;
        padding-top: 40px;
        width: 50%;
    }

    .classifyConLfet > h3 {
        font-size: 30px;
        color: #333333;
    }

    .classifyConLfet > p {
        font-size: 20px;
        color: #333333;
    }

    .classifyConRight {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .classifyConRight > img {
        width: 130px;
        height: 60px;
        margin-left: 20px;
    }
</style>