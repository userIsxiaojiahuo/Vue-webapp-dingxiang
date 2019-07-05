<template>
  <ul class="onLIneBuyDrugListUl">
    <li @click="showPopup(item.id)" class="onLIneBuyDrugListUl_li"
        v-for="(item,index) in drugList"
        :key="index"
    >
      <!-- 药品列表的li -->
      <OnLineBuyDrugListLi :drugList="item" :drugListInndex="index" @cartZoPirce="cartZoPirce" @toalNume="toalNume"/>
    </li>
	<van-popup v-model="show" position="bottom" :style="{ height: '90%' }">
		<!-- 药品详情 -->
		<DrugDetails @isNoDrugDetails="isNoDrugDetails" :drugIndex="drugIndex" :IsShowDrugBtu="IsShowDrugBtu"/>
	</van-popup>
	<div class="onLineBuyDrugFootTips">
		<span>已到底部</span>
	</div>
  </ul>
</template>

<script>
	// import newVue from "../../assets/js/newVue.js"
	/* 药品列表的li */
	import OnLineBuyDrugListLi from './onLineBuyDrugListLi.vue'
	/* 药品详情 */
	import DrugDetails from "../../page/drugDetails"
	/* 药品列表 */
	export default{
		name:"onLineBuyDrugListUl",
		props:["drugList"],
		components:{
			OnLineBuyDrugListLi,
			DrugDetails
		},
		data(){
			return{
				show: false,
				drugDetails:{},
				drugIndex:0,
				IsShowDrugBtu:true
			}
		},
		methods:{
			showPopup(val) {
				this.drugIndex = val;
				this.show = true;
			},
			isNoDrugDetails(val){
				this.show = val;
			},
			cartZoPirce(val){
				this.$emit("cartZoPirce",val)
			},
			toalNume(val){
				this.$emit("toalNume",val)
			}
		}
	}
</script>

<style>
</style>
