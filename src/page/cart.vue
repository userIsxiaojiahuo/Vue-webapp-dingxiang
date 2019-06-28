<template>
	<div class="cart">
		<!-- 头部返回 -->
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<!-- 购药流程 -->
		<CartProcess :cartProcess="cartProcess"/>
		<!-- 购物车列表 -->
		<OnLineBuyDrugListUl :drugList="drug" class="OnLineBuyDrugListUl"/>
		<!-- 药品列表底部购物车和购买按钮 -->
		<OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
			<!-- 购物车商品总计 -->
			<CartTotalPrice/>
		</OnLineBuyFoot>
	</div>
</template>

<script>
	/* 头部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 购药流程 */
	import CartProcess from "../components/cart/cartProcess.vue"
	/* 药品列表 */
	import OnLineBuyDrugListUl from '../components/onLIneBuyDrugList/onLineBuyDrugListUl.vue'
	/* 药品列表底部购物车和购买按钮 */
	import OnLineBuyFoot from '../components/public/dxOnLineBuyFoot.vue'
	/* 购物车商品总计 */
	import CartTotalPrice from '../components/cart/cartTotalPrice.vue'
	/* 购物车 */
	export default{
		name:"cart",
		components:{
			HeaderReturn,
			CartProcess,
			OnLineBuyDrugListUl,
			OnLineBuyFoot,
			CartTotalPrice
		},
		data(){
			return{
				headerReturn:{
					title:"药品清单",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
				// 购物流程
				cartProcess:{
					liIndex:0,
					cartProcess:[
						{
							stepNumber:1,
							text:"选择药物",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:2,
							text:"提交订单",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:3,
							text:"选择地址",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:4,
							text:"支付",
							ico:require("../assets/onLineImg/ic_arrow.png")
						}
					]
				},
				// 药品信息
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
				],
				onLineBuyFoot:{
					title:"提交订单",
					path:"/orderFilling"
				}
			}
		}
	}
</script>
<style  src="../assets/css/cart.css"></style>
<style scoped>
	.cart{
		width: 100%;
		background: #f4f4f4;
	}
	.OnLineBuyDrugListUl{
		margin-top: 20px;
		background: #fff;
	}
	
</style>
