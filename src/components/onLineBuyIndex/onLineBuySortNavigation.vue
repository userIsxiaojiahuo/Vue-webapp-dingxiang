<template>
  <ul class="onLineBuySortNavigation">
    <router-link :to="{path:'/OnLineBuyDrugList',query:{itemName:item.name}}" tag="li"
                 v-for="(item,index) in buySortNavigation" @click.native="drugIndex(item.id)" :key="index">{{item.name}}
    </router-link>
  </ul>
</template>

<script>
  import newVue from "../../assets/js/newVue.js"
  /*病情分类导航列表*/
  export default {
    name: "onLineBuySortNavigation",
    props: ["buySortNavigation"],
    methods: {
      drugIndex(val) {
        newVue.$emit("drugIndex", val)
      }
    }
  }
</script>

<style>

</style>
