<template>
    <div class="business">
        <ul class="businessUls">
            <li><i>平均响应:{{doctorMessage.upTime}}分钟</i></li>
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

<style scoped>
    .business {
        display: flex;
        padding: 10px 20px 20px 30px;
    }

    .businessUls {
        flex: 2;
        float: left;
        display: flex;
    }

    .businessBtn {
        width: 38px;
        float: right;
        background: url("../../assets/images/askdoctor/doctorInfo/ic_clickarrow_n.png") no-repeat right center;
        background-size: 18px 10px;
    }

    .businessUls > li {
        padding-right: 30px;
    }

    .businessUls > li > i {
        margin-left: 5px;
        font-size: 20px;
        color: #666666;
    }

    .businessUls > li::before {
        display: inline-block;
        content: "";
        width: 30px;
        height: 30px;
        background: url("../../assets/images/askdoctor/doctorInfo/ic_tag.png") no-repeat left center;
        background-size: cover;
        vertical-align: middle;
    }
</style>