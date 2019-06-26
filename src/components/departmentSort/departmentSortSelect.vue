<template>
  <div>
    <!--  选择科室-->
    <div class="departmentSortSelectWrap">
      <div class="departmentSortSelect">
        <div class="sortSelectLt">
          选择科室
        </div>
        <div class="deparmentClassify" @click="handleClickBack()">
          <img src="../../assets/diagonseImg/icon_classify.png" alt="">
        </div>
      </div>
    </div>
    <!--  列表-->
    <div class="departmentSorItem">
      <ul>
        <li v-for="(item,index) in diagonseListDeparment"
            @click="handleClickLi(index)"
            :class="{deparmentListsLis:index==clickLi}"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "departmentSortSelect",
    props: ["diagonseListDeparment"],
    data(){
      return{
        clickLi:0
      }
    },
    methods: {
      handleClickBack() {
        this.$router.push({
          path: "/Diagonse"
        })
      },
      handleClickLi(index){
        this.clickLi = index;
      }
    }
  }
</script>


