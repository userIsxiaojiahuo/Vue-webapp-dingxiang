<template>
	<div class="orderFillingSmallFunction">
		<span>{{orderFilling.title}}<span class="orderFillingSmallFunction_contenText">{{orderFilling.phone}}</span></span>
		<span :class="{orderFillingSmall:orderFilling.isCalss}">{{orderFilling.text}}</span>
	</div>
</template>

<script>
	/* 提交订单小功能 */
	export default{
		name:"orderFillingSmallFunction",
		props:["orderFilling"]
	}
</script>

<style scoped>
	.orderFillingSmallFunction{
		width: 100%;
		padding: 0 30px;
		border-bottom: 2px solid #e3e3e3;
		height: 90px;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.orderFillingSmallFunction>span{
		font-size: 26px;
		color: #141414;
	}
	.orderFillingSmallFunction_contenText{
		color: #818181;
		margin-left: 22px;
	}
	.orderFillingSmallFunction>.orderFillingSmall{
		color: #818181;
	}
</style>
