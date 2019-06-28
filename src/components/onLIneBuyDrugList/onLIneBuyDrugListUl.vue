<template>
  <ul class="onLIneBuyDrugListUl">
    <li class="onLIneBuyDrugListUl_li"
        v-for="(item,index) in drugList"
        :key="index"
    >
      <!-- 药品列表的li -->
      <OnLineBuyDrugListLi :drugList="item" :drugListInndex="index"/>
    </li>
  </ul>
</template>

<script>
	/* 药品列表的li */
	import OnLineBuyDrugListLi from './onLineBuyDrugListLi.vue'
	/* 药品列表 */
	export default{
		name:"onLineBuyDrugListUl",
		props:["drugList"],
		components:{
			OnLineBuyDrugListLi
		}
	}
</script>

<style>
  .onLIneBuyDrugListUl {
    width: 100%;
    padding: 0 30px;
    overflow: hidden;
  }

  .onLIneBuyDrugListUl_li {
    width: 100%;
    height: 252px;
    border-bottom: 1px solid #ebebeb;
    padding: 40px 0 42px;
    display: flex;
  }

</style>
