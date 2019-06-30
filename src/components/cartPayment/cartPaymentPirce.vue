<template>
	<div class="cartPaymentPirce">￥<span>{{CartPaymentPirce}}</span></div>
</template>

<script>
	/* 支付金额 */
	export default{
		naem:"cartPaymentPirce",
		props:["CartPaymentPirce"]
	}
</script>

<style scoped>
	.cartPaymentPirce{
		width: 100%;
		color: #3c3d3e;
		font-size: 38px;
		margin: 100px 0 30px;
		text-align: center;
	}
	.cartPaymentPirce>span{
		font-size: 68px;
		font-weight: 800;
	}
</style>
