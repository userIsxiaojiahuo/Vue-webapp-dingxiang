<template>
  <div class="hospitalSearchFooter">
    <span v-for="(item,index) in hospitalSearchFooter">{{item.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "hospitalSearchFooter",
    props: {
      hospitalSearchFooter: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  /*
 医生搜索界面底部
 */
  .hospitalSearchFooter {
    width: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .hospitalSearchFooter > span {
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
