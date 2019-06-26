<template>
	<div class="orderFillingAddress">
		<p>请选择收货地址</p>
		<img src="../../assets/onLineImg/ic_arrow.png">
	</div>
</template>

<script>
	/* 收货地址 */
	export default{
		name:"orderFillingAddress"
	}
</script>

<style>
	.orderFillingAddress{
		width: 100%;
		padding: 0 30px;
		background: #fff;
		margin-top: 20px;
		height: 106px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.orderFillingAddress>p{
		color: #8f8f8f;
		font-size: 32px;
		line-height: 106px;
	}
	.orderFillingAddress>img{
		height: 26px;
	}
</style>
