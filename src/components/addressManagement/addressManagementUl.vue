<template>
	<div class="addressManagementUl">
		<ul>
			<li>
				<div class="addressManagementUl_input">
					<img src="../../assets/onLineImg/ic_checkbox_n.png">
				</div>
				<div class="addressManagementUl_text">
					<p class="addressManagementUl_user"><span class="addressManagementUl_text_name">姓名</span><span class="addressManagementUl_text_phone">手机号</span></p>
					<p class="addressManagementUl_address">陕西省西安市雁塔区南窑头</p>
					<div class="addressManagementUl_btu">
						<p><img src="../../assets/onLineImg/write_icon.png"><span>编辑</span></p>
						<p><img src="../../assets/onLineImg/ic_tarsh_gray.png"><span>删除</span></p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	/* 地址列表 */
	export default{
		name:"addressManagementUl"
	}
</script>

<style scoped>
	.addressManagementUl{
		width: 100%;
		margin-top: 16px;
		background: #fff;
	}
	.addressManagementUl>ul{
		width: 100%;
		padding: 0 30px;
	}
	.addressManagementUl>ul>li{
		width: 100%;
		display: flex;
	}
	.addressManagementUl_input>img{
		width: 32px;
		height: 32px;
		margin-left: 6px;
		margin-top: 76px;
		margin-bottom: 72px;
		margin-right: 36px;
	}
	.addressManagementUl_user{
		color: #313131;
		font-size: 30px;
		display: flex;
		font-weight: 700;
		margin-top: 30px;
	}
	.addressManagementUl_text{
		width: 100%;
	}
	.addressManagementUl_text_name{
		margin-right: 30px;
	}
	.addressManagementUl_address{
		color: #838383;
		font-size: 22px;
	}
	.addressManagementUl_btu{
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}
	.addressManagementUl_btu>p{
		color: #676767;
		font-size: 28px;
	}
	.addressManagementUl_btu>p:first-of-type{
		margin-right: 22px;
	}
	.addressManagementUl_btu>p>img{
		height: 28px;
		vertical-align: sub;
	}
</style>
