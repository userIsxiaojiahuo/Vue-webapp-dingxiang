<template>
	<ul class="cartList">
		<li>
			<van-checkbox v-model="checked" checked-color="#28b7a3"></van-checkbox>
			<div class="cartListDrug">
				<div class="cartList_img">
				  <img src=""/>
				</div>
				<div class="cartList_text">
					<h2 class="cartList_med_name">药品名: </h2>
					<span class="cartList_packing_size">药品规格: </span>
					<span class="cartList_med_stock">库存: 盒</span>
					<div class="cartList_list_price">
						<span class="cartList_price">￥22</span>
						<div class="cartList_num_btu">
							<img @click.stop="btuReduce" class="cartList_num_btu_reduce" src="../../assets/onLineImg/ic_cut_drug.png">
							<span ref="drugNum">1</span>
							<img @click.stop="btuAdd" class="cartList_num_btu_add" src="../../assets/onLineImg/ic_add_drug.png">
						</div>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	/* 购物车列表 */
	export default{
		name:"CartList",
		data(){
			return{
				checked: false,
			}
		},
		methods:{
			btuAdd(){
				let num = parseInt(this.$refs.drugNum.innerHTML);
				num++;
				this.$refs.drugNum.innerHTML = num;
				
				console.log(num)
			},
			btuReduce(){
				let num = parseInt(this.$refs.drugNum.innerHTML);
				if(num > 1){
					num--;
				}
				this.$refs.drugNum.innerHTML = num;
				console.log(num)
			}
		}
	}
</script>

<style>
</style>
