<template>
	<div class="onLineBuyFoot">
		<div class="onLineBuyFoot-left">
			<slot></slot>
		</div>
			<router-link @click.native="placeOrder(onLineBuyFoot.title)" :to="{path:onLineBuyFoot.path,query:{drugId:isDrugIds,cartPirce:toalBcartPirce}}" tag="div" class="onLineBuyFoot-btu">{{onLineBuyFoot.title}}</router-link>
	</div>
</template>

<script>
	import common from "../../assets/js/common.js"
  /* 药品列表底部购物车和购买按钮 */
  export default {
    name: "onLineBuyFoot",
    props: ["onLineBuyFoot","isDrugIds","toalBcartPirce"],
	methods: {
		placeOrder(val){
			if(val=="立即支付"){
				let token = common.getCookie("token");
				this.$axios({
					method: 'get',
					url: 'http://121.199.63.71:9006/create_order/?token='+token,
				})
				.then(function (response) {
					if(response.data.code==200){
					}
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		}
	},
// 	watch:{
// 		isDrugIds:{
// 			immediate: true,
// 			handler(info) {
// 				this.show = info
// 			}
// 		}
// 	}	
  }
</script>

<style scoped>
  .onLineBuyFoot {
    width: 100%;
    height: 98px;
    border-top: 1px solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: white;
  }

  .onLineBuyFoot-left {
    flex: 71.2%;
    min-width: 71.2%;
    height: 100%;
    padding-left: 30px;
  }

  .onLineBuyFoot-btu {
    flex: 28.8%;
    min-width: 28.8%;
    height: 100%;
    background: #28b7a3;;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 98px;
  }
</style>
