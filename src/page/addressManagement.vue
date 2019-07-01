<template>
	<div class="addressManagement">
		<!-- 顶部返回 -->
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<!-- 地址列表 -->
		<AddressManagementUl/>
		<!-- 管理收货地址的底部 -->
		<AddressManagementFoot/>
	</div>
</template>

<script>
	/* 顶部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 地址列表 */
	import AddressManagementUl from "../components/addressManagement/addressManagementUl.vue"
	/* 管理收货地址的底部 */
	import AddressManagementFoot from "../components/addressManagement/addressManagementFoot.vue"
	export default{
		/* 管理守护地址 */
		name:"addressManagement",
		components:{
			HeaderReturn,
			AddressManagementUl,
			AddressManagementFoot,
		},
		data(){
			return{
				headerReturn:{
					title:"地址列表",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
			}
		}
	}
</script>
<style  src="../assets/css/addressManagement.css"></style>
<style scoped>
	.addressManagement{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		position: relative;
	}
</style>
