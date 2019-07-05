<template>
	<div class="myDrugOrdersLiBox">
		<div class="myDrugOrdersLi" v-for="itme in DrugOrders">
			<div class="myDrugOrdersLi_box">
				<div class="orderInformation">
					<div class="orderInformation_title">
						<span>{{itme.o_time}}</span>
						<span>订单号：{{itme.o_id}}</span>
					</div>
					<dxRightArrows/>
				</div>
				<div class="orderDrug">
					<div class="orderDrug_pic">
						<img :src="itme.med_detail.med_img">
					</div>
					<div class="orderDrug_info">
						<h2>药名：{{itme.med_detail.med_name}}</h2>
						<span>规格：{{itme.med_detail.packing_size}}</span>
					</div>
					<div class="orderDrug_picer">
						<span>共计{{itme.med_detail.o_med_num}}件</span>
						<span>￥{{itme.med_detail.o_med_price}}</span>
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	import common from "../../assets/js/common.js"
	import dxRightArrows from '../public/dxRightArrows.vue'
	/* 订单列表 li */
	export default{
		name:"myDrugOrdersLi",
		components:{
			dxRightArrows
		},
		props:["DrugOrders"],
		created() {
			if(this.DrugOrders.length != 0){
				common.setCookie("ordersId",this.DrugOrders[this.DrugOrders.length-1].o_id,1);
			}
			// console.log(this.DrugOrders[0].o_time);
		},
		methods: {
			
		},
	}
</script>

<style scoped>
	.myDrugOrdersLiBox{
		width: 100%;
		padding: 0 20px;
	}
	.myDrugOrdersLi{
		width: 100%;
		height: 100%;
		padding: 0 20px;
		background: #FFFFFF;
		margin: 20px 0;
		border-radius: 40px;
	}
	.myDrugOrdersLi_box{
		width: 100%;
		height: 100%;
		padding: 20px 0;
		margin-bottom: 10px;
	}
	.orderInformation{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #efeeee;/* no */
		padding: 10px 0;
	}
	.orderInformation_title>span{
		display: block;
		color: #030303;
		font-size: 30px;
	}
	.orderInformation_title>span:last-of-type{
		color: #999999;
	}
	.orderDrug{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: 1px solid #efeeee;/* no */
	}
	.orderDrug_pic{
		flex: 20%;
		max-width: 20%;
	}
	.orderDrug_pic>img{
		width: 100%;
		vertical-align: middle;
	}
	.orderDrug_info{
		flex: 56%;
		max-width: 56%;
	}
	.orderDrug_info>h2{
		font-size: 20px;
		color: #030303;
		margin-top: 10px;
	}
	.orderDrug_info>span{
		font-size: 20px;
		color: #999999;
	}
	.orderDrug_picer{
		flex: 20%;
		max-width: 20%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.orderDrug_picer>span{
		font-size: 16px;
		color: #999999;
	}
	.orderDrug_picer>span:last-of-type{
		color: crimson;
	}
</style>
