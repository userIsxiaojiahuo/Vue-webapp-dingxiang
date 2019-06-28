<template>
	<div class="paymentMethodUl">
		<ul>
			<li v-for="itme in paymentMethodUl">
				<img :src="itme.paymentMethodIco">
				<div class="paymentMethodUl_title">
					<span>{{itme.title}}(剩余:￥{{itme.balance}}元)</span>
					<img v-if="itme.isSelection" :src="itme.SelectionPic">
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	/* 支付方式列表 */
	export default{
		naem:"paymentMethodUl",
		props:["paymentMethodUl"]
	}
</script>

<style scoped>
	.paymentMethodUl{
		width: 100%;
	}
	.paymentMethodUl>ul>li{
		display: flex;
		align-items: center;
	}
	.paymentMethodUl>ul>li>img{
		width: 46px;
		height: 46px;
		margin: 24px 32px 24px 40px;
	}
	.paymentMethodUl_title{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom:1px solid #e3e7e6;
		padding: 24px 0;
	}
	.paymentMethodUl_title>span{
		color: #393939;
		font-size: 30px;
	}
	.paymentMethodUl_title>img{
		height: 24px;
		margin-right: 34px;
	}
</style>
