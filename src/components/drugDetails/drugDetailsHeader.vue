<template>
	<div class="drugDetailsHeader">
		<div @click="isDrugDetails" class="drugDetailsHeader_pic">
			<img src="../../assets/onLineImg/ic_close_details.png">
		</div>
	</div>
</template>

<script>
	/* 药品详情页头部关闭 */
	export default{
		name:"drugDetailsHeader",
		methods:{
			isDrugDetails(){
				this.$emit("isNoDrugDetails",false)
			}
		}
	}
</script>

<style>
	
</style>
