<template>
	<div class="drugDetails">
		<DrugDetailsOpacity/>
		<div class="drugDetails_box">
			<!-- 药品详情页头部关闭 -->
			<DrugDetailsHeader/>
			<div class="onLineBuyDrugListLi_box">
				<!-- 药品图片、价格和数目的加减 -->
				<OnLineBuyDrugListLi :drugList="drug"/>
			</div>
			<!-- 药品详情页的提示 -->
			<DrugDetailsTips :drugDetailsTips="drugDetailsTips"/>
			<!-- 药品包装信息和规格 -->
			<DrugDetailsInformation :drugInformation="drugInformation"/>
			<!-- 药品详情底部的包邮，和承若书 -->
			<DrugDetailsFootTips/>
			<!-- 药品底部购物车和购买按钮 -->
			<OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
				<!-- 在线购药底部购物车按钮的图片和内容 -->
				<OnLineFootCratBtu/>
			</OnLineBuyFoot>
		</div>
	</div>
</template>

<script>
	/* 顶部透明模块 */	
	import DrugDetailsOpacity from '../components/drugDetails/drugDetailsOpacity.vue'
	/* 药品详情页头部关闭 */
	import DrugDetailsHeader from '../components/drugDetails/drugDetailsHeader.vue'
	/* 药品图片、价格和数目的加减 */
	import OnLineBuyDrugListLi from '../components/onLIneBuyDrugList/onLineBuyDrugListLi.vue'
	/* 药品详情页的提示 */
	import DrugDetailsTips from '../components/drugDetails/drugDetailsTips.vue'
	/* 药品包装信息和规格 */	
	import DrugDetailsInformation from '../components/drugDetails/drugDetailsInformation.vue'
	/* 药品详情底部的包邮，和承若书 */
	import DrugDetailsFootTips from '../components/drugDetails/drugDetailsFootTips.vue'
	/* 药品底部购物车和购买按钮 */
	import OnLineBuyFoot from '../common/onLineBuyFoot.vue'
	/* 在线购药底部购物车按钮的图片和内容 */
	import OnLineFootCratBtu from '../components/onLIneBuyDrugList/onLineFootCratBtu.vue'
	/* 药品详情页 */
	export default{
		name:"drugDetails",
		components:{
			DrugDetailsOpacity,
			DrugDetailsHeader,
			OnLineBuyDrugListLi,
			DrugDetailsTips,
			DrugDetailsInformation,
			DrugDetailsFootTips,
			OnLineBuyFoot,
			OnLineFootCratBtu
		},
		data(){
			return{
				 // 药品的信息
				drug:{
					pic:require("../assets/onLineImg/drug-1.png"),
					isPrescription:true,
					drugName:"泰尔丝(异维A酸胶丸)",
					drugpackage:"10mgx20粒/盒",
					indications:"适用于重度难治性结节性痔疮(结节性痔疮，即直径≥5mm的炎性损害，结节可能化脓或出血)。适用于重度难治性结节",
					drugPirce:35.60,
					drugNum:0
				},
				// 药品上边提示和保证
				drugDetailsTips:{
					beCareful:{
						pic:require("../assets/onLineImg/ic_tag_warning_gery.png"),
						title:"医生会依据病情修改药品数量"
					},
					ensure:[
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						}
					]
				},
				// 药品包装规格
				drugInformation:[
					{
						name:"药品名称",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药品名称",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药品名称",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药品名称",
						text:"泰尔丝(异维A酸胶丸)"
					}
				],
				onLineBuyFoot:"选择药品"
			}
		}
	}
</script>

<style scoped>
	.drugDetails{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.drugDetails_box{
		width: 100%;
		position: absolute;
		top: 165px;
		left: 0;
		background: #fff;
	}
	.onLineBuyDrugListLi_box{
		background: #fff;
		margin-bottom: 34px;
		padding: 0 30px;
	}
</style>
