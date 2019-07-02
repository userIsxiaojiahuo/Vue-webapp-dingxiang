<template>
  <ul class="onLIneBuyDrugListUl">
    <li @click.stop="showPopup" class="onLIneBuyDrugListUl_li"
        v-for="(item,index) in drugList"
        :key="index"
    >
      <!-- 药品列表的li -->
      <OnLineBuyDrugListLi :drugList="item" :drugListInndex="index" :isDrugBtu="isDrugBtu" @cartZoPirce="cartZoPirce"/>
    </li>
	<van-popup v-model="show" position="bottom" :style="{ height: '90%' }">
		<!-- 药品详情 -->
		<DrugDetails @isNoDrugDetails="isNoDrugDetails"/>
	</van-popup>
  </ul>
</template>

<script>
	/* 药品列表的li */
	import OnLineBuyDrugListLi from './onLineBuyDrugListLi.vue'
	/* 药品详情 */
	import DrugDetails from "../../page/drugDetails"
	/* 药品列表 */
	export default{
		name:"onLineBuyDrugListUl",
		props:["drugList","isDrugBtu"],
		components:{
			OnLineBuyDrugListLi,
			DrugDetails
		},
		data(){
			return{
				show: false,
			}
		},
		methods:{
			showPopup() {
			  this.show = true;
			},
			isNoDrugDetails(val){
				this.show = val;
			},
			cartZoPirce(val){
				this.$emit("@cartZoPirce",val)
			}
		}
	}
</script>

<style>
</style>
