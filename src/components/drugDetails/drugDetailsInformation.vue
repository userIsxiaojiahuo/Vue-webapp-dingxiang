<template>
	<div class="drugDetailsInformation">
		<div class="drugDetailsInformation_pBox" v-for="itme in drugInformation">
			<p class="drugDetailsInformation_name">{{itme.name}}</p>
			<p class="drugDetailsInformation_text">{{itme.text?itme.text:"无"}}</p>
		</div>
	</div>
</template>

<script>
	/* 药品包装信息和规格 */
	export default{
		name:"drugDetailsInformation",
		props:["drugInformation"]
	}
</script>

<style>
	
</style>
