<template>
  <div>
    <div class="selectItem" v-for="item in selectItem">
      <p class="selectItemTitle">{{item.selectItemTitle}}</p>
      <div class="selectItemCon">
        <p class="selectItemdDesc">{{item.selectItemdDesc}}</p>
        <span class="rightArrow"><img src="../../assets/diagonseImg/hcp_into.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "selectItem",
    props: ["selectItem"]
  }
</script>

<style scoped>
  .selectItem {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    padding: 0 32px;
  }

  .selectItemTitle {
    font-size: 30px;
    color: #333333;
    line-height: 110px;
    font-weight: 600;
  }

  .selectItemCon {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .selectItemdDesc {
    font-size: 26px;
    color: #999999;
    line-height: 40px;
    display: inline-block;
  }

  .rightArrow {
    margin-left: 40px;
  }

  .rightArrow > img {
    width: 14px;
    height: 26px;
  }
</style>
