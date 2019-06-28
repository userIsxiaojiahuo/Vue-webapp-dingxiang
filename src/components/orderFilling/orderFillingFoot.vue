<template>
	<div class="orderFillingFoot_box">
		<div class="orderFillingFoot">
			<div class="onLineBuyFoot-left">
				<span>共1件,应付金额:<span>￥30</span></span>
			</div>
			<div class="orderFillingFoot_btu" @click="showPopup">立即支付</div>
		</div>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
			<!-- 支付界面 -->
			<CartPayment/>
		</van-popup>
	</div>
</template>

<script>
	/* 支付页面 */
	import CartPayment from "../../page/cartPayment.vue"
	/* 订单页面的底部 */
	export default{
		name:"orderFillingFoot",
		components:{
			CartPayment
		},
		data(){
			return{
				show: false,
			}
		},
		methods:{
			showPopup() {
			  this.show = true;
			}
		}
	}
</script>

<style scoped>
	.orderFillingFoot{
		width: 100%;
		height: 98px;
		border-top: 1px solid #ebebeb;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.onLineBuyFoot-left{
		flex: 71.2%;
		min-width: 71.2%;
		height: 100%;
		padding-left: 30px;
		line-height: 98px;
	}
	.onLineBuyFoot-left>span{
		color: #5a5a5a;
		font-size: 28px;
	}
	.onLineBuyFoot-left>span>span{
		color: #fc4437;
		font-weight: 700;
	}
	.orderFillingFoot_btu{
		flex: 28.8%;
		min-width: 28.8%;
		height: 100%;
		background: #28b7a3;;
		font-size: 30px;
		color: #fff;
		text-align: center;
		line-height: 98px;
	}
</style>
