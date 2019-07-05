<template>
    <div class="askWay">
        <div class="askWayContent">
            <h3>问诊方式</h3>
            <div class="askWayPrice">
                <span>图文
                    <i class="askWayPriceIDom">￥{{doctorMessage.doctorMess.text_price}}</i>
                </span>
                <span v-if="doctorMessage.doctorMess.tel_price">电话
                    <i class="askWayPriceIDom">￥{{doctorMessage.doctorMess.tel_price}}</i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "askDoctorsWay",
        props: {
            doctorMessage: {
                type: Object
            }
        }
    }
</script>