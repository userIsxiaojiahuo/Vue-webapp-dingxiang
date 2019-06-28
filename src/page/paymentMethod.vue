<template>
	<div class="paymentMethod">
		<!-- 头部 -->
		<CartPaymentHeader :cartPaymentHeader="cartPaymentHeader"/>
		<!-- 支付方式列表 -->
		<PaymentMethodUl :paymentMethodUl="paymentMethodUl"/>
	</div>
</template>

<script>
	/* 支付界面头部 */
	import CartPaymentHeader from "../components/public/dxCartPaymentHeader"
	/* 支付方式列表 */
	import PaymentMethodUl from "../components/paymentMethod/paymentMethodUl"
	/* 选择支付方式 */
	export default{
		naem:"paymentMethod",
		components:{
			CartPaymentHeader,
			PaymentMethodUl
		},
		data(){
			return{
				cartPaymentHeader:{
					ico:require("../assets/onLineImg/ic_close_details.png"),
					title:"选择支付方式"
				},
				paymentMethodUl:[
					{
						paymentMethodIco:require("../assets/onLineImg/ico-1.png"),
						title:"账户余额",
						balance:"200.00",
						SelectionPic:require("../assets/onLineImg/ico-3.png"),
						isSelection:true
					},
					{
						paymentMethodIco:require("../assets/onLineImg/ico-2.png"),
						title:"余额包",
						balance:"200.00",
						SelectionPic:require("../assets/onLineImg/ico-3.png"),
						isSelection:false
					}
				]
			}
		}
	}
</script>

<style>
	.paymentMethod{
		width: 100%;
		background: #f8f8f8;
		height: 100%;
	}
</style>
