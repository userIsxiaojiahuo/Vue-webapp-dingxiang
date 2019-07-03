<template>
	<div class="paymentMethodUl">
		<ul>
			<li v-for="(itme,index) in paymentMethodUl" :key="index" @click="paymentMethodIdex(index)">
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
		props:["paymentMethodUl"],
		methods:{
			paymentMethodIdex(index){
				this.$emit("paymentMethodIdex",index);
			}
		}
	}
</script>

<style>
	
</style>
