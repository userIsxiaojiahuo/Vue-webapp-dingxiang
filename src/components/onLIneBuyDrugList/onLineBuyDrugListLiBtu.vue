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
	import common from "../../assets/js/common.js"
	/* 药品列表的li 的价格组件 */
	export default {
		name:"onLineBuyDrugListLiBtu",
		props:["drugLists","drugListInndexs","isDrugBtu","drugIndex"],
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
				let token = common.getCookie("token");
				console.log(token);
				this.isDrugNumBtu = index;
				this.isChoiceDrugBtu = index;
				let url = 'http://121.199.63.71:9006/add_cart/';
				// ?token='+token+'&med_id:'+this.drugIndex
				// {"token":token,"med_id":this.drugIndex}
				// console.log(this.drugIndex);
				// console.log(token);
// 				this.$axios.get(url,{token:token,"med_id:this.drugIndex})
// 				.then((response)=>{
// 					if(response.data.code==200){
// 						this.$store.dispatch('GetInfo', false);
// 					}
// 					console.log(response);
// 				})
// 				.catch((error)=>{
// 					console.log(error)
// 				})
				this.$axios({
					methods:"get",
					url:'http://121.199.63.71:9006/add_cart/?' + 'token='+token+'&med_id:'+this.drugIndex
				}).then((dataed)=>{
					console.log(dataed)
				}).catch((error)=>{
					console.log(error);
				})
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
	}
	
	.drug_price {
	  color: #28b7a3;
	  font-size: 30px;
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
