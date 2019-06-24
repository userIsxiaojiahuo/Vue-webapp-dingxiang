<template>
	<div class="onLIneBuyDrugList">
		<!-- 公共的头部 -->
		<HeaderReturn :headerReturnTitle="headerReturn">
			<!-- 头部里面的搜索框 -->
			<OnLineBuyListHeaber :onLineSearch="search"/>
		</HeaderReturn>
		<!-- 药品列表 -->
		<OnLIneBuyDrugListUl/>
	</div>
</template>

<script>
	/* 头部返回 */
	import HeaderReturn from '../common/headerReturn.vue'
	/* 搜索 */ 
	import OnLineBuyListHeaber from '../components/onLIneBuyDrugList/onLineBuyListHeaber.vue'
	/* 药品列表 */
	import OnLIneBuyDrugListUl from '../components/onLIneBuyDrugList/onLIneBuyDrugListUl.vue'
	/* 本组件在线购药药品列表 */
	export default{
		name:"onLIneBuyDrugList",
		components:{
			HeaderReturn,
			OnLineBuyListHeaber,
			OnLIneBuyDrugListUl
		},
		data(){
			return{
				headerReturn:{
					title:"",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
				search:{
					// pic:require("../../assets/onLineImg/ic_search_after.png"),
					pic:require("../assets/onLineImg/ic_search_after.png"),
					title:"痘痘"
				}
			}
		}
	}
</script>

<style scoped>
	.onLIneBuyDrugList{
		width: 100%;
	}
</style>
