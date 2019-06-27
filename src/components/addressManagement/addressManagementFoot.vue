<template>
	<router-link to="/editAddress" tag="div" class="addressManagementFoot">
		<img src="../../assets/onLineImg/ic_follow_white.png">
		<span>管理收货地址</span>
	</router-link>
</template>

<script>
	/* 管理收货地址的底部 */
	export default{
		name:"addressManagementFoot"
	}
</script>

<style scoped>
	.addressManagementFoot{
		width: 100%;
		height: 104px;
		background: #28b7a3;
		position: fixed;
		bottom: 0;
		left: 0;
		text-align: center;
		line-height: 104px;
	}
	.addressManagementFoot>img{
		width: 44px;
		height: 44px;
		vertical-align: sub;
	}
	.addressManagementFoot>span{
		color: #fff;
		font-size: 32px;
	}
</style>
