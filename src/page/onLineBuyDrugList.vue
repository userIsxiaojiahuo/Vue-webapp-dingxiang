<template>
	<div class="onLIneBuyDrugList">
		<!-- 公共的头部 -->
		<HeaderReturn :headerReturnTitle="headerReturn">
			<!-- 头部里面的搜索框 -->
			<OnLineBuyListHeaber :onLineSearch="search"/>
		</HeaderReturn>
		<!-- 药品列表 -->
		<OnLineBuyDrugListUl :drugList="drug"/>
		<!-- 药品列表底部购物车和购买按钮 -->
		<OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
			<!-- 在线购药底部购物车按钮的图片和内容 -->
			<OnLineFootCratBtu/>
		</OnLineBuyFoot>
	</div>
</template>

<script>
	/* 头部返回 */
	import HeaderReturn from '../common/headerReturn.vue'
	/* 搜索 */ 
	import OnLineBuyListHeaber from '../components/onLIneBuyDrugList/onLineBuyListHeaber.vue'
	/* 药品列表 */
	import OnLineBuyDrugListUl from '../components/onLIneBuyDrugList/onLineBuyDrugListUl.vue'
	/* 药品列表底部购物车和购买按钮 */
	import OnLineBuyFoot from '../common/onLineBuyFoot.vue'
	/* 在线购药底部购物车按钮的图片和内容 */
	import OnLineFootCratBtu from '../components/onLIneBuyDrugList/onLineFootCratBtu.vue'
	/* 本组件在线购药药品列表 */
	export default{
		name:"onLIneBuyDrugList",
		components:{
			HeaderReturn,
			OnLineBuyListHeaber,
			OnLineBuyDrugListUl,
			OnLineBuyFoot,
			OnLineFootCratBtu
		},
		data(){
			return{
				headerReturn:{
					title:"",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
				search:{
					pic:require("../assets/onLineImg/ic_search_after.png"),
					title:"痘痘"
				},
				drug:[
					{
						pic:require("../assets/onLineImg/drug-1.png"),
						isPrescription:true,
						drugName:"泰尔丝(异维A酸胶丸)",
						drugpackage:"10mgx20粒/盒",
						indications:"适用于重度难治性结节性痔疮(结节性痔疮，即直径≥5mm的炎性损害，结节可能化脓或出血)。适用于重度难治性结节",
						drugPirce:35.60,
						drugNum:0
					},
					{
						pic:require("../assets/onLineImg/drug-1.png"),
						isPrescription:false,
						drugName:"泰尔丝(异维A酸胶丸)",
						drugpackage:"10mgx20粒/盒",
						indications:"适用于重度难治性结节性痔疮(结节性痔疮，即直径≥5mm的炎性损害，结节可能化脓或出血)。适用于重度难治性结节",
						drugPirce:35.60,
						drugNum:0
					}
				],
				onLineBuyFoot:"选择药品"
			}
		}
	}
</script>

<style scoped>
	.onLIneBuyDrugList{
		width: 100%;
	}
</style>
