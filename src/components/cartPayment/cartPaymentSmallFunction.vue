<template>
	<div class="cartPaymentSmallFunction">
		<div class="cartPaymentSmall_text">
			<span>订单信息</span>
			<span>商品</span>
		</div>
		<div class="cartPaymentSmall_text">
			<span>付款方式</span>
			<span @click="showPopup">账号余额<img src="../../assets/onLineImg/ic_arrow.png"></span>
		</div>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
			<!-- 支付界面 -->
			<PaymentMethod/>
		</van-popup>
	</div>
</template>

<script>
	/* 选择支付的方式 */
	import PaymentMethod from "../../page/paymentMethod"
	/* 支付页面的支付方式 订单信息 */
	export default{
		name:"cartPaymentSmallFunction",
		components:{
			PaymentMethod
		},
		data(){
			return{
				show: false,
			}
		},
		methods:{
			showPopup() {
			  this.show = true;
			}
		}
	}
</script>

<style scoped>
	.cartPaymentSmallFunction{
		width: 100%;
		padding: 0 30px;
	}
	.cartPaymentSmall_text{
		width: 100%;
		height: 100%;
		border-bottom: 1px solid #ececec;
		padding: 32px 0;
		display: flex;
		justify-content: space-between;
	}
	.cartPaymentSmall_text>span{
		font-size: 30px;
	}
	.cartPaymentSmall_text>span:first-of-type{
		color: #9d9d9d;
	}
	.cartPaymentSmall_text>span:last-of-type{
		color: #414141;
	}
	.cartPaymentSmall_text>span:last-of-type>img{
		height: 28px;
		margin-left: 20px;
	}
</style>
