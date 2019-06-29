<template>
    <div class="selectDeskBox">
      <div class="selectDeskCon"
           v-for="(item,index) in selectDesk"
           @click="handleClickDiv(index)"
           :class="{callListsLi:index==clickDiv}" >
        <div class="selectDeskConTitle">{{item.deskTitle}}
          <span class="selectDeskDesc">{{item.deskDes}}</span>
        </div>
      </div>
      <div class="selectDeskCon" @click="handleAllDesk()">
        <div class="selectDeskConTitle">全部科室</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "selectDesk",
    props:["selectDesk"],
    data(){
      return{
        clickDiv:0
      }
    },
    methods:{
      handleClickDiv(index){
        this.clickDiv = index;
      },
      handleAllDesk(){
        this.$router.push({
          path: "/selectDeskList",
          query: {
            id: 0
          }
        })
      }
    }
  }
</script>


