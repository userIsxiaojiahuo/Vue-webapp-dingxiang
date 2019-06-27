<template>
  <div class="drugSearchFooter">
    <span v-for="(item,index) in drugSearchFooter">{{item.title}}</span>
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
    }
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
