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
      }
    }
  }
</script>

<style scoped>
  .selectDeskCon{
    width: 214px;
    height: 146px;
    background: #fff;
    border: 1px solid #ebebeb;/*no*/
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    color: #333333;
  }
  .selectDeskBox{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1;
    border-bottom: 1px solid #ebebeb;/*no*/
  }
  .selectDeskConTitle{
    font-size: 30px;
    font-weight: 600;
    padding: 0 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .selectDeskConTitle .selectDeskDesc{
    display: block;
    font-size: 22px;
    color: #999999;
    margin-top: 6px;
  }
  .callListsLi{
    color: #4ac8b0;
    background: #f0f8fa;
    border:1px solid #4ac8b0;
  }
  .callListsLi .selectDeskDesc{
    color:#4ac8b0;
  }
</style>
