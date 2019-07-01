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

<style>
	
</style>
