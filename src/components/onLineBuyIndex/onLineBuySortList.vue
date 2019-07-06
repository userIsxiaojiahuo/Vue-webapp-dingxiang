<template>
  <ul class="onLineBuySortList">
    <Router-link :to="{path:'/OnLineBuyDrugList',query:{itemName:item.name}}" tag="li" v-for="(item,index) in buySort"
                 :key="index" @click.native="drugIndex(item.id)">
      <img :src="'http://121.199.63.71:9006'+item.img"/>
      <span class="onLineBuy-nav-title">{{item.name}}</span>
    </Router-link>
  </ul>
</template>

<script>
  import newVue from "../../assets/js/newVue.js"
  /*病情分类nav列表*/
  export default {
    name: "onLineBuySortList",
    props: ["buySort"],
    methods: {
      drugIndex(val) {
        newVue.$emit("drugIndex", val)
      }
    }
  }
</script>

<style>

</style>
