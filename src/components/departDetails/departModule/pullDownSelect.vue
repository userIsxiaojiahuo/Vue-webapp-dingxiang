<template>
    <div class="doctorSelect">
        <van-dropdown-menu class="zSelect" :z-index="999" active-color="#333">
            <van-dropdown-item v-model="value1" :options="option1"/>
        </van-dropdown-menu>
        <div class="zSelect cnCity">
            <p @click="handlePdom">全国</p>
            <van-picker v-if="show" :columns="columns" @change="onChange"/>
        </div>
    </div>
</template>

<script>
    import {DropdownMenu, DropdownItem, Picker} from 'vant';
    import 'vant/lib/index.css';

    const citys = {
        '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        '福建': ['福州', '厦门', '莆田', '三明', '泉州']
    };


    export default {
        name: "pullDownSelect",
        components: {
            "van-dropdown-menu": DropdownMenu,
            "van-dropdown-item": DropdownItem,
            "van-picker": Picker
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
                columns: [
                    {
                        values: Object.keys(citys),
                        className: 'column1'
                    },
                    {
                        values: citys['浙江'],
                        className: 'column2',
                        defaultIndex: 2
                    }
                ]
            }
        },
        methods: {
            onChange(picker, values) {
                picker.setColumnValues(1, citys[values[0]]);
            },
            handlePdom() {
                this.show = !this.show
            }
        }

    }
</script>

<style scoped>
    .doctorSelect {
        z-index: 999;
        position: relative;
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

    .cnCity {
        margin-left: 50px;
        padding-top: 28px;
    }

    .cnCity > p {
        font-size: 30px;
    }

    .doctorSelect {
        padding-left: 40px;
        overflow: hidden;
    }

</style>