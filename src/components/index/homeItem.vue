<template>
  <div class="homeItem">
    <div class="indexList" @click="hanleToModule(item.path)" v-for="(item,index) in indexList" :key="index">
      <div class="homeItemWrapper">
        <img class="imgAuto" :src="item.imgs" alt="">
      </div>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>


<script>
  /**
   * 首页-电话急诊等8大板块
   */
  export default {
    name: "homeItem",
    props: ['indexList'],
    methods: {
      hanleToModule(link) {
        this.$router.push({
          path: link
        })
      }
    }
  }
</script>

<style scoped>
  .homeItem {
    width: 100%;
    padding: 0 25px;
    display: flex;

    flex-wrap: wrap;
  }

  .indexList {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 38px;
  }

  .homeItemWrapper {
    width: 56px;
    height: 56px;
  }
</style>
