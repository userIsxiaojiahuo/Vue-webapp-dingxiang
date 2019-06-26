<template>
	<div class="onLineBuyFoot-left_box">
		<router-link class="onLineBuyFoot-left-cratImg"
			to="cart"
			tag="div"
		>
			<img src="../../assets/onLineImg/onLineBuyCrat.png">
			<span v-if="false">0</span>
		</router-link>
		<div class="onLineBuyFootNum">
			<span class="onLineBuyFootNum-noe">已选0中药品</span>
			<span class="onLineBuyFootNum-two" v-if="false">共0件</span>
		</div>
	</div>
</template>

<script>
	/* 在线购药底部购物车按钮的图片和内容 */
	export default{
		name:"onLineFootCratBtu"
	}
</script>

<style scoped>
	.onLineBuyFoot-left_box{
		display: flex;
	}
	.onLineBuyFoot-left-cratImg{
		position: relative;
	}
	.onLineBuyFoot-left-cratImg>img{
		width: 82px;
		height: 82px;
		margin-top: 8px;
		margin-right: 34px;
	}
	.onLineBuyFoot-left-cratImg>span{
		position: absolute;
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #f76260;
		top: 6px;
		right: 26px;
		color: #fff;
		text-align: center;
		line-height: 30px;
	}
	.onLineBuyFootNum-noe{
		display: block;
		font-size: 30px;
		color: #666666;
		margin-top: 8px;
	}
	.onLineBuyFootNum-two{
		color: #a0a0a0;
		font-size: 22px;
	}
</style>
