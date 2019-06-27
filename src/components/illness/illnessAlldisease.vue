<template>
    <div class="alldisease">
        <p>{{alldiseaseMsg.title}}</p>
        <div class="allright" @click="handle">
            <i :style="{
            'background':'url('+alldiseaseMsg.icon+')'+'no-repeat',
            'backgroundSize':'cover'
            }"
            ></i>
            <p>{{alldiseaseMsg.select}}</p>
        </div>
        <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '380px'}"
        >
            <!--科室分类-->
            <div class="titBox">
                <span>{{alldiseaseMsg.tit}}</span>
                <i :style="{
            'background':'url('+alldiseaseMsg.iconn+')'+'no-repeat',
            'backgroundSize':'cover'
            }"
                   @click="Ishandle"></i>
            </div>
            <div :class="isAll?'active':'all'"
                 @click="currentAll">
                {{alldiseaseMsg.all}}
            </div>
            <div class="classify">
                <p>{{alldiseaseMsg.desk}}</p>
                <ul class="uListall">
                    <li v-for="(item,index) in alldiseaseMsg.own" :key="index" class="uList"
                        :class="currentClass(index)"
                        @click="currentInfo(index)">{{item}}
                    </li>
                </ul>
            </div>
        </van-popup>
    </div>
</template>


<script>
    import {Popup} from 'vant';

    export default {
        name: "illnessAlldisease",
        data() {
            return {
                show: false,
                currentNumber: 0,
                isActive: false,
                isAll: true
            }
        },
        components: {
            "van-popup": Popup,
        },
        props: {
            alldiseaseMsg: {
                type: Object
            }
        },
        methods: {
            handle() {
                this.show = true;
            },
            Ishandle() {
                this.show = false;
            },
            currentInfo(index) {
                this.currentNumber = index;
                this.isAll = false
            },
            currentClass(index) {
                if (!this.isAll) {
                    return [(this.currentNumber == index) ? 'allx' : 'uList'];
                }
            },
            currentAll() {
                this.isActive = true;
                this.isAll = true
            }
        }
    }
</script>

<style scoped>
    .alldisease {
        width: 100%;
        height: 105px;
    }

    .alldisease > p {
        font-size: 30px;
        font-weight: bolder;
        margin-top: 35px;
        margin-left: 30px;
        display: inline-block;
    }

    .allright {
        width: 110px;
        height: 35px;
        float: right;
        display: flex;
        margin-top: 35px;
        margin-right: 30px;
    }

    .allright > i {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-right: 13px;
    }

    .allright > p {
        display: inline-block;
        font-size: 30px;
        font-weight: bolder;
        color: #28b7a3;
    }

    /*科室分类*/
    .titBox {
        width: 100%;
        height: 112px;
        line-height: 112px;
        background-color: #fcfcfc;
        display: flex;
        border-bottom: #ebebeb 1px solid;
    }

    .titBox > span {
        font-size: 30px;
        color: #999999;
        font-weight: bolder;
        margin: 0 auto;
    }

    .titBox > i {
        width: 28px;
        height: 28px;
        float: right;
        margin: auto 20px;
    }

    .uListall {
        width: 100%;
        height: 420px;
        font-weight: 600;
    }

    .classify {
        width: 100%;
        height: 540px;
    }

    .classify > p {
        font-weight: bolder;
        font-size: 30px;
        line-height: 120px;
        margin-left: 30px;
    }

    .uList {
        width: 350px;
        height: 80px;
        border: #d9d9d9 1px solid;
        border-radius: 5px;
        margin-left: 18px;
        float: left;
        line-height: 80px;
        text-align: center;
        margin-top: 18px;
        color: #333333;
        font-size: 28px;
    }

    .all {
        line-height: 80px;
        text-align: center;
        margin-left: 18px;
        width: 350px;
        height: 80px;
        color: #333333;
        border: #d9d9d9 1px solid;
        margin-top: 40px;
        font-weight: bolder;
        font-size: 28px;
    }

    .allx {
        color: #28b7a3;
        border: #28b7a3 1px solid;
    }

    .active {
        line-height: 80px;
        text-align: center;
        margin-left: 18px;
        width: 350px;
        height: 80px;
        color: #28b7a3;
        border: #28b7a3 1px solid;
        margin-top: 40px;
        font-weight: bolder;
        font-size: 28px;
    }
</style>