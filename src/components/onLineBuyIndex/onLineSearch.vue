<template>
	<div class="onLineSearch">
		<div class="onLineSearch-input">
			<img src="../../assets/onLineImg/ic_search_after.png">
			<span>{{onLineSearch}}</span>
		</div>
	</div>
</template>

<script>
	/*搜索*/ 
	export default{
		name:"onLineSearch",
		props:["onLineSearch"]
	}
</script>

<style scoped>
	img{
		display: inline-block;
	}
	.onLineSearch{
		width: 100%;
		height: 122px;
		padding: 20px 30px;
	}
	.onLineSearch-input{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		border-radius: 10px;
		padding: 22px 0;
		padding-left: 27px;
	}
	.onLineSearch-input>img{
		width: 36px;
		height: 36px;
		vertical-align: top;
	}
	.onLineSearch-input>span{
		font-size: 28px;
		color: #999999;
		margin-left: 30px;
	}
</style>
