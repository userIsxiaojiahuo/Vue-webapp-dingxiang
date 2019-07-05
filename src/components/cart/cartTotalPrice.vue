<template>
	<div class="cartTotalPrice">
		<p>合计:<span>￥{{cartPirce}}</span></p>
	</div>
</template>

<script>
	/* 购物车商品总计 */
	export default{
		name:"cartTotalPrice",
		props:["cartPirce"]
	}
</script>

<style>
	
</style>
