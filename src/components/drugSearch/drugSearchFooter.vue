<template>
  <div class="drugSearchFooter">
    <span @click="drugSearch(item.title)" v-for="(item,index) in drugSearchFooter">{{item.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "drugSearchFooter",
    props: {
      drugSearchFooter: {
        type: Array
      }
    },
    data() {
      return {}
    },
		methods: {
			drugSearch(val) {
				this.$store.dispatch('GetInfo', true);
				let url = 'http://121.199.63.71:9006/medcine_search/'
				this.$axios.post(url,{index:val})
				.then((response)=>{
					if(response.data.code==200){
						this.$store.dispatch('GetInfo', false);
						this.$emit("drugSearchResult",{isDrugSearchHot:false,isDrugSearchResult:true,result:response.data.datas})
					}
				})
				.catch((error)=>{
					console.log(error)
				})
			}
		},
  }
</script>

<style scoped>
  /*
 医生搜索界面底部
 */
  .drugSearchFooter {
    width: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .drugSearchFooter > span {
    font-size: 28px;
    color: #666666;
    display: flex;
    align-items: center;
    height: 56px;
    padding: 0 20px;
    border: 1px solid #d1d1d1; /*no*/
    margin-left: 20px;
    margin-bottom: 20px;
    border-radius: 28px;
    font-weight: bold;
  }
</style>
