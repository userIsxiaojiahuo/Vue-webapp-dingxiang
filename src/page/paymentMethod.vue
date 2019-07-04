<template>
	<div class="paymentMethod">
		<!-- 头部 -->
		<CartPaymentHeader :cartPaymentHeader="cartPaymentHeader" @isClickIndex="isClickIndex"/>
		<!-- 支付方式列表 -->
		<PaymentMethodUl :paymentMethodUl="paymentMethodUl" @paymentMethodIdex="paymentMethodIdex"/>
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
		},
		methods:{
			isClickIndex(val){
				this.$emit("isClickIndex",val);
			},
			paymentMethodIdex(val){
				for(let i=0;i<this.paymentMethodUl.length;i++){
					this.paymentMethodUl[i].isSelection = false;
				}
				this.paymentMethodUl[val].isSelection = true;
				this.$emit("paymentMethodValue",this.paymentMethodUl[val].title)
			}
		}
	}
</script>
<style  src="../assets/css/paymentMethod.css"></style>
<style>
	.paymentMethod{
		width: 100%;
		background: #f8f8f8;
		height: 100%;
	}
</style>
