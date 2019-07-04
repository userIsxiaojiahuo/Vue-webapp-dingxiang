<template>
	<router-link to="/drugSearch" tag="div" class="onLineSearch">
		<div class="onLineSearch-input">
			<img src="../../assets/onLineImg/ic_search_after.png">
			<span>{{onLineSearch}}</span>
		</div>
	</router-link>
</template>

<script>
	/*搜索*/ 
	export default{
		name:"onLineSearch",
		props:["onLineSearch"]
	}
</script>

<style>
</style>
