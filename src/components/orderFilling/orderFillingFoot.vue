<template>
	<div class="orderFillingFoot_box">
		<div class="orderFillingFoot">
			<div class="onLineBuyFoot-left">
				<span>共1件,应付金额:<span>￥30</span></span>
			</div>
			<div class="orderFillingFoot_btu" @click="showPopup">立即支付</div>
		</div>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }" >
			<!-- 支付界面 -->
			<CartPayment @isClickIndex="isClickIndex"/>
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
			  this.$emit("clickIndex",true);
			},
			isClickIndex(val){
				this.$emit("isClickIndex",val);
				this.show = false;
			}
		}
	}
</script>

<style>
	
</style>
