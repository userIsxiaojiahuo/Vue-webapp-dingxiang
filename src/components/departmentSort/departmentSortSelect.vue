<template>
    <div>
        <!--  选择科室-->
        <div class="departmentSortSelectWrap">
            <div class="departmentSortSelect">
                <div class="sortSelectLt">
                    选择科室
                </div>
                <div class="deparmentClassify" @click="handleClickBack()">
                    <img src="../../assets/img/diagonseImg/icon_classify.png" alt="">
                </div>
            </div>
        </div>
        <!--  列表-->
        <div class="departmentSorItem">
            <ul>
                <li v-for="(item,index) in diagonseListDeparment"
                    @click="handleClickLi(index)"
                    :class="{deparmentListsLis:index===clickLi}"
                >{{item}}
                </li>
            </ul>
        </div>
    </div>
<<<<<<< HEAD
=======
    <!--  列表-->
    <div class="departmentSorItem">
      <ul>
        <li v-for="(item,index) in diagonseListDeparment"
            @click="handleClickLi(index)"
            :class="{deparmentListsLis:index===clickLi}"
        >{{item.name}}
        </li>
      </ul>
    </div>
  </div>
>>>>>>> f99337fa1de7787d77837350c180b99687abac26
</template>

<script>
    export default {
        name: "departmentSortSelect",
        props: ["diagonseListDeparment"],
        data() {
            return {
                clickLi: 0
            }
        },
        methods: {
            handleClickBack() {
                this.$router.push({
                    path: "/Diagonse"
                })
            },
            handleClickLi(index) {
                this.clickLi = index;
            }
        }
    }
</script>


<style scoped>

    /*选择科室*/
    .departmentSortSelect {
        width: 100%;
        height: 97px;
        background: #fff;
        color: #999;
        font-size: 26px;
        padding: 0 0 0 31px;
        display: flex;
    }

    .sortSelectLt {
        width: 87.66%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .deparmentClassify {
        width: 12.26%;
        height: 100%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #28b7a3;
    }

    .deparmentClassify > img {
        width: 32px;
        height: 32px;
    }

    /*科室列表*/
    .departmentSorItem {
        margin: 30px 24px 0;
        background: #fff;
    }

    .departmentSorItem .deparmentListsLis {
        border: 1px solid #28b7a3;
        color: #28b7a3;
    }

    .departmentSorItem > ul > li {
        margin: 10px 16px;
        float: left;
        font-size: 28px;
        width: 315px;
        height: 85px;
        border: 2px solid #d9d9d9;
        border-radius: 7px;
        line-height: 85px;
        text-align: center;
    }

</style>
