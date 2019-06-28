<template>
	<div class="headerReturn">
		<div class="headerReturn-box">
			<img @click="headerReturn" :src="headerReturnTitle.ico" class="headerReturn-ico"></img>
			<slot>
				<span class="headerReturn-text">{{headerReturnTitle.title}}</span>
			</slot>
		</div>
	</div>
</template>

<script>
	export default{
		/*头部返回*/ 
		name:"headerReturn",
		props:["headerReturnTitle"],
		methods:{
			headerReturn(){
				if (window.history.length <= 1) {
					this.$router.push({path:'/'})
					return false
				} else {
					this.$router.go(-1)
				}
			}
		}
	}
</script>

<style scoped>
	.headerReturn{
		width: 100%;
		height: 120px;
		background: #fcfcfc;
		border-bottom: 1px solid #ebebeb;
		padding: 0 30px;
	}
	.headerReturn-box{
		display: flex;
		height: 100%;
		align-items: center;
	}
	.headerReturn-ico{
		display: inline-block;
		height: 38px;
		vertical-align: top;
	}
	.headerReturn-text{
		font-size: 32px;
		color: #030303;
		font-weight: 600;
		line-height: 1.2;
	}
</style>
