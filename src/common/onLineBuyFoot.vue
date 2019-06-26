<template>
	<div class="onLineBuyFoot">
		<div class="onLineBuyFoot-left">
			<slot></slot>
		</div>
		<div class="onLineBuyFoot-btu">{{onLineBuyFoot}}</div>
	</div>
</template>

<script>
	/* 药品列表底部购物车和购买按钮 */
	export default{
		name:"onLineBuyFoot",
		props:["onLineBuyFoot"]
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
	.onLineBuyFoot-left{
		flex: 71.2%;
		min-width: 71.2%;
		height: 100%;
		padding-left: 30px;
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
