<template>
	<div class="cartProcess">
		<ul>
			<li v-for="(itme,index) in cartProcess.cartProcess" :key="index" :class="{click_cartProcess_li:index==cartProcess.liIndex}">
					<span class="cartProcess_stepNumber">{{itme.stepNumber}}</span>
					<span class="cartProcess_text">{{itme.text}}</span>
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
		height: 100px;
		background: #fff;
	}
	.cartProcess>ul{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.cartProcess>ul>li{
		display: flex;
		align-items: center;
	}
	.click_cartProcess_li{
		color: #28b7a3;
	}
	.cartProcess>ul>li:nth-of-type(2):before{
		content: "";
		display: inline-block;
		width: 60px;
		background: #333333;
		height: 1px;/* no */
		margin-right: 32px;
	}
	.cartProcess>ul>li:nth-of-type(2):after{
		content: "";
		display: inline-block;
		width: 60px;
		background: #333333;
		height: 1px;/* no */
		margin-left: 30px;
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
		font-size: 24px;
		margin-left: 8px;
		margin-right: 8px;
	}
</style>
