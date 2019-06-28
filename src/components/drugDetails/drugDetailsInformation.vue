<template>
	<div class="drugDetailsInformation">
		<div class="drugDetailsInformation_pBox" v-for="itme in drugInformation">
			<p class="drugDetailsInformation_name">{{itme.name}}</p>
			<p class="drugDetailsInformation_text">{{itme.text}}</p>
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

<style scoped>
	.drugDetailsInformation{
		width: 100%;
		padding: 0 30px;
		height: 374px;
		overflow-y: auto;
	}
	.drugDetailsInformation::-webkit-scrollbar {
    display: none;
}
	.drugDetailsInformation_pBox{
		width: 100%;
	}
	.drugDetailsInformation_name{
		font-size: 28px;
		color: #bbbbbb;
	}
	.drugDetailsInformation_text{
		color: #666666;
		font-size: 28px;
		margin: 22px 0 30px;
	}
</style>
