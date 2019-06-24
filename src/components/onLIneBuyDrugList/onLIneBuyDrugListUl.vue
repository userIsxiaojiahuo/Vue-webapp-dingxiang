<template>
	<ul class="onLIneBuyDrugListUl">
		<li class="onLIneBuyDrugListUl_li">
			<div class="onLIne_list_img">
				<img src="../../assets/onLineImg/drug-1.png" >
				<span>处方药</span>
			</div>
			<div class="onLIne_list_text">
				<h2><span>泰尔丝(异维A酸胶丸)</span><span>10mgx20粒/盒</span></h2>
				<p class="drugDetails">适用于重度难治性结节性痔疮(结节性痔疮，即直径≥5mm的炎性损害，结节可能化脓或出血)。适用于重度难治性结节</p>
				<div class="onLIne_list_price">
					<span class="drug_price">￥35.60</span>
					<span class="drug_btu">选择该药</span>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	/* 药品列表 */
	export default{
		name:"onLIneBuyDrugListUl"
	}
</script>

<style>
	.onLIneBuyDrugListUl{
		width: 100%;
		padding: 0 30px;
		overflow: hidden;
	}
	.onLIneBuyDrugListUl_li{
		width: 100%;
		height: 252px;
		border-bottom: 1px solid #ebebeb;
		padding: 40px 0 42px;
		display: flex;
	}
	.onLIne_list_img{
		width: 170px;
		height: 170px;
		flex: 0 0 24.63%;
		position: relative;
		margin-right: 20px;
	}
	.onLIne_list_img>img{
		width: 100%;
		height: 100%;
	}
	.onLIne_list_img>span{
		display: block;
		width: 100%;
		height: 56px;
		background: #666666;
		position: absolute;
		bottom: 0;
		left: 0;
		text-align: center;
		line-height: 56px;
		font-size: 26px;
		color: #fff;
	}
	.onLIne_list_text{
		height: 100%;
	}
	.onLIne_list_text>h2{
		font-size: 30px;
		color: #000;
		line-height: 30px;
	}
	.onLIne_list_text>h2>span:first-of-type{
		display: inline-block;
		width: 222px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 34px;
		letter-spacing: 1px;/*no*/
	}
	.onLIne_list_text>h2>span:last-of-type{
		vertical-align: super;
		letter-spacing: 1px;/*no*/
	}
	.drugDetails{
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 20px;
		letter-spacing: 1px;
		line-height: 26px;
	}
	.onLIne_list_price{
		height: 54px;
		margin-top: 20px;
		/* line-height: 54px; */
	}
	.drug_price{
		color: #28b7a3;
		font-size: 22px;
		font-weight: 600;
	}
	.drug_btu{
		display: inline-block;
		width: 152px;
		height: 54px;
	}
</style>
