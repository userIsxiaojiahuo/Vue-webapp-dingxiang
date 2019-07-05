<template>
	<div class="addressManagementUl">
		<ul>
			<li v-for="(itme,index) in management" :key="index" ref="addresLi">
				<div class="addressManagementUl_input">
					<img :src="itme.r_default?pics:pic" @click="clickPic(index,itme)" ref="ischeck">
				</div>
				<div class="addressManagementUl_text">
					<p class="addressManagementUl_user"><span class="addressManagementUl_text_name">{{itme.r_name}}</span><span class="addressManagementUl_text_phone">{{itme.r_phone}}</span></p>
					<p class="addressManagementUl_address">{{itme.r_addr}}</p>
					<div class="addressManagementUl_btu">
						<p @click="editAddress(itme)"><img src="../../assets/onLineImg/write_icon.png"><span>编辑</span></p>
						<p @click="deleteAddress(itme,index)"><img src="../../assets/onLineImg/ic_tarsh_gray.png"><span>删除</span></p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import common from "../../assets/js/common.js"
	/* 地址列表 */
	export default{
		name:"addressManagementUl",
		// props: ["management"],
		data() {
			return {
				management: [],
				pic:require('../../assets/onLineImg/ic_checkbox_n.png'),
				pics:require('../../assets/onLineImg/ic_checkbox_s.png')
			}
		},
		created(){
			let tar = this;
			this.$store.dispatch('GetInfo', true)
			let token = common.getCookie("token");
			this.$axios({
				method: 'get',
				url: 'http://121.199.63.71:9006/receive_list/?token='+token,
			})
			.then(function (response) {
				if(response.data.code==200){
					tar.$store.dispatch('GetInfo', false)
					for(let key in response.data.data){
						tar.$set(tar.management,"key", response.data.data[key])
					}
					tar.management = response.data.data;
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		methods: {
			editAddress(itmer) {
				this.$router.push({
					path:"/editAddress",
					query:{
						itme:itmer
					}
				})
			},
			deleteAddress(itmer,index){
				this.$store.dispatch('GetInfo', true)
				let tar = this;
				let token = common.getCookie("token");
				this.$axios({
					method: 'get',
					url: 'http://121.199.63.71:9006/del_receive/?token='+token+'&rec_id='+itmer.id,
				})
				.then(function (response) {
					if(response.data.code==200){
						tar.$store.dispatch('GetInfo', false)
						tar.$refs.addresLi[index].remove();
						this.$notify({
						  message:'删除成功',
						  duration: 1000,
						  background: '#28b7a3'
						})
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			clickPic(index,itme){
				this.$store.dispatch('GetInfo', true)
				let tar = this;
				let token = common.getCookie("token");
				this.$axios({
					method: 'get',
					url: 'http://121.199.63.71:9006/change_default/?token='+token+'&rec_id='+itme.id,
				})
				.then(function (response) {
					if(response.data.code==200){
						tar.$store.dispatch('GetInfo', false)
						tar.$router.push({
							path:"/orderFilling",
							query:{
								itme:itme
							}
						})
					}
				})
				.catch(function (error) {
					console.log(error);
				});
			}
		},
	}
</script>

<style>
	
</style>
