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

<style>
</style>
