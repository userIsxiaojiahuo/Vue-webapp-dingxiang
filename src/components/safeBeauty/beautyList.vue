<template>
  <!--安全变美-->
  <div class="safeBeautyWrap">
    <div class="beautyItem" v-for="item in beautyList"><!--:style="{background:item.backgroundImg}"-->
      <div class="beautyItemTitle">{{item.title}}
        <span class="beautyItemDesc">{{item.desc}}</span>
      </div>
      <div class="beautyMore">更多
        <img src="../../assets/diagonseImg/ic_symptom_arrow.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "beautyList",
    props:["beautyList"]
  }
</script>

<style scoped>
  .safeBeautyWrap{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .beautyItem{
    width: 100%;
    height: 540px;
    margin-bottom: 45px;
    border-top: 1px solid #f3eef4;
    border-bottom: 1px solid #f3eef4;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .beautyItemTitle{
    font-size: 48px;
  }
  .beautyItemDesc{
    font-size: 34px;
    display: block;
    margin-top: 20px;
    letter-spacing: 2px;
  }
  /*更多*/
  .beautyMore{
    width: 168px;
    height: 80px;
    background: rgba(184,184,184,.7);
    font-size: 28px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5bac9d;
    position: absolute;
    right: 90px;
    bottom: 44px;
  }
  .beautyMore>img{
    width: 30px;
  }
</style>
