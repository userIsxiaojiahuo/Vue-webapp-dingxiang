<template>
  <div class="drugSearch">
    <div class="Header">
      <drugBack></drugBack>
      <div class="drugSearchHeader">
        <input @focus="drugSearchHeader" ref="drugSearc" type="text" placeholder="搜索药品">
      </div>
    </div>
		<div class="drugSearchHot" v-if="isDrugSearchHot">
			<drugSearchHot></drugSearchHot>
			<drugSearchFooter @drugSearchResult="drugSearchResult" :drugSearchFooter="drugSearchFooter"></drugSearchFooter>
		</div>
		<selectItem :selectItem="selectItem"/>
  </div>
</template>

<script>
  import drugBack from './../components/drugSearch/drugBack'
  import drugSearchHot from './../components/drugSearch/drugSearchHot'
  import drugSearchFooter from './../components/drugSearch/drugSearchFooter'
	import selectItem from "../components/selectDeskList/selectItem.vue"
  export default {
    name: "drugSearch",
    components: {
      drugSearchHot,
      drugSearchFooter,
      drugBack,
			selectItem
    },
    data() {
      return {
        placeholderText: "搜索药品",
				isDrugSearchHot:true,
				isDrugSearchResult:false,
				selectItem:[],
        drugSearchFooter: [
          {
            title: '痤疮'
          },
          {
            title: '感冒'
          },
          {
            title: '咳嗽'
          },
          {
            title: '退热'
          },
          {
            title: '镇痛'
          },
          {
            title: '避孕'
          },
          {
            title: '腹泻'
          },
          {
            title: '便秘'
          },
          {
            title: '痛经'
          },
          {
            title: '鼻炎'
          }
        ]
      }
    },
		methods: {
			drugSearchHeader() {
				window.onkeydown =(event)=>{
					let evt = evt || window.event;
					if(evt.keyCode == "13"){
						this.$store.dispatch('GetInfo', true);
						let url = 'http://121.199.63.71:9006/medcine_search/'
						this.$axios.post(url,{index:this.$refs.drugSearc.value})
						.then((response)=>{
							if(response.data.code==200){
								this.isDrugSearchHot = false;
								this.isDrugSearchResult = true;
								this.selectItem = response.data.datas;
								this.$store.dispatch('GetInfo', false);
							}
						})
						.catch((error)=>{
							console.log(error)
						})
					}
				}
			},
			drugSearchResult(val){
				this.isDrugSearchHot = val.isDrugSearchHot;
				this.isDrugSearchResult = val.isDrugSearchResult;
				this.selectItem = val.result;
			}
		},
  }
</script>

<style scoped>
  .Header {
    width: 100%;
    display: flex;
    background-color: #fcfcfc;
    justify-content: space-between;
    align-items: center;
    padding: 36px 30px 20px;
    border-bottom: 1px solid #ebebeb;
  }
	.drugSearchHeader {
	  flex: 1;
	}
	
	.drugSearchHeader input {
	  background: url("../assets/img/home/ic_search_after.png") no-repeat 30px center;
	  background-size: 36px 36px;
	  background-color: #f2f2f2;
	  color: #bababa;
	  height: 80px;
	  font-size: 30px;
	  line-height: 90px;
	  text-indent: 80px;
	  width: 100%;
	  border-radius: 10px;
	  border: 1px solid #f3f3f3; /*no*/
	  outline: none;
	  box-shadow: 10px 10px #fcfcfc;
	}
</style>
