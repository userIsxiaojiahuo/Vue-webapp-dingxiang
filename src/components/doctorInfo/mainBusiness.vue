<template>
    <div class="business">
        <ul class="businessUls">
            <li><i>平均响应:{{doctorMessage.doctorMess.upTime}}分钟</i></li>
            <li><i>丁香力荐</i></li>
            <li><i>可开处方</i></li>
        </ul>
        <div class="businessBtn"></div>
    </div>
</template>

<script>
    export default {
        name: "mainBusiness",
        props: {
            doctorMessage: {
                type: Object
            }
        }
    }
</script>
