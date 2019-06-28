<template>
	<div class="addressManagement">
		<!-- 顶部返回 -->
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<!-- 购药流程 -->
		<CartProcess :cartProcess="cartProcess"/>
		<!-- 地址列表 -->
		<AddressManagementUl/>
		<!-- 管理收货地址的底部 -->
		<AddressManagementFoot/>
	</div>
</template>

<script>
	/* 顶部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 购药流程 */
	import CartProcess from "../components/cart/cartProcess.vue"
	/* 地址列表 */
	import AddressManagementUl from "../components/addressManagement/addressManagementUl.vue"
	/* 管理收货地址的底部 */
	import AddressManagementFoot from "../components/addressManagement/addressManagementFoot.vue"
	export default{
		name:"addressManagement",
		components:{
			HeaderReturn,
			AddressManagementUl,
			AddressManagementFoot,
			CartProcess
		},
		data(){
			return{
				headerReturn:{
					title:"地址列表",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
				// 购物流程
				cartProcess:{
					liIndex:2,
					cartProcess:[
						{
							stepNumber:1,
							text:"选择药物",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:2,
							text:"提交订单",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:3,
							text:"选择地址",
							ico:require("../assets/onLineImg/ic_arrow.png")
						},
						{
							stepNumber:4,
							text:"支付",
							ico:require("../assets/onLineImg/ic_arrow.png")
						}
					]
				}
			}
		}
	}
</script>

<style scoped>
	.addressManagement{
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		position: relative;
	}
</style>
