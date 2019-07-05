<template>
	<div class="orderFillingDrugDetails">
		<div class="orderFillingDrugDetails_box" v-for="itme in orderFillingArr">
			<img :src="itme.med_img" class="orderFillingDrugDetails_pic">
			<div class="orderFillingDrugDetails_text">
				<div class="orderFillingDrugDetails_title">
					<p>{{itme.med_name}}</p>
					<span>{{itme.packing_size}}</span>
				</div>
				<div class="orderFilling_pirceAddNum">
					<span>￥{{itme.price}}</span>
					<span>x{{itme.c_med_num}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import common from "../../assets/js/common.js"
	/* 提交订单的商品详情 */
	export default{
		name:"orderFillingDrugDetails",
		created() {
			if(this.$route.query.drugId != undefined){
				common.setCookie("drugId",this.$route.query.drugId,1);
			}
			let drugId = common.getCookie("drugId")
			drugId = drugId.split(",");
			let tar = this;
			let token = common.getCookie("token");
			this.$store.dispatch('GetInfo', true)
			this.$axios({
				method: 'get',
				url: 'http://121.199.63.71:9006/cart_details/?token='+token,
			})
			.then(function (response) {
				if(response.data.code==200){
					tar.$store.dispatch('GetInfo', false)
					for(let i=0;i<response.data.data.data.length;i++){
						for(let y=0;y<drugId.length;y++){
							if(response.data.data.data[i].c_med_id == parseInt(drugId[y])){
								tar.orderFillingArr.push(response.data.data.data[i])
							}
						}
					}
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		data() {
			return {
				orderFillingArr: []
			}
		},
	}
</script>

<style>
	
</style>
