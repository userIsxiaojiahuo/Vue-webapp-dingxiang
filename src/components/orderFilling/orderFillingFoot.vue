<template>
	<div class="orderFillingFoot_box">
		<div class="orderFillingFoot">
			<div class="onLineBuyFoot-left">
				<span>共{{nume}}件,应付金额:<span>￥{{toalbPicer}}</span></span>
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
	import common from "../../assets/js/common.js"
	/* 支付页面 */
	import CartPayment from "../../page/cartPayment.vue"
	/* 订单页面的底部 */
	export default{
		name:"orderFillingFoot",
		components:{
			CartPayment
		},
		created() {
			if(this.$route.query.cartPirce != undefined){
				common.setCookie("cartPirce",this.$route.query.cartPirce,1);
			}
			let cartPirce = common.getCookie("cartPirce")
			let drugId = common.getCookie("drugId")
			cartPirce = cartPirce.split(",");
			drugId = drugId.split(",");
			this.toalbPicer = cartPirce[0];
			this.nume = drugId.length;
		},
		data(){
			return{
				show: false,
				toalbPicer:0,
				nume:0,
				cartPirce:0
			}
		},
		methods:{
			showPopup() {
				if(this.$route.query.itme){
					let tar = this;
					let token = common.getCookie("token");
					this.$store.dispatch('GetInfo', true);
					this.$axios({
						method: 'get',
						url: 'http://121.199.63.71:9006/create_order/?token='+token,
					})
					.then(function (response) {
						if(response.data.code==200){
							tar.$store.dispatch('GetInfo', false);
							tar.show = true;
							tar.$emit("clickIndex",true);
						}
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				if(this.$route.query.itme==undefined){
					this.$notify({
					  message:'请填写收货地址',
					  duration: 1000,
					  background: '#28b7a3'
					})
				}
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
