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
</style>
