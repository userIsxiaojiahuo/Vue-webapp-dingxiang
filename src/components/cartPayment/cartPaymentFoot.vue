<template>
	<div class="cartPaymentFoot">
		<span @click="showPopup" >立即付款</span>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }" get-container="#app">
			<CipherPayment/>
		</van-popup>
	</div>
</template>

<script>
	/* 请输入支付密码支付 */
	import CipherPayment from "../../page/cipherPayment"
	/* 支付页面底部按钮 */
	export default{
		name:"cartPaymentFoot",
		components:{
			CipherPayment
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
	.cartPaymentFoot{
		width: 100%;
		padding: 0 30px;
		position: absolute;
		bottom: 24px;
		left: 0;
	}
	.cartPaymentFoot>span{
		display: inline-block;
		width: 100%;
		height: 92px;
		background: #1e92e5;
		color: #fff;
		font-size: 34px;
		line-height: 92px;
		text-align: center;
	}
</style>
