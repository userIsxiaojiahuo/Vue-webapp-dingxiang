<template>
    <div>
        <div class="doctorInfoFooterCon" @click="handleClick">
            向{{doctorMessage.name}}医生提问
        </div>
        <div>
            <van-popup
                    v-model="isShow"
                    position="bottom"
                    :style="{ height: '48%' }"
            >
            </van-popup>
        </div>
    </div>
</template>

<script>
    import {Popup} from 'vant';

    export default {
        name: "doctorInfoFooter",
        data() {
            return {
                show: false,
                isShow: false
            }
        },
        components: {
            "van-popup": Popup
        },
        props: {
            doctorMessage: {
                type: Object
            }
        },
        methods: {
            handleClick() {
                this.isShow = true
            }
        }
    }
</script>