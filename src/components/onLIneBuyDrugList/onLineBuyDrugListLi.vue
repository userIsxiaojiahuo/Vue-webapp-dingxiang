<template>
  <div class="onLIneBuyDrugListLi">
    <div class="onLIne_list_img">
      <img :src="drugList.med_img"/>
    </div>
    <div class="onLIne_list_text">
      <h2 class="drugList_med_name">药品名: {{drugList.med_name}}</h2>
			<span class="drugList_packing_size">药品规格: {{drugList.packing_size}}</span>
			<span class="drugList_med_stock">库存: {{drugList.med_stock}}盒</span>
			<!-- 药品列表的li 的价格组件 -->
			<OnLinenBuyDrugListLiBtu :drugIndex="drugList.id" :drugLists="drugList.price" :drugListInndexs="drugListInndex" :isDrugBtu="isDrugBtu" @cartZoPirce="cartZoPirce" @clickIsShowDrugBtu="clickIsShowDrugBtu" :IsShowDrugBtu="IsShowDrugBtu"/>
    </div>
  </div>
</template>

<script> 
	/* 药品列表的li 的价格组件 */
	import OnLinenBuyDrugListLiBtu from "./onLineBuyDrugListLiBtu"
	/* 药品列表的li */
	export default{
		name:"onLineBuyDrugListLi",
		props:["drugList","drugListInndex","isDrugBtu","IsShowDrugBtu"],
		components:{
			OnLinenBuyDrugListLiBtu
		},
		methods:{
			cartZoPirce(val){
				this.$emit("cartZoPirce",val)
			},
			clickIsShowDrugBtu(val){
				this.$emit("clickIsShowDrugBtu",val);
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
		width: 100%;
  }

  .drugList_med_name {
    font-size: 35px;
    color: #000;
  }
	.onLIne_list_text>span{
		display:block;
		font-size: 24px;
		color: #000;
	}
	.onLIne_list_text>.drugList_packing_size{
		color: #333333;
	}
	.onLIne_list_text>.drugList_med_stock{
		color: #999;
	}
  .onLIne_list_text > h2 > span:last-of-type {
    vertical-align: top;
    letter-spacing: 1px; /*no*/
  }
</style>
