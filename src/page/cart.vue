<template>
  <div class="cart">
    <!-- 头部返回 -->
    <HeaderReturn :headerReturnTitle="headerReturn"/>
    <!-- 购药流程 -->
    <CartProcess :cartProcess="cartProcess"/>
    <!-- 购物车列表 -->
    <CartList :drugList="drug" class="OnLineBuyDrugListUl" @tolaPirce="tolaPirce" :drugIdArr="arr"
              @isDrugId="isDrugId"/>
    <!-- 药品列表底部购物车和购买按钮 -->
    <OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot" :isDrugIds="isDrugIds" :toalBcartPirce="cartPirce">
      <!-- 购物车商品总计 -->
      <CartTotalPrice :cartPirce="cartPirce"/>
    </OnLineBuyFoot>
  </div>
</template>

<script>
  import common from "../assets/js/common.js"
  /* 头部返回 */
  import HeaderReturn from "../components/public/dxHeaderReturn.vue"
  /* 购药流程 */
  import CartProcess from "../components/cart/cartProcess.vue"
  /* 药品列表 */
  import CartList from '../components/cart/cartList.vue'
  /* 药品列表底部购物车和购买按钮 */
  import OnLineBuyFoot from '../components/public/dxOnLineBuyFoot.vue'
  /* 购物车商品总计 */
  import CartTotalPrice from '../components/cart/cartTotalPrice.vue'
  /* 购物车 */
  export default {
    name: "cart",
    components: {
      HeaderReturn,
      CartProcess,
      CartList,
      OnLineBuyFoot,
      CartTotalPrice
    },
    created() {
      let tar = this;
      this.$store.dispatch('GetInfo', true);
      let token = common.getCookie("token");
      this.$axios({
        method: 'get',
        url: 'http://121.199.63.71:9006/cart_details/?token=' + token,
      })
        .then(function (response) {
          if (response.data.code == 200) {
            tar.$store.dispatch('GetInfo', false);
            let sum = 0;
            tar.drug = response.data.data.data;
            for (let i = 0; i < response.data.data.data.length; i++) {
              sum += response.data.data.data[i].c_med_num * response.data.data.data[i].price;
              tar.arr.push(response.data.data.data[i].c_med_id);
              tar.isDrugIds.push(response.data.data.data[i].c_med_id)
            }
            tar.cartPirce = sum;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    data() {
      return {
        headerReturn: {
          title: "药品清单",
          ico: require("../assets/onlineImg/ic_titlebar_back.png")
        },
        cartPirce: 0,
        // 购物流程
        cartProcess: {
          liIndex: 0,
          cartProcess: [
            {
              stepNumber: 1,
              text: "购物车"
            },
            {
              stepNumber: 2,
              text: "核对订单"
            },
            {
              stepNumber: 3,
              text: "提交订单"
            }
          ]
        },
        // 药品信息
        drugPrice: 0,
        drug: [],
        onLineBuyFoot: {
          title: "下一步",
          path: "/orderFilling"
        },
        arr: [],
        isDrugIds: []
      }
    },
    methods: {
      tolaPirce(val) {
        if (val[0]) {
          this.cartPirce = val[1];
        }
      },
      isDrugId(val) {
        this.isDrugIds = val;
      }
    },
  }
</script>
<style src="../assets/css/cart.css"></style>
<style scoped>
  .cart {
    width: 100%;
    background: #f4f4f4;
  }

  .OnLineBuyDrugListUl {
    margin-top: 20px;
    background: #fff;
  }

</style>
