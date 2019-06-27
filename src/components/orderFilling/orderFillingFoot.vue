<template>
	<div class="orderFillingFoot">
		<span>共1件,应付金额:<span>￥30</span></span>
	</div>
</template>

<script>
	/* 订单页面的底部 */
	export default{
		name:"orderFillingFoot"
	}
</script>

<style scoped>
	.orderFillingFoot{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.orderFillingFoot>span{
		color: #5a5a5a;
		font-size: 28px;
	}
	.orderFillingFoot>span>span{
		color: #fc4437;
		font-weight: 700;
	}
</style>
