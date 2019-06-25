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

<style scoped>
    .askWay {
        background: #f4f4f4;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .askWayContent {
        background: white;
        display: flex;
        justify-content: space-between;
        line-height: 124px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .askWayContent > h3 {
        font-size: 30px;
        color: #333333;
    }

    .askWayPrice > span {
        font-size: 26px;
        color: #666666;
    }

    .askWayPrice > span > i {
        font-size: 22px;
        color: #28b7a3;
        letter-spacing: 0;
        font-weight: bolder;
    }

    .askWayPrice > span:last-child {
        padding-left: 25px;
    }
</style>