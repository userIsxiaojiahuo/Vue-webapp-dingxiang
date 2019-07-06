<template>
  <div class="cipherPayment">
    <!-- 头部 -->
    <CartPaymentHeader :cartPaymentHeader="cartPaymentHeader" @click="cpherPayment"/>
    <!-- 密码输入框 -->
    <van-password-input :value="value" info="密码为 6 位数字" @focus="showKeyboard = true"/>
    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
  </div>
</template>

<script>
	import common from "../assets/js/common.js"
  /* 头部 */
  import CartPaymentHeader from "../components/public/dxCartPaymentHeader"
  /* 密码支付页面 */
  export default {
    name: "cipherPayment",
    components: {
      CartPaymentHeader,
    },
    data() {
      return {
        cartPaymentHeader: {
          ico: require("../assets/onLineImg/ic_close_details.png"),
          title: "请输入支付密码"
        },
        value: '',
        showKeyboard: true
      }
    },
    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
				if(this.value.length >= 6){
					let tar = this;
					let token = common.getCookie("token");
					let ordersId = common.getCookie("ordersId")
					this.$store.dispatch('GetInfo', true);
					this.$axios({
						method: 'post',
						url: 'http://121.199.63.71:9006/pay_order/?token='+token,
						data:{
							pay_str : tar.value,
							order_id:ordersId
						}
					})
					.then(function (response) {
						if(response.data.code==200){
							tar.$store.dispatch('GetInfo', false);
							if(response.data.msg.o_status==1){
								tar.$notify({
								  message:'支付成功',
								  duration: 1000,
								  background: '#28b7a3'
								})
								tar.$router.push("/myDrugOrders");
							}
						}
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
				}
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
			cpherPayment(){
				console.log(this.cartPaymentHeader.title);
				if(this.cartPaymentHeader.title == "请输入支付密码"){
					console.log(111);
				}
			}
    }
  }
</script>

<style scoped>
  .cipherPayment {
    width: 100%;
    height: 100%;
    background: #f9f9f9;
  }
</style>
