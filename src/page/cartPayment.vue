<template>
  <div class="cartPayment">
    <!-- 支付界面头部 -->
    <CartPaymentHeader :cartPaymentHeader="cartPaymentHeader"/>
    <!-- 支付金额 -->
    <CartPaymentPirce :CartPaymentPirce="CartPaymentPirce"/>
    <!-- 支付页面的支付方式 订单信息 -->
    <CartPaymentSmallFunction/>
    <!-- 支付页面底部按钮 -->
    <CartPaymentFoot/>
  </div>
</template>

<script>
  /* 支付界面头部 */
  import CartPaymentHeader from "../components/public/dxCartPaymentHeader"
  /* 支付金额 */
  import CartPaymentPirce from "../components/cartPayment/cartPaymentPirce"
  /* 支付页面的支付方式 订单信息 */
  import CartPaymentSmallFunction from "../components/cartPayment/cartPaymentSmallFunction"
  /* 支付页面底部按钮 */
  import CartPaymentFoot from "../components/cartPayment/cartPaymentFoot"
  /* 支付页面 */
  export default {
    name: "cartPayment",
    components: {
      CartPaymentHeader,
      CartPaymentPirce,
      CartPaymentSmallFunction,
      CartPaymentFoot
    },
    data() {
      return {
        CartPaymentPirce: "1.00",
        cartPaymentHeader: {
          ico: require("../assets/onLineImg/ic_close_details.png"),
          title: "确认支付"
        }
      }
    }
  }
</script>

<style scoped>
  .cartPayment {
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    position: relative;
  }
</style>
