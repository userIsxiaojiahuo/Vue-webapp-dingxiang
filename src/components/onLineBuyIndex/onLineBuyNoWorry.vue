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

<style>
</style>
