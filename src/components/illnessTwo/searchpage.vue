<template>
  <div class="searchBox">
    <div class="search">
      <i :style="{
        'background':'url('+ cancleMsg.icon+')'+'no-repeat',
        'backgroundSize':'cover'
        }"
      ></i>
      <input type="text" :placeholder="cancleMsg.placeholderMsg">
    </div>
    <span @click="goBack()" class="cancBtn">{{cancleMsg.cancleBtn}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "Searchpage",
    props: {
      cancleMsg: {
        type: Object
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .searchBox {
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .search {
    width: 592px;
    height: 94px;
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }

  .search > i {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-left: 26px;
  }

  .search input {
    outline: none;
    border: none;
    background-color: #f5f5f5;
    font-size: 28px;
    font-weight: bolder;
    margin-left: 30px;
  }

  .search input::placeholder {
    color: #999999;
  }

  .cancBtn {
    margin-left: 32px;
    font-size: 30px;
    color: #666666;
    font-weight: bolder;
    height: 94px;
    line-height: 94px;
  }
</style>
