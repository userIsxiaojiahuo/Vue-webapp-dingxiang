<template>
	<div class="drugDetailsHeader">
		<img src="../../assets/onLineImg/ic_close_details.png">
	</div>
</template>

<script>
	/* 药品详情页头部关闭 */
	export default{
		name:"drugDetailsHeader"
	}
</script>

<style scoped>
	.drugDetailsHeader{
		width: 100%;
		height: 104px;
		border-bottom: 1px solid #ebebeb;
		background: #fcfcfc;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 30px;
		margin-bottom: 40px;
	}
	.drugDetailsHeader>img{
		width: 26px;
		height: 26px;
	}
</style>
