<template>
  <div class="cipherPayment">
    <!-- 头部 -->
    <CartPaymentHeader :cartPaymentHeader="cartPaymentHeader"/>
    <!-- 密码输入框 -->
    <van-password-input :value="value" info="密码为 6 位数字" @focus="showKeyboard = true"/>
    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
  </div>
</template>

<script>
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
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
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
