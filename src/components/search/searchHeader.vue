<template>
  <div class="header">
    <input type="text" placeholder="# 安全变美#"/>
    <span @click="back">取消</span>
  </div>
</template>

<script>
  /**
   * 搜索头部
   */
  export default {
    name: 'searchHeader',
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    display: flex;
    background-color: #fcfcfc;
    justify-content: space-between;
    align-items: center;
    padding: 36px 36px 20px;
  }

  input {
    background: url("../../assets/img/home/ic_search_after.png") no-repeat 30px center;
    background-size: 36px 36px;
    background-color: #f2f2f2;
    color: #bababa;
    height: 90px;
    font-size: 30px;
    line-height: 90px;
    text-indent: 80px;
    width: 598px;
    border-radius: 10px;
    border: 1px solid #f3f3f3; /*no*/
    outline: none;
    box-shadow: 10px 10px #fcfcfc;
  }

  span {
    color: #666666;
    font-size: 32px;
  }
</style>

