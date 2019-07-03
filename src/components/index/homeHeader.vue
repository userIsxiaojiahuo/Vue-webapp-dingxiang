<template>
  <div class="homeHeader">
    <router-link to="/indexSearch" tag="div" class="inp"><span># 安全变美#</span></router-link>
    <dxMessage/>
  </div>
</template>

<script>
  import dxMessage from '../public/dxMessage'

  /**
   * 首页-头部
   */
  export default {
    name: 'homeHeader',
    components: {
      dxMessage
    }
  }
</script>

<style scoped>
  .homeHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px;
  }

  .inp {
    background: url("../../assets/img/home/ic_search_before.png") no-repeat 30px center;
    background-size: 36px 36px;
    height: 90px;
    font-size: 30px;
    line-height: 90px;
    text-indent: 80px;
    flex: 1;
    margin-right: 34px;
    border-radius: 10px;
    border: 1px solid #f3f3f3; /*no*/
    outline: none;
    box-shadow: 10px 10px #fcfcfc;
  }

  .inp span {
    color: #999999;
    font-weight: bold;
  }

  .header img {
    width: 44px;
    height: 44px;
  }
</style>
