<template>
    <div>
        <div class="allillness" @click.stop="showPopup">
            <h3>常见疾病</h3>
            <transition name="fade" v-if="isShow">
                <div class="transFromDiv">
                    123
                </div>
            </transition>
        </div>
        <!--        <van-popup v-model="isShow" :overlay="isshow"  position="top" :style="{ height: '100px' , position:'absolute',top:'50px'}">内容</van-popup>-->
    </div>
</template>

<script>
    // import {DropdownMenu, DropdownItem, Picker} from 'vant';

    export default {
        name: "allIllness",
        data() {
            return {
                isShow: false
            }
        },
        // components: {
        //     "van-dropdown-menu": DropdownMenu,
        //     "van-dropdown-item":DropdownItem
        // },
        methods: {
            showPopup() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style scoped>
    .allillness {
    }

    .transFromDiv {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 750px;
        height: 120px;
        z-index: 50;
        background: red;
    }

    .fade-enter, .fade-leave-to {
        bottom: -120px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 3s;
    }
</style>