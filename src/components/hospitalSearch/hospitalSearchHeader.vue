<template>
  <div class="hospitalSearchHeader">
    <img @click="back" src="./../../assets/img/home/ic_titlebar_back.png" alt="">
    <input type="text" placeholder="搜索医院">
  </div>
</template>

<script>
  export default {
    name: 'hospitalSearchHeader',
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  /*
  医生搜索界面头部
  */
  .hospitalSearchHeader {
    width: 100%;
    display: flex;
    background-color: #fcfcfc;
    justify-content: space-between;
    align-items: center;
    padding: 36px 30px 20px;
    border-bottom: 1px solid #ebebeb;
  }

  input {
    background: url("./../../assets/img/home/ic_search_after.png") no-repeat 30px center;
    background-size: 36px 36px;
    background-color: #f2f2f2;
    color: #bababa;
    height: 90px;
    font-size: 30px;
    line-height: 90px;
    text-indent: 80px;
    width: 630px;
    border-radius: 10px;
    border: 1px solid #f3f3f3; /*no*/
    outline: none;
    box-shadow: 10px 10px #fcfcfc;
  }

  img {
    width: 44px;
    height: 44px;
  }
</style>

