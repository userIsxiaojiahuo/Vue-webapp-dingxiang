<template>
	<div class="editAddress">
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<van-address-edit :area-list="areaList"
                      show-search-result
                      :search-result="searchResult"
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail"
    >
    </van-address-edit>
	</div>
</template>
<script>
	/* 顶部返回 */
	import HeaderReturn from "../components/public/dxHeaderReturn.vue"
	/* 引入省市区文件 */
	import area from "../../static/js/area.js"
	/* 编辑地址 */
	export default {
		name: "editAddress",
		components:{
			HeaderReturn
		},
		data() {
			return {
				areaList:area,
				searchResult: [],
				headerReturn:{
					title:"编辑地址",
					ico:require("../assets/onlineImg/ic_titlebar_back.png")
				},
			}
		},
		methods: {
			onSave() {
				Toast('save');
			},
			onDelete() {
				Toast('delete');
			},
			onChangeDetail(val) {
				if (val) {
					this.searchResult = [{
						name: '黄龙万科中心',
						address: '杭州市西湖区'
					}];
				} else {
					this.searchResult = [];
				}
			}
		}
	}
</script>

<style scoped>
	.editAddress {
		width: 100%;
	}
</style>
