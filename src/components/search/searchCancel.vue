<template>
  <div class="searchCancel">
    <span @click="back">取消</span>
  </div>
</template>

<script>
  export default {
    name: "searchCancel",
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  /*
  首页搜索界面取消（返回上一级按钮）
  */
  .searchCancel {
    margin-left: 20px;
  }

  span {
    color: #666666;
    font-size: 32px;
  }
</style>
