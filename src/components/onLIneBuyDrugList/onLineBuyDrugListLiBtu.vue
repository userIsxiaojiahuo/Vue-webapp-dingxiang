<template>
	<div class="onLIne_list_price">
	  <span class="drug_price">￥{{drugLists}}</span>
	  <span @click.stop="choiceDrug(drugListInndexs)" class="drug_btu" v-if="isChoiceDrugBtus?isChoiceDrugBtus:drugListInndexs!=isChoiceDrugBtu">选择该药</span>
	  <div v-if="isDrugNumBtus?drugListInndexs==isDrugNumBtu:isDrugNumBtus" class="drug_num_btu">
		<img @click.stop="btuReduce" class="drug_num_btu_reduce" src="../../assets/onLineImg/ic_cut_drug.png">
	    <span ref="drugNum">{{DrugNum}}</span>
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
		props:["drugLists","drugListInndexs","drugIndex","IsShowDrugBtu"],
		data(){
			return{
				isDrugNumBtu:-1,
				isChoiceDrugBtu:-1,
				isChoiceDrugBtus:true,
				isDrugNumBtus:false,
				DrugNum:0
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
				let tar = this;
				let token = common.getCookie("token");
				this.isDrugNumBtu = index;
				this.isChoiceDrugBtu = index;
				let url = 'http://121.199.63.71:9006/add_cart/';
				this.$axios({
					method: 'get',
					url: 'http://121.199.63.71:9006/add_cart/?token='+token+'&med_id='+this.drugIndex,
				})
				.then(function (response) {
					if(response.data.code==200){
						tar.isChoiceDrugBtus = false;
						tar.isDrugNumBtus = true;
						tar.DrugNum = response.data.data[0].c_med_num;
						tar.$emit("toalNume",response.data.data[1].med_kind)
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			btuAdd(){
				let num = parseInt(this.$refs.drugNum.innerHTML);
				num++;
				if(num<=20){
					console.log(num);
					let tar = this;
					let token = common.getCookie("token");
					let url = 'http://121.199.63.71:9006/add_cart/';
					this.$axios({
						method: 'get',
						url: 'http://121.199.63.71:9006/add_cart/?token='+token+'&med_id='+this.drugIndex,
					})
					.then(function (response) {
						if(response.data.code==200){
							tar.isChoiceDrugBtus = false;
							tar.isDrugNumBtus = true;
							tar.DrugNum = response.data.data[0].c_med_num;
							tar.$emit("toalNume",response.data.data[1].med_kind)
						}
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				
			},
			btuReduce(){
				let tar = this;
				let num = parseInt(this.$refs.drugNum.innerHTML);
				let token = common.getCookie("token");
				num--;
				this.$axios({
					method: 'get',
					url: 'http://121.199.63.71:9006/sub_cart/?token='+token+'&med_id='+this.drugIndex,
				})
				.then(function (response) {
					if(response.data.code==200){
						tar.DrugNum = response.data.data[0].c_med_num;
						tar.$emit("toalNume",response.data.data[1].med_kind)
					}
				})
				.catch(function (error) {
					console.log(error);
				});
				if(num<=0){
					num = 0;
					tar.isChoiceDrugBtus = true;
					tar.isDrugNumBtus = false;
				}
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
