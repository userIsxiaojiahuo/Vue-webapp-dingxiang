<template>
	<div class="onLIne_list_price">
	  <span class="drug_price">￥{{drugLists}}</span>
	  <span @click.stop="choiceDrug(drugListInndexs)" class="drug_btu" v-if="isDrugBtu?isChoiceDrugBtu!=drugListInndexs:isDrugBtu">选择该药</span>
	  <div v-if="isDrugBtu?isDrugNumBtu==drugListInndexs:true" class="drug_num_btu">
		<img @click.stop="btuReduce" class="drug_num_btu_reduce" src="../../assets/onLineImg/ic_cut_drug.png">
	    <span ref="drugNum">1</span>
	    <img @click.stop="btuAdd" class="drug_num_btu_add" src="../../assets/onLineImg/ic_add_drug.png">
	  </div>
	</div>
</template>
<!-- .native -->
<script>
	/* 药品列表的li 的价格组件 */
	export default {
		name:"onLineBuyDrugListLiBtu",
		props:["drugLists","drugListInndexs","isDrugBtu"],
		data(){
			return{
				isDrugNumBtu:-1,
				isChoiceDrugBtu:-1
			}
		},
		computed:{
			calculationPrice:function(){
				let num = this.$refs.drugNum.innerHTML;
				let cartPirce = parseInt((parseInt(num) * this.drugLists)*100)/100
				return cartPirce
			}
		},
		methods:{
			choiceDrug(index){
				this.isDrugNumBtu = index;
				this.isChoiceDrugBtu = index;
			},
			btuAdd(){
				let num = parseInt(this.$refs.drugNum.innerHTML);
				num++;
				this.$refs.drugNum.innerHTML = num;
				
				// this.$emit("cartZoPirce",this.calculationPrice)
				console.log(this.calculationPrice)
			},
			btuReduce(){
				let num = parseInt(this.$refs.drugNum.innerHTML);
				if(num > 1){
					num--;
				}
				this.$refs.drugNum.innerHTML = num;
				console.log(this.calculationPrice)
			}
		}
	}
</script>
 
<style scoped>
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
