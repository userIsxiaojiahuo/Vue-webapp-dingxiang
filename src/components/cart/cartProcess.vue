<template>
	<div class="cartProcess">
		<ul>
			<li v-for="(itme,index) in cartProcess.cartProcess" :key="index" :class="{click_cartProcess_li:index==cartProcess.liIndex}">
				<span class="cartProcess_stepNumber">{{itme.stepNumber}}</span>
				<span class="cartProcess_text">{{itme.text}}</span>
				<img class="cartProcess_ico" :src="itme.ico">
			</li>
		</ul>
	</div>
</template>

<script>
	/* 购药流程 */
	export default{
		name:"cartProcess",
		props:["cartProcess"]
	}
</script>

<style scoped>
	.cartProcess{
		width: 100%;
		padding: 0 30px;
		height: 193px;
		background: #fff;
	}
	.cartProcess>ul{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.cartProcess>ul>li{
		display: flex;
		align-items: baseline;
		margin-right: 14px;
	}
	.click_cartProcess_li{
		color: #28b7a3;
	}
	.click_cartProcess_li>.cartProcess_stepNumber{
		background: #28b7a3;
	}
	.cartProcess_stepNumber{
		display: inline-block;
		width: 28px;
		height: 28px;
		background: #CCCCCC;
		border-radius: 50%;
		color: #fff;
		font-size: 16px;
		text-align: center;
		line-height: 28px;
	}
	.cartProcess_text{
		color: 24px;
		font-size: #CCCCCC;
		margin-left: 8px;
		margin-right: 8px;
	}
	.cartProcess_ico{
		height: 20px;
	}
</style>
