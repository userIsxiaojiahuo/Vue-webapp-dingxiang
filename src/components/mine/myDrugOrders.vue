<template>
  <div class="myInquiry">
    <div class="myCollect">
      <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
      <dxDefaultPage v-slot:DefaultPageLogo :DefaultPageTxt="DefaultPageTxt" v-if="isPic">
        <img class="imgAuto" src="../../assets/img/defaultPage/ic_zero_orders_empty.png" alt="">
      </dxDefaultPage>
			<myDrugOrdersLi v-if="!isPic" :DrugOrders="DrugOrders"/>
    </div>
  </div>
</template>

<script>
	import common from "../../assets/js/common.js"
  import dxHeaderReturn from '../../components/public/dxHeaderReturn'
  import dxDefaultPage from '../../components/public/dxDefaultPage'
	import myDrugOrdersLi from './myDrugOrdersList.vue'
  export default {
    name: "myDrugOrders",
    components: {
      dxHeaderReturn, 
			dxDefaultPage,
			myDrugOrdersLi
    },
    data() {
      return {
        headerReturnTitle: {
          title: "我的药品订单"
        },
        DefaultPageTxt: {
          txt: "暂无相关订单"
        },
				isPic:true,
				DrugOrders:[]
      }
    },
		created() {
			let tar = this;
			this.$store.dispatch('GetInfo', true)
			let token = common.getCookie("token");
			this.$axios({
				method: 'get',
				url: 'http://121.199.63.71:9006/order_list/?token='+token,
			})
			.then(function (response) {
				if(response.data.code==200){
					tar.$store.dispatch('GetInfo', false)
					if(response.data.data.length != 0){
						tar.isPic = false;
						tar.DrugOrders = response.data.data;
					}
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		}
  }
</script>

<style scoped>
  .myCollect, .myInquiry {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
		background: #fcfcfc;
  }
</style>
