<template>
	<div class="drugDetailsTips">
		<p class="drugDetailsTips_beCareful">
			<img :src="drugDetailsTips.beCareful.pic">
			<span>{{drugDetailsTips.beCareful.title}}</span>
		</p>
		<p class="drugDetailsTips_ensure">
			<ul>
				<li v-for="itme in drugDetailsTips.ensure">
					<img :src="itme.pic">
					<span>{{itme.title}}</span>
				</li>
			</ul>
		</p>
	</div>
</template>

<script>
	/* 药品详情页的提示 */
	export default{
		name:"drugDetailsTips",
		props:["drugDetailsTips"]
	}
</script>

<style scoped>
	.drugDetailsTips{
		width: 100%;
		padding: 0 30px;
	}
	.drugDetailsTips_beCareful{
		display: flex;
		align-items: center;
		margin-bottom: 77px;
	}
	.drugDetailsTips_beCareful>img{
		width: 26px;
		height: 26px;
		margin-right: 10px;
	}
	.drugDetailsTips_beCareful>span{
		font-size: 22px;
		color: #999999;
	}
	.drugDetailsTips_ensure{
		margin-bottom: 34px;
	}
	.drugDetailsTips_ensure>ul{
		display: flex;
	}
	.drugDetailsTips_ensure>ul>li{
		display: flex;
		align-items: center;
		margin-right: 20px;
	}
	.drugDetailsTips_ensure>ul>li>img{
		width: 26px;
		height: 24px;
		margin-right: 6px;
	}
	.drugDetailsTips_ensure>ul>li>span{
		font-size: 22px;
		color: #9f9f9f;
	}
</style>
