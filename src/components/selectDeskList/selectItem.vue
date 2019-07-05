<template>
  <div>
    <div class="selectItem" v-for="(item,index) in selectItem" :key="index" @click="clickDesk(item.med_name,item.med_name_id)">
      <p class="selectItemTitle">{{item.med_name?item.med_name:item.selectItemTitle}}</p>
      <div class="selectItemCon">
        <p class="selectItemdDesc">{{item.manufacturer?item.manufacturer:item.selectItemdDesc}}</p>
        <span class="rightArrow"><img src="../../assets/img/diagonseImg/hcp_into.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "selectItem",
    props: ["selectItem"],
    methods: {
      clickDesk(val,drugId) {
				if(!val){
					this.$router.push({
					  path: "/callEmergency"
					})
				}else{
					this.$router.push({
						path: "/drugDetails",
						query:{
							id:drugId
						}
					})
				}
      }
    }
  }
</script>

<style scoped>
  .selectItem {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    padding: 0 32px;
  }

  .selectItemTitle {
    font-size: 30px;
    color: #333333;
    line-height: 110px;
    font-weight: 600;
  }

  .selectItemCon {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .selectItemdDesc {
    font-size: 26px;
    color: #999999;
    line-height: 40px;
    display: inline-block;
  }

  .rightArrow {
    margin-left: 40px;
  }

  .rightArrow > img {
    width: 14px;
    height: 26px;
  }
</style>
