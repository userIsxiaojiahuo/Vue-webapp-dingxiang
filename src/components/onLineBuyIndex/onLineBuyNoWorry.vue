<template>
	<div class="onLineBuyNoWorry">
		<img :src=buyNoWorry.bg class="onLineBuyNoWorry-bg">
		<img :src=buyNoWorry.ico class="onLineBuyNoWorry-ico">
	</div>
</template>

<script>
	/*安心购*/ 
	export default{
		name:"onLineBuyNoWorry",
		props:["buyNoWorry"]
	}
</script>

<style scoped>
	img{
		display: inline-block;
	}
	.onLineBuyNoWorry{
		width: 100%;
		height: 88px;
		position: relative;
	}
	.onLineBuyNoWorry-bg{
		width: 100%;
		height: 100%;
	}
	.onLineBuyNoWorry-ico{
		position: absolute;
		height: 18px;
		right: 30px;
		top:33px;
	}
</style>
