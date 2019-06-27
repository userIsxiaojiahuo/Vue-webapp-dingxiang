<template>
	<div class="orderFillingDrugDetails">
		<div class="orderFillingDrugDetails_box">
			<img src="../../assets/onLineImg/drug-1.png" class="orderFillingDrugDetails_pic">
			<div class="orderFillingDrugDetails_text">
				<div class="orderFillingDrugDetails_title">
					<p>999 感冒灵颗粒 10g*9袋</p>
					<span>规格:10g*9袋</span>
				</div>
				<div class="orderFilling_pirceAddNum">
					<span>￥25</span>
					<span>x1</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/* 提交订单的商品详情 */
	export default{
		name:"orderFillingDrugDetails"
	}
</script>

<style>
	.orderFillingDrugDetails{
		width: 100%;
		height: 230px;
		background: #f8f8f8;
		padding: 21px 30px;
	}
	.orderFillingDrugDetails_box{
		width: 100%;
		height: 100%;
		display: flex;
	}
	.orderFillingDrugDetails_pic{
		width: 188px;
		height: 188px;
		margin-right: 20px;
	}
	.orderFillingDrugDetails_text{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.orderFillingDrugDetails_title>p{
		color: #3c3c3c;
		font-size: 24px;
	}
	.orderFillingDrugDetails_title>span{
		color: #a9a9a9;
		font-size: 24px;
		margin-top: 10px;
	}
	.orderFilling_pirceAddNum{
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 26px;
	}
	.orderFilling_pirceAddNum>span:first-of-type{
		color: #e33a43;
		font-weight: 700;
	}
	.orderFilling_pirceAddNum>span:last-of-type{
		margin-right: 24px;
	}
</style>
