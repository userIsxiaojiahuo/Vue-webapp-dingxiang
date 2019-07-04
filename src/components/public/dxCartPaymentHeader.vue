<template>
	<div class="cartPaymentHeader">
		<img class="cartPaymentHeader_close" :src="cartPaymentHeader.ico" @click="isClickIndex">
		<p class="cartPaymentHeader_title"><span>{{cartPaymentHeader.title}}</span></p>
	</div>
</template>

<script>
	/* 支付界面的头部 */
	export default{
		name:"cartPaymentHeader",
		props:["cartPaymentHeader"],
		methods:{
			isClickIndex(){
				this.$emit("isClickIndex",false);
			}
		}
	}
</script>

<style scoped>
	.cartPaymentHeader{
		width: 100%;
		height: 96px;
		border: 1px solid #ededed;
		line-height: 96px;
		padding: 0 34px;
		display: flex;
		align-items: center;
	}
	.cartPaymentHeader_close{
		width: 32px;
		height: 32px;
		text-align: left;
	}
	.cartPaymentHeader_title{
		color: #000000;
		font-size: 34px;
		width: 100%;
		text-align: center;
	}
</style>
