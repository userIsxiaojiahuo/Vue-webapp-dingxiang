<template>
  <div class="onLIneBuyDrugListLi">
    <div class="onLIne_list_img">
      <img :src="drugList.pic"/>
      <span v-if="drugList.isPrescription">处方药</span>
    </div>
    <div class="onLIne_list_text">
      <h2><span>{{drugList.drugName}}</span><span>{{drugList.drugpackage}}</span></h2>
      <p class="drugDetails">{{drugList.indications}}</p>
      <div class="onLIne_list_price">
        <span class="drug_price">￥{{drugList.drugPirce}}</span>
        <span @click="choiceDrug(drugListInndex)" class="drug_btu" v-if="isChoiceDrugBtu!=drugListInndex">选择该药</span>
        <div v-if="isDrugNumBtu==drugListInndex" class="drug_num_btu">
          <img class="drug_num_btu_add" src="../../assets/onLineImg/ic_cut_drug.png">
          <span>1</span>
          <img class="drug_num_btu_reduce" src="../../assets/onLineImg/ic_add_drug.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
	/* 药品列表的li */
	export default{
		name:"onLineBuyDrugListLi",
		props:["drugList","drugListInndex"],
		data(){
			return{
				isDrugNumBtu:-1,
				isChoiceDrugBtu:-1
			}
		},
		methods:{
			choiceDrug(index){
				this.isDrugNumBtu = index;
				this.isChoiceDrugBtu = index;
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
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 30px;
    color: #999999;
  }

  .onLIne_list_price {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
		margin-top: 10px;
  }

  .drug_price {
    color: #28b7a3;
    font-size: 22px;
    font-weight: 600;
  }

  .drug_btu {
    display: inline-block;
    width: 152px;
    height: 54px;
    background: #28b7a3;
    color: #fff;
    font-size: 24px;
    border-radius: 4px;
    text-align: center;
    line-height: 54px;
  }

  .drug_num_btu {
    width: 182px;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .drug_num_btu > img {
    height: 100%;
  }

  .drug_num_btu > span {
    color: #333333;
    font-size: 22px;
  }
</style>
