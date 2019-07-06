<template>
	<router-link tag="div" to="/addressManagement" class="orderFillingAddress">
		<p :class="{orderFillingAddressP:titleS}">{{title}}</p>
		<img src="../../assets/onLineImg/ic_arrow.png">
	</router-link>
</template>

<script>
	/* 收货地址 */
	export default{
		name:"orderFillingAddress",
		data() {
			return {
				title: "请选择收货地址",
				titleS:false
			}
		},
		created(){
			if(this.$route.query.itme){
				let str = "姓名："+this.$route.query.itme.r_name+" 手机："+this.$route.query.itme.r_phone+" 地址："+this.$route.query.itme.r_addr
				this.title = str;
				this.titleS = true;
			}
			if(this.$route.query.itme == undefined){
				this.title = "请选择收货地址"
				this.titleS = false;
			}
		}
	}
</script>

<style>
	
</style>
