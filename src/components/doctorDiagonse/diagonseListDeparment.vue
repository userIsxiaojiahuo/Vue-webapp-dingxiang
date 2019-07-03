<template>
    <!--  科室分类-->
    <div class="deparmentListsWarp">
        <div class="deparmentLists">
            <ul>
                <li v-for="(item,index) in diagonseListDeparment"
                    @click="handleClickLi(index)"
                    :key="index"
                    :class="{deparmentListsLi:index===clickLi}"
                >
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="deparmentClassify" @click="handleClickDiv()">
            <img src="../../assets/img/diagonseImg/icon_classify.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "diagonseListDeparment",
        props: ["diagonseListDeparment"],
        data() {
            return {
                clickLi: 0
            }
        },
        methods: {
            handleClickDiv() {
                this.$router.push({
                    path: "/doctorDiagonse"
                })
            },
            handleClickLi(index) {
                this.clickLi = index;
            }
        }
    }
</script>

<style scoped>
    .deparmentListsWarp {
        width: 100%;
        height: 97px;
        background: #28b7a3;
        color: #fff;
        font-size: 28px;
        display: flex;
    }

    .deparmentLists {
        overflow-x: auto;
        width: 87.66%;
        margin: 0 27px 0 0;
    }

    /*去掉横向滚动条*/
    .deparmentLists::-webkit-scrollbar {
        display: none;
    }

    .deparmentLists > ul {
        width: 140%;
        height: 100%;
    }

    .deparmentLists > ul > li {
        float: left;
        padding: 0 27px;
        height: 100%;
        line-height: 97px;
    }

    .deparmentLists > ul {
        width: 770%;
        height: 100%;
    }

    .deparmentLists > ul > li {
        float: left;
        padding: 0 27px;
        height: 100%;
        line-height: 97px;
        flex-wrap: nowrap;
    }

    .deparmentClassify {
        width: 12.26%;
        height: 100%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .deparmentClassify::before {
        content: '';
        width: 1px; /*no*/
        height: 32px;
        background: #fff;
        position: absolute;
        left: 0;
    }

    .deparmentClassify > img {
        width: 32px;
        height: 32px;
    }

    .deparmentListsLi {
        background: #219c8b;
    }
</style>
