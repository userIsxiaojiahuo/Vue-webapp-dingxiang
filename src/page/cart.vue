<template>
	<div class="cart">
		<!-- 头部返回 -->
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<!-- 购药流程 -->
		<CartProcess :cartProcess="cartProcess"/>
		<!-- 购物车列表 -->
		<van-swipe-cell :on-close="onClose">
			<CartList :drugList="drug" class="OnLineBuyDrugListUl"/>
			<van-button
			square
			slot="right"
			type="danger"
			text="删除"
			:style="{height:'100%'}"
			/>
		</van-swipe-cell>
		
		<!-- 药品列表底部购物车和购买按钮 -->
		<OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
			<!-- 购物车商品总计 -->
			<CartTotalPrice :cartPirce="cartPirce"/>
		</OnLineBuyFoot>
	</div>
</template>

<script>
	/* 头部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 购药流程 */
	import CartProcess from "../components/cart/cartProcess.vue"
	/* 药品列表 */
	import CartList from '../components/cart/cartList.vue'
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
			CartList,
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
							text:"购物车"
						},
						{
							stepNumber:2,
							text:"核对订单"
						},
						{
							stepNumber:3,
							text:"提交订单"
						}
					]
				},
				// 药品信息
				drug:[],
				onLineBuyFoot:{
					title:"下一步",
					path:"/orderFilling"
				},
			}
		},
		methods:{
			onClose(clickPosition, instance) {
			  switch (clickPosition) {
				case 'cell':
				case 'outside':
				  instance.close();
				  break;
				  case 'right':
				   this.cartDelete();
				  break;
			  }
			},
			cartDelete(){
				console.log(11)
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
