<template>
	<div class="onLineBuyFoot">
		<slot></slot>
		<div class="onLineBuyFoot-btu">结算</div>
	</div>
</template>

<script>
	/* 药品列表底部购物车和购买按钮 */
	export default{
		name:"onLineBuyFoot"
	}
</script>

<style scoped>
	.onLineBuyFoot{
		width: 100%;
		height: 98px;
		border-top: 1px solid #ebebeb;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.onLineBuyFoot-btu{
		flex: 28.8%;
		min-width: 28.8%;
		height: 100%;
		background: #cccccc;
		font-size: 30px;
		color: #fff;
		text-align: center;
		line-height: 98px;
	}
</style>
