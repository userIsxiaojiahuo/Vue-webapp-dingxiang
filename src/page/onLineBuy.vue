<template>
  <div class="onLineBuy-box">
    <!-- 顶部返回上一层 -->
    <HeaderReturn :headerReturnTitle="headerReturn"/>
    <!-- 搜索 -->
    <OnLineSearch :onLineSearch="onLineSearch"/>
    <!-- 安心购 -->
    <OnLineBuyNoWorry :buyNoWorry="buyNoWorry"/>
    <!-- 病情分类 -->
    <OnLineBuySort :commSort="buySort.title">
      <!-- 病情分类nav列表 -->
      <OnLineBuySortList :buySort="buySort.nav"/>
    </OnLineBuySort>
    <OnLineBuySort v-for="(item,index) in buySortNavigation" :key="index" :commSort="item.title">
      <!-- 病情分类导航列表 -->
      <OnLineBuySortNavigation :buySortNavigation="item.nav"/>
    </OnLineBuySort>
  </div>
</template>
<script>
  /*顶部返回上一层*/
  import HeaderReturn from '../components/public/dxHeaderReturn.vue';
  /*搜索*/
  import OnLineSearch from '../components/onLineBuyIndex/onLineSearch.vue';
  /*安心购*/
  import OnLineBuyNoWorry from '../components/onLineBuyIndex/onLineBuyNoWorry.vue';
  /*病情分类*/
  import OnLineBuySort from '../components/public/dxOnLineBuySort.vue';
  /*病情分类nav列表*/
  import OnLineBuySortList from '../components/onLineBuyIndex/onLineBuySortList.vue';
  /*病情分类导航列表*/
  import OnLineBuySortNavigation from '../components/onLineBuyIndex/onLineBuySortNavigation.vue';

  export default {
    /*本组件在线购药首页*/
    name: 'onLineBuy',
    components: {
      HeaderReturn,
      OnLineSearch,
      OnLineBuyNoWorry,
      OnLineBuySort,
      OnLineBuySortList,
      OnLineBuySortNavigation
    },
		created(){
			this.$axios.get('http://121.199.63.71:9006/medc_illness/')
			.then((response)=>{
				this.buySort.nav = response.data.data[0];
				for(let i=1;i<response.data.data.length;i++){
					this.buySortNavigation[i-1].nav = response.data.data[i];
				}
			})
			.catch((error)=>{
				console.log(error)
			})
		},
    data() {
      return {
        headerReturn: {
          title: "在线购药",
          ico: require("../assets/onlineImg/ic_titlebar_back.png")
        },
        buyNoWorry: {
          bg: require("../assets/onLineImg/im_free_buydrug.png"),
          ico: require("../assets/onLineImg/ic_arrow.png")
        },
        onLineSearch: "搜索疾病，症状",
        buySort: {
          title: "常见症状",
          nav: []
        },
        buySortNavigation: [
          {
            title: "呼吸系统",
            nav: []
          },
          {
            title: "皮肤问题",
            nav: []
          },
          {
            title: "消化系统",
            nav: []
          },
        ]
      }
    }
  }
</script>
<style src="../assets/css/onLineBuy.css"></style>
<style scoped>
  .onLineBuy-box {
    width: 100%;
    min-height: 100%;
  }
</style>
