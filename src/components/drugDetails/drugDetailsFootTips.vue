<template>
	<div class="drugDetailsFootTips">
		<p class="drugDetailsFootTips_contract">确认添加即视为承若本人使用过该药品，并无不良反应</p>
		<p class="drugDetailsFootTips_freeShipping">限时包邮,满198减20</p>
	</div>
</template>

<script>
	/* 药品详情底部的包邮，和承若书 */
	export default{
		name:"drugDetailsFootTips"
	}
</script>

<style scoped>
	.drugDetailsFootTips{
		width: 100%;
	}
	.drugDetailsFootTips_contract{
		width: 100%;
		font-size: 22px;
		color: #f76260;
		line-height: 72px;
		padding: 0 30px;
	}
	.drugDetailsFootTips_freeShipping{
		width: 100%;
		background: #fff6e8;
		color: #333333;
		font-size: 25px;
		padding: 0 30px;
		height: 60px;
		line-height: 60px;
	}
</style>
