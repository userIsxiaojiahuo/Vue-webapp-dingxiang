<template>
    <div class="askWay">
        <div class="askWayContent">
            <h3>问诊方式</h3>
            <div class="askWayPrice">
                <span>图文
                    <i class="askWayPriceIDom">￥{{doctorMessage.imgPrice}}</i>
                </span>
                <span>电话
                    <i class="askWayPriceIDom">￥{{doctorMessage.phonePrice}}</i>
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