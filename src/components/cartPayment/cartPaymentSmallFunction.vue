<template>
	<div class="cartPaymentSmallFunction">
		<div class="cartPaymentSmall_text">
			<span>订单信息</span>
			<span>商品</span>
		</div>
		<div class="cartPaymentSmall_text">
			<span>付款方式</span>
			<span @click="showPopup">{{cartPaymentSmall}}<img src="../../assets/onLineImg/ic_arrow.png"></span>
		</div>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
			<!-- 支付界面 -->
			<PaymentMethod @isClickIndex="isClickIndex" @paymentMethodValue="paymentMethodValue"/>
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
				cartPaymentSmall:"账号余额"
			}
		},
		methods:{
			showPopup() {
			  this.show = true;
			},
			isClickIndex(val){
				this.show = val;
			},
			paymentMethodValue(val){
				this.cartPaymentSmall = val;
				this.show = false;
			}
		}
	}
</script>

<style>
	
</style>
