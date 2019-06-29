<template>
	<div class="orderFilling">
		<!-- 头部返回 -->
		<HeaderReturn :headerReturnTitle="headerReturn" />
		<!-- 购药流程 -->
		<CartProcess :cartProcess="cartProcess" />
		<!-- 收货地址 -->
		<OrderFillingAddress />
		<!-- 提交订单的商品详情 -->
		<OrderFillingDrugDetails />
		<!-- 提交订单小功能 -->
		<OrderFillingSmallFunction v-for="(item,index) in orderFilling" :orderFilling="item" class="orderFillingSmallFunction"
		 :key="index" />
		<!-- 底部购买按钮旁边的内容 -->
		<OrderFillingFoot />
	</div>
</template>

<script>
	/* 头部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 购药流程 */
	import CartProcess from "../components/cart/cartProcess.vue"
	/* 收货地址 */
	import OrderFillingAddress from "../components/orderFilling/orderFillingAddress.vue"
	/* 提交订单的商品详情 */
	import OrderFillingDrugDetails from "../components/orderFilling/orderFillingDrugDetails.vue"
	/* 提交订单小功能 */
	import OrderFillingSmallFunction from "../components/orderFilling/orderFillingSmallFunction.vue"
	/* 底部购买按钮旁边的内容 */
	import OrderFillingFoot from "../components/orderFilling/orderFillingFoot.vue"
	/* 订单填写 */
	export default {
		name: "orderFilling",
		components: {
			HeaderReturn,
			CartProcess,
			OrderFillingAddress,
			OrderFillingDrugDetails,
			OrderFillingSmallFunction,
			OrderFillingFoot
		},
		data() {
			return {
				headerReturn: {
					title: "订单填写",
					ico: require("../assets/onlineImg/ic_titlebar_back.png")
				},
				// 购物流程
				cartProcess: {
					liIndex: 1,
					cartProcess: [{
							stepNumber: 1,
							text: "选择药物",
							ico: require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber: 2,
							text: "提交订单",
							ico: require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber: 3,
							text: "选择地址",
							ico: require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber: 4,
							text: "支付",
							ico: require("../assets/onLineImg/ic_arrow.png")
						}
					]
				},
				// 订单提交小功能
				orderFilling: [{
						title: "配送方式",
						phone: "",
						text: "快递￥5",
						isCalss: false
					},
					{
						title: "支付方式",
						phone: "",
						text: "在线支付",
						isCalss: false
					},
					{
						title: "支付方式",
						phone: "",
						text: "在线支付",
						isCalss: false
					},
					{
						title: "开具发票",
						phone: "拨打4000156199详询",
						text: "暂不支持",
						isCalss: true
					}
				],
				onLineBuyFoot: {
					title: "支付",
					path: "/"
				}
			}
		}
	}
</script>
<style src="../assets/css/orderFilling.css"></style>
<style scoped>
	.orderFilling {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}

	.orderFillingSmallFunction:nth-of-type(7) {
		margin-top: 20px;
	}
</style>
