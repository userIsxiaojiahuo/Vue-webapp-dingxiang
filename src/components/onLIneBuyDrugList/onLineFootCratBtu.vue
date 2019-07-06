<template>
	<div class="onLineBuyFoot-left_box">
		<router-link class="onLineBuyFoot-left-cratImg"
			to="cart"
			tag="div"
		>
			<img :src="pic">
			<span v-if="isShow">{{drugToalNume}}</span>
		</router-link>
		<div class="onLineBuyFootNum">
			<span class="onLineBuyFootNum-noe">已选{{drugToalNume}}中药品</span>
			<span class="onLineBuyFootNum-two" v-if="isShow">共{{drugToalNume}}件</span>
		</div>
	</div>
</template>

<script>
	/* 在线购药底部购物车按钮的图片和内容 */
	export default{
		name:"onLineFootCratBtu",
		props: ["drugToalNume"],
		watch:{
			drugToalNume:{
				immediate:true,
				handler(val){
					if(this.drugToalNume){
						this.isShow = true;
						this.pic = require('../../assets/onLineImg/onLineBuyCrat-2.png')
					}else{
						this.isShow = false;
						this.pic = require('../../assets/onLineImg/onLineBuyCrat.png')
					}
				}
			}
		},
		data() {
			return {
				isShow: false,
				pic:require('../../assets/onLineImg/onLineBuyCrat.png')
			}
		},
	}
</script>

<style scoped>
	.onLineBuyFoot-left_box{
		display: flex;
	}
	.onLineBuyFoot-left-cratImg{
		position: relative;
	}
	.onLineBuyFoot-left-cratImg>img{
		width: 82px;
		height: 82px;
		margin-top: 8px;
		margin-right: 34px;
	}
	.onLineBuyFoot-left-cratImg>span{
		position: absolute;
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #f76260;
		top: 6px;
		right: 26px;
		color: #fff;
		text-align: center;
		line-height: 30px;
	}
	.onLineBuyFootNum-noe{
		display: block;
		font-size: 30px;
		color: #666666;
		margin-top: 8px;
	}
	.onLineBuyFootNum-two{
		color: #a0a0a0;
		font-size: 22px;
	}
</style>
