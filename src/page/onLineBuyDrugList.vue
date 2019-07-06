<template>
  <div class="onLIneBuyDrugList">
    <!-- 公共的头部 -->
    <HeaderReturn :headerReturnTitle="headerReturn">
      <!-- 头部里面的搜索框 -->
      <OnLineBuyListHeaber :onLineSearch="search" />
    </HeaderReturn>
    <!-- 药品列表 -->
    <OnLineBuyDrugListUl :drugList="drug" @toalNume="toalNume"/>
    <!-- 药品列表底部购物车和购买按钮 -->
    <OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
      <!-- 在线购药底部购物车按钮的图片和内容 -->
      <OnLineFootCratBtu :drugToalNume="drugToalNume"/>
    </OnLineBuyFoot>
  </div>
</template>

<script>
	import newVue from "../assets/js/newVue.js"
  /* 头部返回 */
  import HeaderReturn from '../components/public/dxHeaderReturn.vue'
  /* 搜索 */
  import OnLineBuyListHeaber from '../components/onLIneBuyDrugList/onLineBuyListHeaber.vue'
  /* 药品列表 */
  import OnLineBuyDrugListUl from '../components/onLIneBuyDrugList/onLineBuyDrugListUl.vue'
  /* 药品列表底部购物车和购买按钮 */
  import OnLineBuyFoot from '../components/public/dxOnLineBuyFoot.vue'
  /* 在线购药底部购物车按钮的图片和内容 */
  import OnLineFootCratBtu from '../components/onLIneBuyDrugList/onLineFootCratBtu.vue'
  /* 本组件在线购药药品列表 */
  export default {
    name: "onLIneBuyDrugList",
    components: {
      HeaderReturn,
      OnLineBuyListHeaber,
      OnLineBuyDrugListUl,
      OnLineBuyFoot,
      OnLineFootCratBtu,
    },
		created(){
			this.$store.dispatch('GetInfo', true);
			let url = "";
			if(url==""){
				this.$axios.get('http://121.199.63.71:9006/medc_illness/1-1/')
				.then((response)=>{
					if(response.data.code==200){
						this.$store.dispatch('GetInfo', false);
						this.drug = response.data.data;
					}
				})
				.catch((error)=>{
					console.log(error)
				})
			}
			newVue.$on("drugIndex",(val)=>{
				url = 'http://121.199.63.71:9006/medc_illness/'+val+'/';
				this.$axios.get(url)
				.then((response)=>{
					if(response.data.code==200){
						this.$store.dispatch('GetInfo', false);
						this.drug = response.data.data;
					}
				})
				.catch((error)=>{
					console.log(error)
				})
			})
		},
    data() {
      return {
        headerReturn: {
          title: "",
          ico: require("../assets/onlineImg/ic_titlebar_back.png")
        },
        search: {
          pic: require("../assets/onLineImg/ic_search_after.png"),
          title: "痘痘"
        },
        drug: [],
        onLineBuyFoot: {
          title: "去支付",
          path: "/orderFilling"
        },
        show: false,
				drugToalNume:0
      }
    },
    methods: {
			toalNume(val){
				this.drugToalNume = val;
			}
		}
  }
</script>
<style src="../assets/css/onLIneBuyDrugList.css"></style>
<style scoped>
  .onLIneBuyDrugList {
    width: 100%;
    height: 100%;
  }
</style>
