<template>
    <div class="doctorSelect">
        <van-dropdown-menu class="zSelect" :z-index="999" active-color="#333">
            <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
        <div class="zSelect cnCity">
            <p @click="handlePdom">{{city?city:"全国"}}</p>
            <van-popup v-model="show" position="bottom">
                <van-area :area-list="areaList" :columns-num="2" title="" ref="three" @confirm="one" @cancel="two"/>
            </van-popup>
        </div>
        <AllIllness class="allIllnessDiv"></AllIllness>
        <SelectOffice></SelectOffice>
    </div>
</template>

<script>
    import {DropdownMenu, DropdownItem, Picker, Area, Popup} from 'vant';
    import 'vant/lib/index.css';
    import AllIllness from "./allIllness"
    import SelectOffice from "./selectOffice"
    import area from "../../../../static/js/area.js"


    export default {
        name: "pullDownSelect",
        components: {
            "van-dropdown-menu": DropdownMenu,
            "van-dropdown-item": DropdownItem,
            "van-picker": Picker,
            "van-area": Area,
            "van-popup": Popup,
            AllIllness,
            SelectOffice
        },
        data() {
            return {
                show: false,
                value1: 0,
                option1: [
                    {text: '综合排序', value: 0},
                    {text: '回答次数', value: 1},
                    {text: '星级评分', value: 2},
                    {text: '响应时间', value: 3},
                    {text: '价格从低到高', value: 4},
                    {text: '价格从高到低', value: 5}
                ],
                areaList: area,
                city: ""
            }
        },
        methods: {
            onChange(picker, values) {
                picker.setColumnValues(1, citys[values[0]]);
            },
            handlePdom() {
                this.show = true
            },
            two() {
                this.show = false
            },
            one(val) {
                this.city = val[1].name;
                this.show = false
            }
        }

    }
</script>

<style scoped>
    .doctorSelect {
        display: flex;
        align-items: center;
        z-index: 999;
        position: relative;
        justify-content: space-around;
    }

    .zSelect {
        float: left;
    }

    .van-dropdown-menu__title {
        display: -webkit-box;
        /*overflow: hidden;*/
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        overflow: hidden;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
    }

    /*.cnCity, .allIllnessDiv {*/
    /*    margin-left: 80px;*/
    /*}*/

    .cnCity > p {
        font-size: 30px;
    }

    .doctorSelect {
        padding-left: 40px;
        /*overflow: hidden;*/
    }

</style>