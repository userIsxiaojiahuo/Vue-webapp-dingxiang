<template>
  <div class="onLIneBuyDrugListLi">
    <div class="onLIne_list_img">
      <img :src="drugList.pic"/>
      <span v-if="drugList.isPrescription">处方药</span>
    </div>
    <div class="onLIne_list_text">
      <h2><span>{{drugList.drugName}}</span><span>{{drugList.drugpackage}}</span></h2>
      <p class="drugDetails">{{drugList.indications}}</p>
			<!-- 药品列表的li 的价格组件 -->
			<OnLinenBuyDrugListLiBtu :drugLists="drugList.drugPirce" :drugListInndexs="drugListInndex" :isDrugBtu="isDrugBtu" @cartZoPirce="cartZoPirce" />
    </div>
  </div>
</template>

<script> 
	/* 药品列表的li 的价格组件 */
	import OnLinenBuyDrugListLiBtu from "./onLineBuyDrugListLiBtu"
	/* 药品列表的li */
	export default{
		name:"onLineBuyDrugListLi",
		props:["drugList","drugListInndex","isDrugBtu"],
		components:{
			OnLinenBuyDrugListLiBtu
		},
		methods:{
			cartZoPirce(val){
				this.$emit("@cartZoPirce",val)
			}
		}
	}
</script>

<style scoped>
  .onLIneBuyDrugListLi {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .onLIne_list_img {
    width: 170px;
    height: 170px;
    flex: 0 0 24.63%;
    position: relative;
    margin-right: 20px;
  }

  .onLIne_list_img > img {
    width: 100%;
    height: 100%;
  }

  .onLIne_list_img > span {
    display: block;
    width: 100%;
    height: 56px;
    background: #666666;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 56px;
    font-size: 26px;
    color: #fff;
  }

  .onLIne_list_text {
    height: 100%;
  }

  .onLIne_list_text > h2 {
    font-size: 30px;
    color: #000;
  }

  .onLIne_list_text > h2 > span:first-of-type {
    display: inline-block;
    width: 222px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 34px;
    letter-spacing: 1px; /*no*/
  }

  .onLIne_list_text > h2 > span:last-of-type {
    vertical-align: top;
    letter-spacing: 1px; /*no*/
  }

  .drugDetails {
    width: 100%;
    text-overflow: -o-ellipsis-lastline;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 30px;
    color: #999999;
  }
</style>
