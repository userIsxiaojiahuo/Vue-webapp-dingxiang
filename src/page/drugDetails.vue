<template>
	<div class="drugDetails">
		<div class="drugDetails_box">
			<!-- 药品详情页头部关闭 -->
			<DrugDetailsHeader  @isNoDrugDetails="isNoDrugDetails"/>
			<div class="onLineBuyDrugListLi_box">
				<!-- 药品图片、价格和数目的加减 -->
				<OnLineBuyDrugListLi :drugList="drug" :isDrugBtu="isDrugBtu"/>
			</div>
			<!-- 药品详情页的提示 -->
			<DrugDetailsTips :drugDetailsTips="drugDetailsTips"/>
			<!-- 药品包装信息和规格 -->
			<DrugDetailsInformation :drugInformation="drugInformation"/>
			<!-- 药品详情底部的包邮，和承若书 -->
			<DrugDetailsFootTips/>
			<!-- 药品底部购物车和购买按钮 -->
			<OnLineBuyFoot :onLineBuyFoot="onLineBuyFoot">
				<!-- 在线购药底部购物车按钮的图片和内容 -->
				<OnLineFootCratBtu/>
			</OnLineBuyFoot>
		</div>
	</div>
</template>

<script>
	import newVue from "../assets/js/newVue.js"
	/* 顶部透明模块 */	
	import DrugDetailsOpacity from '../components/drugDetails/drugDetailsOpacity.vue'
	/* 药品详情页头部关闭 */
	import DrugDetailsHeader from '../components/drugDetails/drugDetailsHeader.vue'
	/* 药品图片、价格和数目的加减 */
	import OnLineBuyDrugListLi from '../components/onLIneBuyDrugList/onLineBuyDrugListLi.vue'
	/* 药品详情页的提示 */
	import DrugDetailsTips from '../components/drugDetails/drugDetailsTips.vue'
	/* 药品包装信息和规格 */	
	import DrugDetailsInformation from '../components/drugDetails/drugDetailsInformation.vue'
	/* 药品详情底部的包邮，和承若书 */
	import DrugDetailsFootTips from '../components/drugDetails/drugDetailsFootTips.vue'
	/* 药品底部购物车和购买按钮 */
	import OnLineBuyFoot from '../components/public/dxOnLineBuyFoot.vue'
	/* 在线购药底部购物车按钮的图片和内容 */
	import OnLineFootCratBtu from '../components/onLIneBuyDrugList/onLineFootCratBtu.vue'
	/* 药品详情页 */
	export default{
		name:"drugDetails",
		components:{
			DrugDetailsOpacity,
			DrugDetailsHeader,
			OnLineBuyDrugListLi,
			DrugDetailsTips,
			DrugDetailsInformation,
			DrugDetailsFootTips,
			OnLineBuyFoot,
			OnLineFootCratBtu
		},
		created(){
			newVue.$on("drugDetalis",(val)=>{
				let url = 'http://121.199.63.71:9006/medc_illness/'+val+'/details/'
				this.$axios.get(url)
				.then((response)=>{
					this.drug = response.data.data[0];
					this.drugInformation[0].text = response.data.data[0].med_name;
					this.drugInformation[1].text = response.data.data[0].approval_number;
					this.drugInformation[2].text = response.data.data[0].packing_size;
					this.drugInformation[3].text = response.data.data[0].manufacturer;
					this.drugInformation[4].text = response.data.data[0].shape;
					this.drugInformation[5].text = response.data.data[0].attentions;
					this.drugInformation[6].text = response.data.data[0].pdc_date;
					this.drugInformation[7].text = response.data.data[0].taboo;
					this.drugInformation[8].text = response.data.data[0].composition;
					this.drugInformation[9].text = response.data.data[0].med_interact;
					this.drugInformation[10].text = response.data.data[0].pharm_toxicity;
					this.drugInformation[11].text = response.data.data[0].storage;
					this.drugInformation[12].text = response.data.data[0].indications;
					this.drugInformation[13].text = response.data.data[0].reaction;
					this.drugInformation[14].text = response.data.data[0].med_formulation;
				})
				.catch((error)=>{
					console.log(error)
				})
			})
		},
		data(){
			return{
				 // 药品的信息
				drug:{},
				isDrugBtu:true,
				// 药品上边提示和保证
				drugDetailsTips:{
					beCareful:{
						pic:require("../assets/onLineImg/ic_tag_warning_gery.png"),
						title:"医生会依据病情修改药品数量"
					},
					ensure:[
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						},
						{
							pic:require("../assets/onLineImg/ic_medicine_little_grey.png"),
							title:"国药网提供"
						}
					]
				},
				// 药品包装规格
				drugInformation:[
					{
						name:"药品名称",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"批准文号",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"包装规格",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"制造商",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"性状",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"注意事项",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"生产日期",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"禁忌",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药品成分",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药品相互作用",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"药理毒理",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"贮藏",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"适应症",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"不良反应",
						text:"泰尔丝(异维A酸胶丸)"
					},
					{
						name:"剂型",
						text:"泰尔丝(异维A酸胶丸)"
					}
				],
				onLineBuyFoot:{
					title:"选择药品",
					path:"/cart"
				}
			}
		},
		methods:{
			isNoDrugDetails(){
				this.$emit("isNoDrugDetails",false)
			}
		}
	}
</script>

<style src="../assets/css/drugDetails.css"></style>
<style scoped>
	.drugDetails{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.drugDetails_box{
		width: 100%;
		position: absolute;
		left: 0;
		background: #fff;
	}
	.onLineBuyDrugListLi_box{
		background: #fff;
		margin-bottom: 34px;
		padding: 0 30px;
	}
</style>
