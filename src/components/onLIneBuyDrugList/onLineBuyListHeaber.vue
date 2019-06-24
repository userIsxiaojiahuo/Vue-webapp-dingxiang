<template>
	<div class="onLineSearch-input">
		<img :src="onLineSearch.pic">
		<span>{{onLineSearch.title}}</span>
	</div>
</template>

<script>
	/* 药品列表顶部搜索框 */
	export default{
		name:"onLineBuyListHeaber",
		props:["onLineSearch"]
	}
</script>

<style scoped>
	.onLineSearch-input{
		width: 100%;
		height: 80px;
		background: #f2f2f2;
		margin-left: 36px;
		border-radius: 10px;
		display: flex;
		align-items: center;
	}
	.onLineSearch-input>img{
		width: 36px;
		height: 36px;
		margin:0 22px;
	}
	.onLineSearch-input>span{
		font-size: 28px;
		color: #000;
	}
</style>
