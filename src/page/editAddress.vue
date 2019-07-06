<template>
	<div class="editAddress">
		<HeaderReturn :headerReturnTitle="headerReturn"/>
		<van-address-edit :addressInfo="addressInfo" :area-list="areaList" show-search-result :search-result="searchResult" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail"/>
	</div>
</template>
<script>
	import common from "../assets/js/common.js"

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
				addressInfo:{}
			}
		},
		created(){
			if(this.$route.query.itme){
				console.log(this.$route.query);
				this.addressInfo = {
					name:this.$route.query.itme.r_name,
					tel:this.$route.query.itme.r_phone,
					areaCode:this.$route.query.itme.r_phone,
					addressDetail:this.$route.query.itme.r_addr
				}
			}
		},
		methods: {
			onSave(val) {
				console.log(this.$router.query);
				let str = val.province+val.county+val.addressDetail;
				if(this.$route.query){
					let tar = this;
					let token = common.getCookie("token");
					this.$axios({
						method: 'post',
						url: 'http://121.199.63.71:9006/edit_receive/?token='+token,
						data:{
							rec_name:val.name,
							rec_phone:val.tel,
							rec_addr:val.str,
							rec_id:tar.$route.query.r_user_id
						}
					})
					.then(function (response) {
						if(response.data.code==200){
							tar.$router.push("/addressManagement")
						}
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				if(this.$router.query == undefined){
					let tar = this;
					let token = common.getCookie("token");
					this.$axios({
						method: 'post',
						url: 'http://121.199.63.71:9006/add_receive/?token='+token,
						data:{
							rec_name:val.name,
							rec_phone:val.tel,
							rec_addr:str
						}
					})
					.then(function (response) {
						if(response.data.code==200){
							tar.$router.push("/addressManagement")
						}
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			},
			onDelete() {
				Toast('delete');
			},
			onChangeDetail(val) {
				if (val) {
					this.searchResult = [
// 						{
// 						name: '黄龙万科中心',
// 						address: '杭州市西湖区'
// 					},
					];
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
